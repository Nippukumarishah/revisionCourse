import React, { useRef } from "react";


function DynamicForm(){
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    function handleTab(e, ref){
        if(e.key === "Tab"){
            e.preventDefault()
            ref.current.focus()
        }

    }
    return(
        <div>
            <input type="text" ref={inputRef1} placeholder="Field 1"
            onKeyDown={(e) => handleTab(e, inputRef2)}
            />
            <input type="text"  ref={inputRef2}
             onKeyDown={(e) => handleTab(e, inputRef3)}
            placeholder="field 2"/>
            <input type="text" ref={inputRef3}
             onKeyDown={(e) => handleTab(e, inputRef1)}
            placeholder="field 3"/>

        </div>
    )
}
export default DynamicForm;