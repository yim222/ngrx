import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {ContactsState} from "../store/contacts.reducers";
import {addContact, setContacts} from "../store/contacts.actions";
import {Contact} from "../contacts/contact";

@Component({
  selector: 'app-separated-component',
  templateUrl: './separated-component.component.html',
  styleUrls: ['./separated-component.component.css']
})
export class SeparatedComponentComponent implements OnInit {

  constructor(private store: Store<ContactsState>) {

  }

  ngOnInit(): void {
  }

  addNewContact(){
    const contact: Contact = {id: 22, firstName: "lingar", lastName:"ammm", age: 39, email: "agaf58@gmail.com"}
    this.store.dispatch(addContact(contact));
  }

}
