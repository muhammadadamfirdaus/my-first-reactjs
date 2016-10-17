import React from 'react';
import ReactDOM from 'react-dom';
import ContactsList from './contactslist'

let contacts  = [{
  id: 1,
  name: 'Adam',
  phone:  '0877 2008 1899'
}, {
  id: 2,
  name: 'Sandy',
  phone:  '1234 5678 9101'
}, {
  id: 3,
  name: 'Reza',
  phone:  '2345 6789 1011'
}, {
  id: 4,
  name: 'Heri',
  phone:  '3456 7891 0111'
}]

class Adam extends React.Component  {
  render(){
    return  (
      <div className="content">
        <h1>Hello World!</h1>
        <ContactsList contacts={this.props.contacts} />
      </div>
    )
  }
}

ReactDOM.render(<Adam contacts={contacts} />, document.getElementById('container'));
