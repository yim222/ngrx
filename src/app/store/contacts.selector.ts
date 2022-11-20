//selector is observeable
import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromContact from './contacts.reducers';

export const selectContactsState = createFeatureSelector<fromContact.ContactsState>(
  fromContact.contactsFeatureKey
);

export const selelctContacts = createSelector(
  selectContactsState,
  (state: fromContact.ContactsState)=> state.contacts
);
