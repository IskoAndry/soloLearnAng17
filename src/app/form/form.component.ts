import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})


export class FormComponent {


  nameForm = new FormControl('James');
  showForma(){
      alert(this.nameForm.value);
    };


  name = 'Myme';
  pass = '';
  submit(){
    alert(this.name);
  };
  showName(){
    alert('Hello Submit')
  };

}
