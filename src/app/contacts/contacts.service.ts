import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {


  constructor(private http: HttpClient) {
    console.log("contacts service");
  }
  getData(){
    return this.http.get<any>("https://innovi-front-end.s3.us-west-2.amazonaws.com/customers.json");
  }
}
