import React, { useState } from 'react'
import Editor from "@monaco-editor/react";
import useLocalStorage from './hooks/useLocalStorage';

import "./App.css"
export default function App() {

  const[HTML,setHTML]=useLocalStorage("HTML","")
  const[CSS,setCSS]=useLocalStorage("CSS","")
  const[JS,setJS]=useLocalStorage("JS","")

  const[active,setActive]= useState("HTML")

  const IFRAMECODE =
  ` <html>
  <head>
  <style>
  ${CSS}
  </style>
  </head>
  <body>
  ${HTML}
  <script>
  ${JS}
  </script>
  </body>
   </html> `

  return (
    <div className='container'>
     <h2>Online-Code Editor</h2>
     <div className="main-container">
        <div className='left-container'>
          <button style={{color:active==="HTML"? "white" :"black"}}  className="btn btn-secondary button" onClick={()=>setActive("HTML")}>HTML</button>
          <button style={{color:active==="CSS"?"white":"black" }} className="btn btn-secondary button" onClick={()=>setActive("CSS")}>CSS</button>
          <button style={{color:active==="JS"?"white":"black"}} className="btn btn-secondary button" onClick={()=>setActive("JS")}>JS</button>
      

         {active==="HTML" && 
        //  <textarea value={HTML} onChange={(e)=>setHTML(e.target.value)} > </textarea>
        <Editor
        className='left-container-text'
     height="90vh"
     defaultLanguage="html" 
     defaultValue={HTML}
     onChange={(value,event)=>setHTML(value)}
   /> } 
         {active==="CSS" && 
        //  <textarea value={CSS} onChange={(e)=>setCSS(e.target.value)}> </textarea>
        <Editor
        className='left-container-text'
        height="90vh"
        defaultLanguage="css"
        defaultValue={CSS}
        onChange={(value,event)=>setCSS(value)}
      />
        
         }
        {active==="JS" &&
        //  <textarea value={JS} onChange={(e)=>setJS(e.target.value)}></textarea>
        <Editor
        className='left-container-text'
        height="90vh"
        defaultLanguage="javascript"
        defaultValue={JS}
        onChange={(value,event)=>setJS(value)}
      />
         }
        </div>
        <div className='right-container'>
          <iframe srcDoc={IFRAMECODE} style={{width:"100%", height:"70vh" }} />
        </div>
     </div>
    </div>
  )
}
