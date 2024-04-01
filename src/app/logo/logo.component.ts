import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ContactsComponent } from '../contacts/contacts.component';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [RouterModule, HomeComponent, NotFoundComponent, ContactsComponent],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent {
  

}
