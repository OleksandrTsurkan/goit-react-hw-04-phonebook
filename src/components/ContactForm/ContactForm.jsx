// import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { ButtonSend, Form, Input, Labelcontact } from './ContactForm.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class CreateContact extends Component {
  state = INITIAL_STATE;

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState(INITIAL_STATE);
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <h2>Phonebook</h2>
        <Form onSubmit={this.handleSubmit}>
          <Labelcontact>
            Name:
            <Input
              onChange={this.handleChange}
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Labelcontact>
          <Labelcontact>
            Number:
            <Input
              onChange={this.handleChange}
              type="tel"
              value={number}
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Labelcontact>
          <ButtonSend type="submit">Add contact</ButtonSend>
        </Form>
        <h2>Contacts</h2>
      </>
    );
  }
}

export default CreateContact;
