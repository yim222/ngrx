import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactsComponent } from './contacts/contacts.component';
import { StoreModule } from '@ngrx/store';
import {contactsFeatureKey, reducer} from "./store/contacts.reducers";
import {metaReducers, reducers} from "./reducer";
import { SeparatedComponentComponent } from './separated-component/separated-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    SeparatedComponentComponent
  ],
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),

    BrowserModule, BrowserAnimationsModule, HttpClientModule, StoreModule.forFeature(contactsFeatureKey, reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




