import React from "react";
import Form from "./Form/Form"
// import { nanoid } from 'nanoid'



class App extends React.Component {
  state = {
    contacts: [],
    name: ''
  }
  
  formSubmitHandler = (data) => {
    
    this.setState(prevState => ({
      contacts: [data, ...prevState.contacts]
      
    }))
    console.log(this.state.contacts)
  }


  render() {
    return (
      <div>
      <h2>Phonebook</h2>
      <Form onSubmitProp={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <div>
          <ul>
            {this.state.contacts.map(({id, name}) => (
              <li key={id}>{name}</li>
            ))}
        </ul>
         
          
      </div>

      </div>
    )
  }

  
}





export default App