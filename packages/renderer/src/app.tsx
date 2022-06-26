import React, { useState,useCallback } from 'react'
import Editor from './editor'
import './app.css'
import Preview from './preview'

const App: React.FC = () => {
  const [doc, setDoc] = useState<string>('holl')
  const handleDocChange = useCallback(
    (newDoc:string) => {
      setDoc(newDoc)
    },[]
  )
  return (
    <div className="app">
      <div style={{flex: 1}}>
      <Editor initialDoc={doc} onChange={handleDocChange}/>
      </div>
      <div style={{flex: 1}}>
      <Preview doc={doc}/>
      </div>
    </div>
  )
}
export default App
