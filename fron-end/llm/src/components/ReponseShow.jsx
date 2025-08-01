import React, { useEffect } from 'react';

function ResponseShow({ text }) {

    useEffect(() => {    
    hljs.highlightAll();

  }, [text]);
  
  return (
    <div className="llm-response">
    <div className="inner-res">

        <React.Fragment >           
            <div dangerouslySetInnerHTML={{ __html: text }} />
        </React.Fragment>


        </div>
    </div>
  );
}



export default ResponseShow;