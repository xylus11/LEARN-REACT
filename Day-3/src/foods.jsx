import React,{useState} from "react"
import './index.css'

const Food =()=>{

const [fuid , setfuid] = useState(["apple","orange","banana"]);


function handlef()
{
    const newFood = document.getElementById('foodinp').value
    document.getElementById('foodinp').value="";
    setfuid((f)=>[...f, newFood])
}
function handleff(index)
{
    setfuid(fuid.filter((_,i)=> i !==index))
}
return (<div>
    <h2>
        List of Food
    </h2>
    <ul>
        {fuid.map((fooder, index)=>
            <li key={index} onClick={()=>handleff(index)}>
             {fooder}
            </li>
        )}
    </ul>
    <div id="btn">
    <input type="text" id="foodinp" placeholder="Enter food name"/>
    <button onClick={handlef}>click me</button>
    </div>
</div>)

}
export default Food