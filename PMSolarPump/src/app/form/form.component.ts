import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  constructor(private router:Router) {

  }

  onSubmit():void {
    console.log("Submitted");
    this.router.navigate(['/fundingDepartment']);
  }
}
