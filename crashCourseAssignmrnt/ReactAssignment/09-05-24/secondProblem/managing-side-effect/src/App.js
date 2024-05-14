import { useEffect, useState } from "react"
import './App.css';

function App() {
  const [count, setCount] = useState(60);
   

  useEffect(() => {
    const interValid = setInterval(() => {
      setCount((prevCount) => {
        if(prevCount === 1){
          clearInterval(interValid);
          return prevCount -1;
        }
        console.log("Timer is Running")
        return prevCount - 1;
      });
    }, 1000);

    function cleanUp(){
      console.log("clear the timer ");
      clearInterval(interValid);
    }
    return cleanUp;

    
    
  }, []);
  return (
    <div className="App">
       <h2>Timer Component</h2>
       <h5>{count}</h5>
      
    </div>
  );
}

export default App;
