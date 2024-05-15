
import { useEffect, useState } from 'react';
import './App.css';

function MouseTracker(){
 useEffect(() =>{
  const handleMouse =(event) =>{
    console.log('Mouse X coordinate:', event.clientX);
  };
  document.addEventListener('mousemove', handleMouse);

  return() =>{
    document.removeEventListener('mousemove', handleMouse);
  }
 },[]);

 return(
  <div>
    <h3>Mouse Tracker</h3>
    <p>Check the console for Mouse X coordinate.</p>
  </div>
 )
 
  
}

function DocumentUpdated(){
  useEffect(()=>{
    document.title = 'Document Title Updated';

    return()=>{
      document.title = 'React App';
    };
  },[]);

  return(
    <div>
      <h3>Document of the Title Update</h3>
      <p>The document can be update....</p>
    </div>
  )
}

function App() {
  const [data, setData] = useState(null);

useEffect(() =>{
async function fetchJson(){
 try {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let d1 = await res.json();
  setData(d1);
  console.log(d1)
 } catch (error) {
  console.log(error);
  
 }
}
fetchJson()
},[])

  return (
    <div className="App">
      <h2>React useEffect using API </h2>
    {data ? (
      <div>
        {data.map((item) => (
          <p key={item.id}>{item.id}: {item.title}</p>
        ))}
      </div>
    ) : (
      <p>Loading...</p>
    

    )}
    <MouseTracker />
    <DocumentUpdated />
      
    </div>
  );
}

export default App;
