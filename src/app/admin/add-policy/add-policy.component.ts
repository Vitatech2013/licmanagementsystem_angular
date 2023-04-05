import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-add-policy',
  templateUrl: './add-policy.component.html',
  styleUrls: ['./add-policy.component.scss']
})
export class AddPolicyComponent implements OnInit {
addPolicyForm!:FormGroup
  constructor(
    private fb:FormBuilder,
    private adminService:AdminService
  ) { }

  ngOnInit(): void {
    this.addPolicyForm=this.fb.group({
      policyname:['',[Validators.required]],
      minage:['',[Validators.required]],
      minamount:['',[Validators.required]],
      description:['',[Validators.required]]
    })
  }
addPolicy(){
if(this.addPolicyForm.valid){
  this.adminService.addPolicies(this.addPolicyForm.value).subscribe((res:any)=>{
    alert('policy added succesfully')
  })
}

}
}
