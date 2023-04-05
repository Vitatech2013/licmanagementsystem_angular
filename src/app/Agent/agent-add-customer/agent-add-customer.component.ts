import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgentService } from 'src/app/shared/services/agent.service';

@Component({
  selector: 'app-agent-add-customer',
  templateUrl: './agent-add-customer.component.html',
  styleUrls: ['./agent-add-customer.component.scss']
})
export class AgentAddCustomerComponent implements OnInit {
  addCustomerForm!:FormGroup
  agents:any
  policynames:any
  constructor(
    private fb:FormBuilder,
    private agentservice:AgentService
  ) { 
    this.agentservice.viewAgent().subscribe((res:any)=>{
      this.agents=res
    })
    this.agentservice.viewpolicy().subscribe((res:any)=>{
      this.policynames=res
    })
  }

  ngOnInit(): void {
    this.addCustomerForm=this.fb.group({
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
  }
addCustomer(){
  if(this.addCustomerForm.valid){
    this.agentservice.addCustomer(this.addCustomerForm.value).subscribe((res:any)=>{
      alert('customer added successfull')
      this.addCustomerForm.reset()
    })
  }
 console.log(this.addCustomerForm.value);
  
}
}
