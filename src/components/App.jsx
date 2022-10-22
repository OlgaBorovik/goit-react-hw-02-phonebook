import React from "react";
import ContactsForm from "./ContactsForm/ContactsForm"
import ContactList from "./ContactList/ContactList"
import { Filter } from "./Filter/Filter"
// import { nanoid } from 'nanoid'



class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    
    filter: ''
  }
  
  formSubmitHandler = (data) => {
    this.setState(prevState => ({
      contacts: [data, ...prevState.contacts]
    }))
  }

  filterChangeHandler = (event) => {
    this.setState({filter: event.target.value})
  }

  render() {
    let filteredContacts = this.state.contacts;
    if (this.state.filter) {
      filteredContacts = this.state.contacts.filter(({ name }) => {
        return name.toLowerCase().includes(this.state.filter.toLowerCase());
      });
    }
    return (
      <div>
      <h2>Phonebook</h2>
        <ContactsForm
          onSubmitProp={this.formSubmitHandler}
        />
      <h2>Contacts</h2>
        <Filter
          onChange={this.filterChangeHandler}
          value={this.state.filter}
        />
        <ContactList
          contacts={filteredContacts}

        />
        

      </div>
    )
  }

  
}





export default App