import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-admin-change-pwd',
  templateUrl: './admin-change-pwd.component.html',
  styleUrls: ['./admin-change-pwd.component.scss']
})
export class AdminChangePwdComponent implements OnInit {
  adminChangepwdForm!:FormGroup
  admin:any
  constructor(
    private fb:FormBuilder,
    private adminService:AdminService,
    private dialog:MatDialogRef<AdminChangePwdComponent>
    ) { }

  ngOnInit(): void {
    this.admin=this.adminService.getAdminFromLocal()
    this.adminChangepwdForm= this.fb.group({
      username:['',[Validators.required]],
      opwd:['',[Validators.required]],
      npwd:['',[Validators.required]]
    })
    this.adminChangepwdForm.patchValue({
      username:this.admin.username
    })
  }
updatePWD(){
  let data={
    pwd:this.adminChangepwdForm.value.npwd
  }
  if(this.admin.pwd==this.adminChangepwdForm.value.opwd){
    this.adminService.updateAdminPassword(this.admin._id,data).subscribe((res:any)=>{
      this.dialog.close({status:'changed'})
    })
  }else{
    alert('not match')
  }
  
}
}
