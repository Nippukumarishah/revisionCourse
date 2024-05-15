import { useRef } from "react";

 function InteractiveBox(){

    const boxRef = useRef(null);

    function handleBoxClick(){
        if(boxRef.current){
            boxRef.current.style.backgroundColor = "lightpink";
        }
    }



    return(
        <div>
            <h2>Interactive Input</h2>
            <input
            ref={boxRef}
            onClick={handleBoxClick}
            style={{width: '200px', height: "200px", backgroundColor: 'lightblue', cursor: 'pointer'}}
            
             placeholder='Click me to change color'
            />
        </div>
    )
 }
 export default InteractiveBox;