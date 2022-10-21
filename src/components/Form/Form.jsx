import { nanoid } from "nanoid";
import React from "react";

class Form extends React.Component {
    state = {
        name: '',
        id: ''
    }

   
    handleInputChange = (event) => {
    this.setState({name: event.currentTarget.value, id: nanoid(5)})
  }

  reset = () => {
    this.setState({name: ''})
  }

 
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmitProp(this.state)
        this.reset()
    
  }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="name"
                    onChange={this.handleInputChange}
                    value={this.state.name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                
                <button type="submit">Add contact</button>
            </form>
        )
    }
}


export default Form