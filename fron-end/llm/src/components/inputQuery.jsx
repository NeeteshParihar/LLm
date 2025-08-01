import { useState } from "react";
import axios from "axios";
import Processing from "./processing.jsx";

function InputQuery({ setResponse }) {

  const [query, setQuery] = useState("");
  const [processing, startProcessing] = useState(false);

  const handleClick = async () => {

    if (!query.trim()) return;
    
    startProcessing(true);
    const Response = await axios.post("http://localhost:5008/query", {
      query,
    });

       
    const data = Response.data;
    setResponse(data.llmResponse);
    startProcessing(false);
    setQuery("");


  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        
      />

      <button disabled={processing} onClick={handleClick}>{(processing)? <Processing/>:<i class="fas fa-play"></i>}</button>
    </div>
  );
}

export default InputQuery;
