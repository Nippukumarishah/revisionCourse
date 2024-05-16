import React, { useRef} from 'react'
import './App.css'
import DynamicForm from './compoments/DynamicForm'
import ValidationForm from './compoments/ValidationForm'
import CustomSubmissionForm from './compoments/CustomSubmissionForm'

function App() {
  

  return (
    <div className='app'>
    <h1>Dynamic From with useRef</h1>
    <h2>Dynamic Form Input Focus</h2>
    <DynamicForm />   
    <h2>Real-Time Input Validation</h2>
    <ValidationForm />
    <h2>Custom Form Submission Handing</h2>
      <CustomSubmissionForm />
    </div>
  )
}

export default App
