import { Component, OnInit, ViewChild } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { MatPaginator, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  satisfactionFactors=['Business Model Understanding',  'Quality Of Deliverables',  'Meeting Deadlines',  'Expense Control', 'communications','responsiveness',  'foresight','knowledge Transfer','behavior','team Play','autonomy','productivity','compliance'];
  clientOrgs =['tek systems','google','Microsoft','MaxTech sol'];
  salesLeads =['john Doe','james philip','Rick c','David m ','Caren','christy'];
@ViewChild(MatPaginator) paginator: MatPaginator;

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }
 
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    
  }

  
}





