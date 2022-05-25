import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { addUser, userHttp } from 'src/app/models/userHttp';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
  providers:[HttpService]
})
export class HttpComponent implements OnInit {
  public users: userHttp = {
    data: {
        id: '',
        email: '',
        first_name: '',
        last_name: '',
        avatar: ''
    }
  };

  public addUser: addUser={
    name:'',
    email:''
  }
  public responseServer: addUser = {
    name:'',
    email:'',
  }

  @ViewChild('addUserForm') addUserForm?: NgForm;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getUserFromHttp();
  }

  getUserFromHttp(){
    this.httpService.getUser()
    .subscribe(
      (successResponse) =>{
        console.log(successResponse)
        this.users = successResponse;
      },
      (error) => {
        console.log(error);
      }
    ); 
  }

  addUserFunc(){
    this.httpService.addUser(this.addUser)
    .subscribe((response)=>{
      console.log(response)
      this.responseServer = response;
    },(error)=>{
      console.log("ERror",error);
    })
  }

}
