import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/common/api-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private route:Router,private apiSrv:ApiServiceService,private toastr:ToastrService,) { }
  loginObj:any ={};
  ngOnInit(): void {
  }
  gotoReg(){
    this.route.navigate(['registration']);
  }
  login(form){
    if(form.status=="VALID"){
      this.apiSrv.create('auth/login',this.loginObj).subscribe((resp:any) =>{
        if (resp.success) {
          localStorage.setItem('token', resp.data.token);
          this.toastr.success('Login Successfully','success');
          this.route.navigate(['profile']);
          this.loginObj = {};
       }
       else   this.toastr.error(resp.message,'error');
      },err =>{
        this.toastr.error('Failed to login','error');
      })
    }   
  }
}
