import PropTypes from 'prop-types'


const Student =(props)=>{

    return(


        <div>
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Student : {props.isStudent ? "Yes": "false"}</p>
        </div>
    )
}
Student.prototypes ={
name : PropTypes.string,
age :  PropTypes.number,
isStudent : PropTypes.bool,
}
Student.defaultProps ={
name: "Guest",
age: 0,
isStudent: 'false'
}
export default Student