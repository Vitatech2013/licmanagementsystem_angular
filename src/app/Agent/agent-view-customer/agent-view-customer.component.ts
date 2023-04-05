import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgentService } from 'src/app/shared/services/agent.service';
import { AgentCustomerEditComponent } from '../agent-customer-edit/agent-customer-edit.component';

@Component({
  selector: 'app-agent-view-customer',
  templateUrl: './agent-view-customer.component.html',
  styleUrls: ['./agent-view-customer.component.scss']
})
export class AgentViewCustomerComponent implements OnInit {
customers:any
  constructor(
    private agentservice:AgentService,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.agentservice.viewCustomers().subscribe((res:any)=>{
      this.customers=res
    })
  }

  editCustomer(c:any){
    this.dialog.open(AgentCustomerEditComponent,{
      width:'60%',
      data:c
    }).afterClosed().subscribe((res:any)=>{
      this.ngOnInit()
    })
  }

}
