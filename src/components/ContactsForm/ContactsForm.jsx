import { nanoid } from "nanoid";
import React from "react";

class ContactsForm extends React.Component {
    state = {
        name: '',
        id: '',
        number: '',
    }

   
    handleInputChange = (event) => {
        const {name, value} = event.currentTarget
    this.setState({[name]: value, id: nanoid(5)})
  }

  reset = () => {
    this.setState({name: '', number: ''})
  }

 
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmitProp(this.state)
        this.reset()
    
  }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input
                    type="text"
                    name="name"
                    onChange={this.handleInputChange}
                    value={this.state.name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                </label>
                <label>
                    Number
                <input
                    type="tel"
                    name="number"
                    onChange={this.handleInputChange}
                    value={this.state.number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                </label>
                <button type="submit">Add contact</button>
            </form>
        )
    }
}


export default ContactsForm