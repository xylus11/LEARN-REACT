//TO do app in react js
import './App.css'
import './index.css'
import React,{useState} from 'react';

const App =()=>{
 
const [tasks , setTasks] = useState(["walk","talk","shower"]);
const [newTask, setNewtask] =useState([]);

function handleChange(event)
{
setNewtask(event.target.value)
}
function AddTask()

{

  if(newTask.trim()!==""){
setTasks((t)=>[...t,newTask])
setNewtask("");
  }

}
function deleteTask(index)
  {
    const update=  tasks.filter((_,i)=> i !==index)
    setTasks(update)
  }
  function moveTask(index)
  {
    if(index>0)
    {
      const updated = [...tasks];
      [updated[index],updated[index-1]]=
      [updated[index-1],updated[index]];
      setTasks(updated);

    }

  }
function movetaskBottom(index)
{

  if(index<tasks.length-1)
  {
    const updated = [...tasks];
    [updated[index],updated[index+1]]=
    [updated[index+1],updated[index]];
    setTasks(updated);

  }
}



  return(
  <div className="to-do">
    <h1>To-do List</h1>
    <div>
   
    <input type="text" placeholder="enter task" value={newTask}  onChange={handleChange}
    /> 


    <button className='add-btn'onClick={AddTask}>Add</button>

    </div>

    <ol>
      {tasks.map((task, index)=>
      <li key={index}>
   <span className='text' >{task}</span>
   <button className='delete-button' onClick={()=>deleteTask(index)}> Delete</button>
   <button className='move-button' onClick={()=>moveTask(index)}> moveup</button>
   <button className='movedown-bottom' onClick={()=>movetaskBottom(index)}> movedown</button>

      </li>
       
      )}
    </ol>
    
   
    
    
    
    
    </div>)
}
export default App