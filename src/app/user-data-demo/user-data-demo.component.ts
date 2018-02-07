import { Component, OnInit } from '@angular/core';
import {DatafetchService} from '../datafetch.service';
@Component({
  selector: 'app-user-data-demo',
  templateUrl: './user-data-demo.component.html',
  styleUrls: ['./user-data-demo.component.css'],
  providers:[DatafetchService]
})

export class UserDataDemoComponent implements OnInit {
  
  selectedUser:any;
  updateEnabled= false;
users:string[]
  constructor(private dataFetch:DatafetchService) { }

  ngOnInit() {
    this.getUserData();
  }

  getUserData(){
    this.dataFetch.getUsersAPI().subscribe(data=>this.users =data,
                                           error =>console.log('server Error'));
  }

  createUserData(newID:number,newName:string,newEmail:string,newPhone:number,newJobType:string){
     this.dataFetch.createUser(newID,newName,newEmail,newPhone,newJobType).subscribe();
     location.reload();
  }

  updateUserData(newID:number,newName:string,newEmail:string,newPhone:number,newJobType:string){
    this.dataFetch.updateUser(this.selectedUser.id,newName,newEmail,newPhone,newJobType).subscribe();
  }

  loadDetails(){
    this.updateEnabled=true;
    //this.selectedUser=user;
  }
  
}
