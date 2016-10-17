import React from 'react';
import Contact from './contact';

class ContactsList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      search: '',
      contacts: props.contacts
    };
  }

  updateSearch(e){
    this.setState({search: e.target.value.substr(0, 20)});
  }

  addContact(e){
    e.preventDefault();
    let name = this.refs.name.value;
    let phone = this.refs.phone.value;
    let id = Math.floor((Math.random() * 100) + 1);
    this.setState({
      contacts: this.state.contacts.concat({id, name, phone})
    });
  }

  render(){
    let filteredContacts = this.state.contacts.filter(
      (contact) => {
        return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

    return  (
      <div>
        <input type="text" placeholder="Search" value={this.state.search} onChange={this.updateSearch.bind(this)} />
        <form onSubmit={this.addContact.bind(this)}>
          <input type="text" ref="name" placeholder="Name" />
          <input type="text" ref="phone" placeholder="Phone" />
          <button type="submit">Add New Contact</button>
        </form>
        <ul className="contact">
          {
            filteredContacts.map((contact)=> {
              return <Contact contact={contact} key={contact.id} />
            })
          }
        </ul>
      </div>
    )
  }
}

export default ContactsList;
