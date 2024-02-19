import './App.css'
import Button from './Button/Button.jsx'
import Bugga from './assets/bugga.mp4'



const App =()=>{
     

    return (
    

    <div className='main'>
        <div className='overlay'> </div>
    <video src={Bugga} autoPlay loop muted></video>
   <div className='content'>
    <h1>Welcome</h1>

   </div>
    </div>


    )
    
}

export default App