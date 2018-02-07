import { Component, OnInit,Inject } from '@angular/core';
import{MatDialogRef} from '@angular/material';
import{MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-my-dialog-component',
  templateUrl: './my-dialog-component.component.html',
  styleUrls: ['./my-dialog-component.component.css']
})
export class MyDialogComponentComponent implements OnInit {
  
  constructor(public thisDialogRef:MatDialogRef<MyDialogComponentComponent>,@Inject(MAT_DIALOG_DATA) public data:string) { }

  ngOnInit() {
  }

  onCloseConfirm(){
      this.thisDialogRef.close('Confirm');
  }
  
  onCloseCancel(){
    this.thisDialogRef.close('Cancel');
  }
}
