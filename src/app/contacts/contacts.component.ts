import {Component, OnInit} from '@angular/core';
import {ContactsService} from "./contacts.service";
import {Contact} from "./contact";


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[] = [];
  gallery: boolean = false;


  constructor(private contactsService: ContactsService) {
  }

  ngOnInit(): void {
    this.contactsService.getData().subscribe((data) => {
      this.contacts = data.data;
    });
  }

  toggleLayout(){
    this.gallery = !this.gallery;
  }



}
