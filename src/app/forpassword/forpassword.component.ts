import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forpassword',
  templateUrl: './forpassword.component.html',
  styleUrls: ['./forpassword.component.css']
})
export class ForpasswordComponent implements OnInit {
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  passForm = new FormGroup({
    fpass : new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
  });

  constructor() { }

  ngOnInit() {
  }

}
