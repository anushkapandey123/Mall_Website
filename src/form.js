import React from 'react'
import axios from "axios"

class Event extends React.Component
{
    handleChange = (event)=>{
        
        var name1 = event.target.name
        // console.log(name1)
        var value1 = event.target.value
        this.setState({
        ...this.state.form,
        form:{
        ...this.state.form,
        [name1]:[value1]
        }
        
        })
     }
     handleClick = (event)=>{
        event.preventDefault();
        axios.post("http://localhost:9000/form", this.state)
        .then(res => {
            console.log(res.data)
            
    })
    }
    constructor(props)
    {
        super(props);
        this.state = {}    
    }
    render()
    {
        const fstyle = {
            fontSize:"20px",
            position:"fixed",
            textAlign:"center",
            top:"10%",
            left:"35%",
            padding:"75px",
            paddingTop:"50px",
            background:"#abdbe3",
            borderStyle:"solid",
            borderWidth:"2px ",
            borderColor:"#27a98e"}

        
        return(
            
            <div style = {fstyle}>
                <h2></h2>
            
            <form>
            <p style = {{fontSize:"50px",color:"#1e81b0"}}><b>   Register for event</b></p><br/><br/>   
               Enter Date:<br/><input name = "date" onChange = {this.handleChange} type = "date" size = "30" style = {{height:"40px",fontSize:"30px"}}/>
            <br/><br/>
               Phone number:<br/><input type = "tel" name = "phone_num" onChange = {this.handleChange}  size = "30" style = {{height:"40px",fontSize:"30px"}}/>
            <br/><br/>
               Email-id<br/><input type="email"  name="mail" size = "30" style = {{height:"40px",fontSize:"30px"}} ></input>
            <br/><br/>
               Full Name<br/><input type="text"  name= "name" size = "30" style = {{height:"40px",fontSize:"30px"}}></input>
            <br/><br/>
                Number of Tickets<br/><input type="number"  name= "quantity" size = "30" style = {{height:"40px",fontSize:"30px"}}></input>
            <br/><br/>
            
            
            <button style = {{height:'50px',width:"300px",fontSize:"25px"}} onClick = {this.handleClick}>Buy tickets</button>
            </form>
            
            </div>)
    }
    

}

class EventReg extends React.Component
{
        render(){
            return(
            <div>
            <Event/>
            </div>)
        }
}


export default EventReg