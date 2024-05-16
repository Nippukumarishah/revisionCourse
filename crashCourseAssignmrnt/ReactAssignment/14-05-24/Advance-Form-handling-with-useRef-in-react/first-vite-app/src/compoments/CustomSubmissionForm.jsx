import React, { useRef, useState } from 'react'

const CustomSubmissionForm = () => {
const inputRef1 = useRef(null);
const inputRef2 = useRef(null);
const [error, setError] = useState("");


function handleSubmit(e){
    e.preventDefault()
    const formData ={
        field1: inputRef1.current.value,
        field2: inputRef2.current.value,

    }
    if(formData.field1 === ""){
        setError("Field 1 cannot be empty");
        return;
    }
    if(formData.field2 === ""){
        setError("Field 2 cannot be empty");
        return;
    }

}

  return (
    <div>

        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" placeholder='Username' 
            name='username'
            ref={inputRef1}/>
            <label htmlFor="password">Password:</label>
            
            <input type="text" ref={inputRef2} name='password' placeholder='Password' />
        {error && <p style={{color: "green"}}>{error}</p>}
        <button type='submit'>Submit</button>
        </form>
      
    </div>
  )
}

export default CustomSubmissionForm
