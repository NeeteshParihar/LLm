import { useState } from "react";
import InputQuery from "./components/inputQuery";
import ResponseShow from "./components/ReponseShow";
import Processing from "./components/processing";

function App(){

  const [res, setResponse] = useState(null); 

  console.log(res);

  return <div className="llm">

    {
      (!res)? <h4> starting asking! </h4> : null
    }

    {
      res? <ResponseShow text={res}/>:null
    }   

   <InputQuery setResponse={setResponse} />

  </div>

}

export default App;