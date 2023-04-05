import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-edit-agent',
  templateUrl: './edit-agent.component.html',
  styleUrls: ['./edit-agent.component.scss']
})
export class EditAgentComponent implements OnInit {
editAgentForm!:FormGroup
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private fb:FormBuilder,
    private adminservice:AdminService,
    public dialog:MatDialogRef<EditAgentComponent>
  ) { }

  ngOnInit(): void {
    console.log(this.data)
    this.editAgentForm=this.fb.group({
      agentname:['',[Validators.required]],
      phno:['',[Validators.required]],
      email:['',[Validators.required]],
      dob:['',[Validators.required]],
      gender:['',[Validators.required]],
      adharno:['',[Validators.required]],
      address:['',[Validators.required]]
    })
    this.editAgentForm.patchValue({
      agentname:this.data.agentname,
      phno:this.data.phno,
      email:this.data.email,
      dob:this.data.dob,
      gender:this.data.gender,
      adharno:this.data.adharno,
      address:this.data.address
    })
  }
updateAgent(){
this.adminservice.agentUpdate(this.data._id,this.editAgentForm.value).subscribe(res=>{
this.dialog.close()
})
}
}
