import React, { useState } from 'react';
import { ButtonSend, Form, Input, Labelcontact } from './ContactForm.styled';

export const CreateContact = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'name') setName(value);
    else setNumber(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <>
      <h2>Phonebook</h2>
      <Form onSubmit={handleSubmit}>
        <Labelcontact>
          Name:
          <Input
            onChange={handleChange}
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
            onChange={handleChange}
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
};
