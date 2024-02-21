import React ,{useEffect,useState} from "react";


const App=()=>{

// const [count, setCount ] = useState(0);

// useEffect(()=>{
//   document.title =`count : ${count}`;
// },[])

function counter()
{
  setCount(c => c + 1)
}
  return(<>
  <div>
    <span>{count}</span>
    <button onClick={counter}>ADD</button>
  </div>
  </>)
}
export default App