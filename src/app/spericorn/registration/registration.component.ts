import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/common/api-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private apiSrv:ApiServiceService,private toastr:ToastrService,private route:Router) { }
  regObj:any ={};
  check:boolean;

  

  ngOnInit(): void {
    this.check=true;
  }

  validateEmail(form){
    if(form.status=='VALID'){
    // console.log('form',form)
    this.apiSrv.create('auth/checkMail',{email :this.regObj.email}).subscribe((res:any) =>{
    if(res.success){
      this.toastr.success('Email validated successfully','success');     
       this.register()
    }else{
      this.toastr.error(res.message,'error');
    }
    
    })
  }
  }
  

  register(){
    this.apiSrv.create('auth/register',this.regObj).subscribe((resp:any) =>{
      if (resp.success) {
        this.toastr.success('User Registered Successfully','success');
        this.route.navigate(['login']);
        this.regObj = {};
     }
     else   this.toastr.error(resp.message,'error');
    },err=>{
      this.toastr.error('User Registration Failed','error');
    })
  }

  reset(){
    this.regObj = {};
    this.check=true
  }
  setPasswd(){
    this.regObj.confirmPassword="";
  }

  confrmPasswd(){
    // console.log('this.regObj.cnfrmpassword',this.regObj.confirmPassword)
    if(this.regObj.password && this.regObj.confirmPassword){
      if(this.regObj.password==this.regObj.confirmPassword){
        this.check=true;
      }else{
        this.check=false;
      }
    }
  }

  gotoLogin(){
    this.route.navigate(['login'])
  }
}
