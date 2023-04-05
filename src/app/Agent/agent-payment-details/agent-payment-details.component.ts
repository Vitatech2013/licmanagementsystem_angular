import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/shared/services/agent.service';

@Component({
  selector: 'app-agent-payment-details',
  templateUrl: './agent-payment-details.component.html',
  styleUrls: ['./agent-payment-details.component.scss']
})
export class AgentPaymentDetailsComponent implements OnInit {
payments:any
  constructor(
    private agentService:AgentService
  ) { }

  ngOnInit(): void {
    this.agentService.viewPayments().subscribe((res:any)=>{
      this.payments=res
    })
  }

}
