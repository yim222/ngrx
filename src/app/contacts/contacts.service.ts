import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ContactsState} from "../store/contacts.reducers";
import {select, Store} from "@ngrx/store";
import {Contact} from "./contact";
import {Observable} from "rxjs";
import {selelctContacts} from "../store/contacts.selector";
import {setContacts} from "../store/contacts.actions";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts$: Observable<Contact[]>;

  constructor(private http: HttpClient,
              private store: Store<ContactsState> ) {

    this.contacts$ = this.store.pipe(select(selelctContacts));
    this.setData();
    this.contacts$.subscribe((items)=>{
      console.log("data changed - ", items);
    })

  }
  getData(){
    return this.http.get<any>("https://innovi-front-end.s3.us-west-2.amazonaws.com/customers.json");
  }

  setData(){
    this.http.get<any>("https://innovi-front-end.s3.us-west-2.amazonaws.com/customers.json")
      .subscribe(items=>{
        this.store.dispatch(setContacts(items.data));
    });
  }
  displayData(){
    this.contacts$.subscribe((items)=>{
      console.log("items = ", items);
    })
  }
}
