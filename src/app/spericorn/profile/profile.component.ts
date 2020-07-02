import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/common/api-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route:Router,private apiSrv:ApiServiceService,private toastr:ToastrService,) { }
  proObj:any ={};

  ngOnInit(): void {
    this.getProfile()
  }

  getProfile(){
    this.apiSrv.query('user',).subscribe((resp:any) =>{
      if (resp.success) {
        this.proObj=resp.data.userData;
        console.log( this.proObj)
     }
     else   this.toastr.error(resp.message,'error');
    })
  }

  Logout(){
    localStorage.removeItem('token');
    this.route.navigate(['login']);
  }

}
