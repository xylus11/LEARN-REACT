import React, {useEffect,useState,useRef} from "react"
import './index.css'
const Stopwatch =()=>{

const [IsRunning , setisRunning] =useState(false);
const [ElapsedTime , setElapasedTime] = useState(0);
const intervalIdref = useRef(null);
const startTime =useRef(0);
useEffect(()=>{



  if(IsRunning) {
    intervalIdref.current=setInterval(()=>{
   setElapasedTime(Date.now()-startTime.current)
  
  },10);
}
return()=>
{
clearInterval(intervalIdref.current);
}


},[IsRunning]);

function start()
{
setisRunning(true);
startTime.current = Date.now() -ElapsedTime;
console.log(startTime.current)
}

function stop()
{setisRunning(false);
  

}


function reset()
{setElapasedTime(0);
  setisRunning(false);

}
function formatTime()
{
  let Hours = Math.floor(ElapsedTime/(1000*60*60));
  let Minutes = Math.floor(ElapsedTime/(1000*60)%60);
  let Seconds = Math.floor(ElapsedTime/(1000)%60);
  let MS = Math.floor(ElapsedTime%(1000)/10);


  Minutes = String(Minutes).padStart(2,"0");
  Seconds = String(Seconds).padStart(2,"0");
  MS= String(MS).padStart(2,"0");


return `${Minutes}:${Seconds}:${MS}`;
}



return(
  
  <div className="stopwatch">
    <div className="display">{formatTime()}

    </div>
    <div className="controls">
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>

    </div>
  </div>
 
)
}
export  default Stopwatch