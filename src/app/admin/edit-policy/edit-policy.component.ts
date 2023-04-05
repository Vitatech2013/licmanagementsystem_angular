import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-edit-policy',
  templateUrl: './edit-policy.component.html',
  styleUrls: ['./edit-policy.component.scss']
})
export class EditPolicyComponent implements OnInit {
editPolicyForm!:FormGroup
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private fb:FormBuilder,
    private adminservice:AdminService,
    private dialog:MatDialogRef<EditPolicyComponent>
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    
    this.editPolicyForm=this.fb.group({
      policyname:['',[Validators.required]],
      minage:['',[Validators.required]],
      minamount:['',[Validators.required]],
      description:['',[Validators.required]]
    })
    this.editPolicyForm.patchValue({
      policyname:this.data.policyname,
      minage:this.data.minage,
      minamount:this.data.minamount,
      description:this.data.description
    })

  }
updatePolicy(){
this.adminservice.policyupdate(this.data._id,this.editPolicyForm.value).subscribe((res:any)=>{
  this.dialog.close()
  alert('updated successfully')

})
}
}
