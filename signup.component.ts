import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  firstname=''
  lastname=''
  address=''
  contactnumber=''
  yoe=''
  email=''
  password=''
  cpassword=''
  parr:{};
  constructor(
    private router:Router,
   // public adminService:AdminService
      ) { }

  ngOnInit(): void {
  }

  onSignup() {
    // this.adminService
    //   .signup(this.firstName,this.lastName,this.phone,this.email, this.password)
    //   .subscribe(response => {
    //     if (response['status'] == 'success') {
    //       alert('Signup Successful....!!!!!')    
    //     } else {
    //       alert('Signup failed')
        // }
      //})
      this.parr=[this.firstname,this.lastname,this.address,this.yoe,this.email,this.password,this.cpassword];
      alert(this.parr);
      console.log(this.parr);


  }
}
