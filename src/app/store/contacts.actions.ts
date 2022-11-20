import {createAction, props} from '@ngrx/store';
import {Contact} from "../contacts/contact";

export const getContacts = createAction(
  '[Contact] get Contacts'
);
export const setContacts = createAction(
  '[Contact] set Contacts',
  (contacts: Contact[])=> ({contacts})
);
export const addContact = createAction(
  '[Contact] Add Customer',
  (contact: Contact) => ({contact})
);
