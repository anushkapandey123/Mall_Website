import React from 'react'

const Events = () => {
return(
<div className="container">
<h4 className="center">Upcoming Events</h4>

              <div>
               
                <Event
                  value={{
                    model: "Event 1",
                    description1: "dates",
                    description2: "Bangalore",
                    description3: "Zaeden, Honey Singh ",
             
                  }}
                  
                /><br/><br/>
                <Event
                  value={{
                    model: "Event 2",
                    description1: " dates",
                    description2: "Bangalore, Pune, Chennai.",
                    description3: "Taylor swift",
              
                  }}
                 
                /><br/><br/>
                <Event
                  value={{
                    model: "Event 3",
                    description1: "dates",
                    description2: "Kolkata, Hyderabad",
                    description3: "Stand up, kusha kapila",
          
                  }}
                /><br/><br/>

              </div>
            </div>

)
}

class Event extends React.Component {
    render() {
      return (
        <div className="d1">
          <h3>{this.props.value.model}</h3>
        
          <ul>
            
            <li>
              Dates: {this.props.value.description1}{" "}
            </li>
            <li>
                Place : {this.props.value.description2}{" "}
            </li>
            <li>
               Description : {this.props.value.description3}{" "}
            </li>

 
    
          </ul>
      
            <a href="http://localhost:3000/EventForm">
                <button>Register</button>
            </a> 
                
    
     


        </div>
      );
    }
  }

export default Events
