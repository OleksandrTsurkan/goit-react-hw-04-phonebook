import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { CreateContact } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

import React from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = newContact => {
    const isContactExists = contacts.find(
      contact =>
        contact.name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase()
    );
    if (isContactExists) {
      return alert(`${newContact.name}is already in contacts.`);
    }
    const contactToAdd = {
      ...newContact,
      id: nanoid(),
    };
    setContacts(prevContacts => {
      return [...prevContacts, contactToAdd];
    });
  };

  const onChangeFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  const handleDeleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };
  const getFilteresContacs = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filterContacts = getFilteresContacs();

  return (
    <>
      <CreateContact onSubmit={handleAddContact} />
      <Filter value={filter} onChangeFilter={onChangeFilter} />
      <ContactList
        contacts={filterContacts}
        onDeleteContact={handleDeleteContact}
      />
    </>
  );
};

export default App;
