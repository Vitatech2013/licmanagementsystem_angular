import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
adminLoginForm!:FormGroup
  constructor(
    private fb:FormBuilder,
    private adminservice:AdminService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.adminLoginForm=this.fb.group({
      username:['',[Validators.required]],
      pwd:['',[Validators.required]]
    })
  }
  adminLogin(){
this.adminservice.adminLogin(this.adminLoginForm.value.username,this.adminLoginForm.value.pwd).subscribe((res:any)=>{
  if(res){
    sessionStorage.setItem('licadmin',JSON.stringify(res))
    this.router.navigate(['admin-dashboard'])
  }
  
})
  }
}
