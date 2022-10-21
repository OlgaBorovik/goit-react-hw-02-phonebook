import React from "react";
import Form from "./Form/Form"
// import { nanoid } from 'nanoid'



class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
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
        <label>
          Find contacts by name
          <input
            type="text"
            name="filter"
            
          />
            
          
        </label>
        <div>
          <ul>
            {this.state.contacts.map(({id, name, number}) => (
              <li key={id}>{name}: {number}</li>
            ))}
        </ul>
         
          
      </div>

      </div>
    )
  }

  
}





export default App