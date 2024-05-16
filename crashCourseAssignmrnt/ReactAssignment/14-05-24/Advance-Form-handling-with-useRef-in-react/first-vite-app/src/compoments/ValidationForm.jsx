import React, { useRef, useState } from 'react'


function ValidationForm () {
    const inputRef = useRef(null)
    const [isValid, setIsValid] = useState(false);
  
function handleValidation(){
setIsValid(inputRef.current.value.length >= 5)
}
  
    return (
      <div>
        <label htmlFor="name">Name:
        <input type="text"
        ref={inputRef}
        onChange={handleValidation}
        style={{borderColor: isValid ? "purple" : "red"}}
        placeholder='Name' />
        </label>
        {isValid ? (<p>Valid Input</p>) : (<p>Input must contain at least 5 character</p>)}
        
      </div>
    )
  }


export default ValidationForm
