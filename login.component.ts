import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 email:string;
 password:string;
 message:string;
 flag:boolean=false;
  constructor() { }

  ngOnInit(): void {

  }
  onLogin() {
        
         //alert("hi");
        if(this.email=="abc@gmail.com" && this.password=="123")
        {
         // alert("hi");
           this.flag=true;
           this.message="Login Successful";
        }
        else
        {
          //alert("hello");
          this.message="Logiin Invalid  !!!!!!"
        }
  }

}
