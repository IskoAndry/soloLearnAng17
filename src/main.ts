import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from '@angular/router';
import { ContactsComponent } from './app/contacts/contacts.component';
import { HomeComponent } from './app/home/home.component';
import { NotFoundComponent } from './app/not-found/not-found.component';
import { AddNoteComponent } from './app/add-note/add-note.component';
import { NotesListComponent } from './app/notes-list/notes-list.component';

const routes:Routes = [
  {path: '', title:'Home Page', component: HomeComponent},
  {path: 'home', title:'Home Page', component: HomeComponent},
  {path: 'list', component: NotesListComponent},
  {path: 'new', component: AddNoteComponent},
  {path: 'contacts', title:'Contacts Page',  component: ContactsComponent},
  {path: '**',title:'Page Not Found',  component: NotFoundComponent},

]


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}
  //  appConfig)
  // .catch((err) => console.error(err)
  );
 


