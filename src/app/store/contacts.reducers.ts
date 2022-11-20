import {Action, createReducer, on} from '@ngrx/store';
import * as ContactsActions from './contacts.actions';
import {Contact} from "../contacts/contact";

export const contactsFeatureKey = 'contacts';

export interface ContactsState {
  contacts: Contact[];
}

export const initialState: ContactsState = {
  contacts: []
}

export const contactsReducer = createReducer(
  initialState,
  on(ContactsActions.getContacts,
    (state: ContactsState) => state
  ),
  on(ContactsActions.setContacts,
    (state: ContactsState, {contacts}) => {
      return {contacts}
    }
  ),

  on(ContactsActions.addContact,
    (state: ContactsState, {contact}) => {
      return {...state, contacts: [...state.contacts, contact]}
    }
  )
);

export function reducer(state: ContactsState | undefined, action: Action): any {
  return contactsReducer(state, action);
}
