import React from "react";
import PropTypes from "prop-types"

function ContactList({contacts, onDelete}) {
    
    return (
        <div>
            <ul>
                {contacts.map(({id, name, number}) => (
                    <li key={id}>{name}: {number}
                        <button type="button" onClick={() =>  onDelete({id})}>Delete</button> 
                    </li>
                   
                ))}
            </ul>
        
      </div>
        )
    

}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func
}


export default ContactList