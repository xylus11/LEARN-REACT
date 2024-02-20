import Student from "./form"
import UserGreet from "./userGreet"
import Food from "./foods"
const App =()=>{


  return(
    <>
    <Student name={"magesh"} age ={24} isStudent= {true}/>
    <Student name = {"ankit"} age ={24} isStudent={false}/>
    <Student name = {"gohan "}/>
    <UserGreet isLoggeedin ={true} userName ={"mangesh"}/>
    <Food/>
    
    
    </>
  )

}
export default App