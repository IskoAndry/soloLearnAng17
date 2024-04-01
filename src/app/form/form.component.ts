import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})


export class FormComponent {
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });

  handleSubmit() {
    alert(
      this.profileForm.value.name + ' | ' + this.profileForm.value.email
    );
  };

  username = 'Tomson';
  favoriteFramework = '';

  nameForm = new FormControl('James');
  showForma(){
      alert(this.nameForm.value);
    };


  // // name = 'Myme';
  // pass = '';
  // submit(){
  //   alert(this.name);
  // };
  showName(){
    alert('Hello Submit')
  };

}
