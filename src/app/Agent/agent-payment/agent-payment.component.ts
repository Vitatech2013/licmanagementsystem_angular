import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgentService } from 'src/app/shared/services/agent.service';

@Component({
  selector: 'app-agent-payment',
  templateUrl: './agent-payment.component.html',
  styleUrls: ['./agent-payment.component.scss']
})
export class AgentPaymentComponent implements OnInit {
  paymentForm!:FormGroup
  customers:any
  values:any
  constructor(
    private fb:FormBuilder,
    private agentService:AgentService
  ) { 
    this.agentService.viewCustomers().subscribe((res:any)=>{
      this.customers=res
    })
  }

  ngOnInit(): void {
    this.paymentForm=this.fb.group({
      customername:['',[Validators.required]],
      agentname:['',[Validators.required]],
      policyname:['',[Validators.required]],
      policyamount:['',[Validators.required]],
      newamount:[''],
      joiningdate:['',[Validators.required]]
    })
  }
  isSelected(event:any){
    this.values=this.customers.find((res:any)=>res.customername==event.target.value)
  this.paymentForm.patchValue({
    agentname:this.values.agentname,
    policyname:this.values.policyname,
    policyamount:this.values.policyamount,
    joiningdate:this.values.joiningdate    
  })    
  }

}
