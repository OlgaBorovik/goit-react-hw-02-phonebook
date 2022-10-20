import React from "react";

class App extends React.Component {
  state = {
  contacts: [],
  name: ''
  }
  
  handleInputChange = (event) => {
    this.setState({name: event.currentTarget.value})
  }

  reset = () => {
    this.setState({name: ''})
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState(prevState => ({
      contacts: prevState.contacts.push(this.state.name)
      
    }))
    this.reset()
    console.log(this.state.name)
    console.log(this.state.contacts)
    
  }


  render() {
    return (
      <div>
      <h2>Phonebook</h2>
      <form onSubmit={this.handleSubmit}>
        <input
        type="text"
        name="name"
        onChange={this.handleInputChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
          />
        <button type="submit">Add contact</button>
      </form>
        <h2>Contacts</h2>

      </div>
    )
  }

  
}





export default App