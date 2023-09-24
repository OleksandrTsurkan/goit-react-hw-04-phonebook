import React from 'react';
import { ButtonDelete, Lilist, Ullist } from './ContactsList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <Ullist>
      {contacts.map(({ id, name, number }) => {
        return (
          <Lilist key={id}>
            <span>{name}</span>
            <span>{number}</span>
            <ButtonDelete type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </ButtonDelete>
          </Lilist>
        );
      })}
    </Ullist>
  );
};
