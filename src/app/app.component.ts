import { Component } from '@angular/core';
import {RouterLink, RouterModule, RouterOutlet } from '@angular/router';

import {HeaderComponent} from './header/header.component'
import { TebleComponent } from './teble/teble.component';
import { MenuComponent } from './menu/menu.component';
import { NgFor } from '@angular/common';
import { NotesListComponent } from './notes-list/notes-list.component';
import { FormComponent } from './form/form.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { LogoComponent } from './logo/logo.component';
import {UpperCasePipe} from '@angular/common';
import { LowerCasePipe } from '@angular/common';

import {DecimalPipe, DatePipe, CurrencyPipe} from '@angular/common'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DecimalPipe, DatePipe, CurrencyPipe, LowerCasePipe, UpperCasePipe, RouterLink, LogoComponent, RouterModule, AddNoteComponent, FormComponent, RouterOutlet, HeaderComponent, TebleComponent, MenuComponent, NgFor, NotesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

  loudMessage = 'we think you are doing great!'

  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
  date = new Date(2023, 3, 2);
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

