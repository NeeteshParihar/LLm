
import express from "express";
import getAiResponse from "./components/model.js";
import cors from 'cors';
import cleanLlmResponse from "./components/cleanLlmResponse.js";
import { marked } from "marked";
import hljs from "highlight.js";


marked.setOptions({
  highlight: function(code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(code, { language }).value;
  },
  langPrefix: 'hljs language-' // For compatibility with highlight.js css
});


const port = 5008;
const app = express();

app.use(cors());

app.use(express.json());

app.post('/query' ,async (req, res)=>{

    try{


        const query = req.body.query;
        const text = await getAiResponse(query);
       
        let transformedText = cleanLlmResponse(text); 
        
        transformedText = marked(transformedText);

        res.status(200).json({
            success: true,
            llmResponse : transformedText
        })

    }catch(err){

        res.status(500).json({
            success: false,
            message: err.message
        })
    }

})


app.listen(port, ()=>{
    console.log('server is running at port', port);
})