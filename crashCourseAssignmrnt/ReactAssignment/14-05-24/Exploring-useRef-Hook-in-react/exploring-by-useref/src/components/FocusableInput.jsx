import { useEffect, useRef } from "react";


function FocusableInput(){
    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus()
    },[])
    return(
        <div>
            <h3>Focusable Input</h3>
            <input type="text" ref={inputRef} placeholder="Focus on the value" />
        </div>
    )
}
 export default FocusableInput;