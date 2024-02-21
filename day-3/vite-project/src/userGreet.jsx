const UserGreet =(props)=>{


   
return( props.isLoggeedin ? <h2>welcome user {props.userName}</h2>: <h2>please login</h2>)

  
   
}
export default UserGreet