import { useRef } from "react";


function UncontrolledInput(){

    const inputRef = useRef(null);

    function handleChange(){
        console.log(inputRef.current.value)
    }


    return(
        <div>
            <h2>Uncontrolled Input</h2>
            <input type="text"
            placeholder="Uncontrolled the input"
            ref={inputRef}
            onChange={handleChange}
            />
            <p>Current value: {inputRef.current?.value}</p>
        </div>
    )

}

export default UncontrolledInput;