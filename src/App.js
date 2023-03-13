import React, { useState } from 'react'
import Editor from "@monaco-editor/react";
import "./App.css"
import CachedIcon from '@mui/icons-material/Cached';


export default function App() {

    const [HTML, setHTML] = useState("")
    const [CSS, setCSS] = useState("")
    const [JS, setJS] = useState("")
    const [Java, setJava] = useState("")
    const [output, setOutput] = useState(false)
    const [python, setPython] = useState("")


    const [active, setActive] = useState("" || window.sessionStorage.getItem("key"))

    const handleClick = () => {
        setOutput(true)

    }
    const CODE =
        `${Java}` || `${python}` ||
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
</html>`


    const refresh = () => {
        window.location.reload()
    }

    return (
        <div className='container'>
            <h2>Online-Code Editor</h2>
            <div className="main-container">
                <div className='left-container'>
                    <button style={{ color: active === "HTML" ? "white" : "black" }} className={active === "HTML" ? "btn btn-primary button" : "btn btn-secondary button"}
                        onClick={() => {
                            setActive("HTML")
                            if (window.sessionStorage.getItem("key") === "Java" || window.sessionStorage.getItem("key") === "python") {
                                window.location.reload()
                                console.log(window.sessionStorage.getItem("key"))
                                sessionStorage.setItem("key", "HTML")
                            }
                        }}>HTML</button>
                    <button style={{ color: active === "CSS" ? "white" : "black" }} className={active === "CSS" ? "btn btn-primary button" : "btn btn-secondary button"}
                        onClick={() => {
                            setActive("CSS")
                            if (window.sessionStorage.getItem("key") === "Java" || window.sessionStorage.getItem("key") === "python") {
                                window.location.reload()
                                console.log(window.sessionStorage.getItem("key"))
                                sessionStorage.setItem("key", "CSS")
                            }
                        }}>CSS</button>
                    <button style={{ color: active === "JS" ? "white" : "black" }} className={active === "JS" ? "btn btn-primary button" : "btn btn-secondary button"}
                        onClick={() => {
                            setActive("JS")
                            if (window.sessionStorage.getItem("key") === "Java" || window.sessionStorage.getItem("key") === "python") {
                                window.location.reload()
                                console.log(window.sessionStorage.getItem("key"))
                                sessionStorage.setItem("key", "JS")
                            }
                        }}>JS</button>

                    <button style={{ color: active === "Java" ? "white" : "black" }} className={active === "Java" ? "btn btn-primary button" : "btn btn-secondary button"} onClick={() => {
                        setActive("Java")
                        window.location.reload()
                        sessionStorage.setItem("key", "Java")
                    }} >JAVA</button>

                    <button style={{ color: active === "python" ? "white" : "black", width: "90px" }} className={active === "python" ? "btn btn-primary button" : "btn btn-secondary button"}
                        onClick={() => {
                            setActive("python")
                            window.location.reload()
                            sessionStorage.setItem("key", "python")
                        }}
                    >PYTHON</button>
                    <button className='btn btn-success run' onClick={handleClick} title="Execute" > Run</button>
                    <button className='refresh' onClick={refresh} title="Re-fresh"> <CachedIcon sx={{ fontSize: 35, color: 'rgb(133,2,32)' }} /> </button>


                    {active === "HTML" &&
                        //  <textarea value={HTML} onChange={(e)=>setHTML(e.target.value)} > </textarea>
                        <Editor
                            className='left-container-text'
                            height="70vh"
                            defaultLanguage="html"
                            defaultValue={HTML}
                            onChange={(value, event) => {
                                setOutput(false)
                                setHTML(value)
                            }}
                        />}
                    {active === "CSS" &&
                        //  <textarea value={CSS} onChange={(e)=>setCSS(e.target.value)}> </textarea>
                        <Editor
                            className='left-container-text'
                            height="70vh"
                            defaultLanguage="css"
                            defaultValue={CSS}
                            onChange={(value, event) => {
                                setOutput(false)
                                setCSS(value)
                            }}
                        />

                    }
                    {active === "JS" &&
                        //  <textarea value={JS} onChange={(e)=>setJS(e.target.value)}></textarea>
                        <Editor
                            className='left-container-text'
                            height="70vh"
                            defaultLanguage="javascript"
                            defaultValue={JS}
                            onChange={(value, event) => {
                                setOutput(false)
                                setJS(value)
                            }}
                        />

                    }
                    {active === "Java" &&
                        //  <textarea value={JS} onChange={(e)=>setJS(e.target.value)}></textarea>
                        <Editor
                            className='left-container-text'
                            height="70vh"
                            defaultLanguage="java"
                            defaultValue={Java}
                            onChange={(value, event) => {
                                setOutput(false)
                                setJava(value)
                            }}
                        />

                    }
                    {active === "python" &&
                        //  <textarea value={JS} onChange={(e)=>setJS(e.target.value)}></textarea>
                        <Editor
                            className='left-container-text'
                            defaultLanguage="python"
                            height="70vh"
                            defaultValue={python}
                            onChange={(value, event) => setPython(value)}
                        />

                    }
                </div>
                <div className='right-container'>
                    <iframe srcDoc={output ? CODE : ""} style={{ width: "100%", height: "70vh" }} />
                </div>
            </div>
        </div>

    )
}
