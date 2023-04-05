import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AgentService } from 'src/app/shared/services/agent.service';

@Component({
  selector: 'app-agent-customer-edit',
  templateUrl: './agent-customer-edit.component.html',
  styleUrls: ['./agent-customer-edit.component.scss']
})
export class AgentCustomerEditComponent implements OnInit {
  editCustomerForm!:FormGroup
  agents:any
  policynames:any
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private fb:FormBuilder,
    private agentService:AgentService,
    private dialog:MatDialogRef<AgentCustomerEditComponent>
  ) { 
    this.agentService.viewAgent().subscribe((res:any)=>{
      this.agents=res
    })
    this.agentService.viewpolicy().subscribe((res:any)=>{
      this.policynames=res
    })
  }

  ngOnInit(): void {
    this.editCustomerForm=this.fb.group({
      agentname:['',[Validators.required]],
      policyname:['',[Validators.required]],
      customername:['',[Validators.required]],
      dob:['',[Validators.required]],
      phno:['',[Validators.required]],
      email:['',[Validators.required]],
      policyamount:['',[Validators.required]],
      policyterm:['',[Validators.required]],
      policyperiod:['',[Validators.required]],
      joiningdate:['',[Validators.required]],
      address:['',[Validators.required]]

    })
    this.editCustomerForm.patchValue({
      agentname:this.data.agentname,
      policyname:this.data.policyname,
      customername:this.data.customername,
      dob:this.data.dob,
      phno:this.data.phno,
      email:this.data.email,
      policyamount:this.data.policyamount,
      policyterm:this.data.policyterm,
      policyperiod:this.data.policyperiod,
      joiningdate:this.data.joiningdate,
      address:this.data.address
    })
  }
  updateCustomer(){
if(this.editCustomerForm.valid){
  this.agentService.updateCustomer(this.data._id,this.editCustomerForm.value).subscribe((res:any)=>{
    this.dialog.close()
  })
}
  }
}
