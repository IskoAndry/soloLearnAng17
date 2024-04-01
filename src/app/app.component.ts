import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import {HeaderComponent} from './header/header.component'
import { TebleComponent } from './teble/teble.component';
import { MenuComponent } from './menu/menu.component';
import { NgFor } from '@angular/common';
import { NotesListComponent } from './notes-list/notes-list.component';
import { FormComponent } from './form/form.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { LogoComponent } from './logo/logo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LogoComponent, RouterModule, AddNoteComponent, FormComponent, RouterOutlet, HeaderComponent, TebleComponent, MenuComponent, NgFor, NotesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  public arr: string[]=['a','b','c'];

  user = {
    name: 'Jamty',
    sur: 'Smit',
  };

  products = ['appel', 'banana', 'orang'];

  isRed = false;
  change() {
    this.isRed = !this.isRed;
  };

  title = 'soloLearnAng17';
  imageUrl = './assets/img/1920.jpg';

  isHighlighted = true;
  myClass = ['highlight', 'uppercase'];

  login(){
    alert("Welcome!");
  };
 

}
