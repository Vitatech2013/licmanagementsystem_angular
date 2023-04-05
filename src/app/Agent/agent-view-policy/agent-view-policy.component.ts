import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/shared/services/agent.service';

@Component({
  selector: 'app-agent-view-policy',
  templateUrl: './agent-view-policy.component.html',
  styleUrls: ['./agent-view-policy.component.scss']
})
export class AgentViewPolicyComponent implements OnInit {
Policies:any
  constructor(
    private agentService:AgentService
  ) { }

  ngOnInit(): void {
    this.agentService.viewpolicy().subscribe((res:any)=>{
      this.Policies=res
    })
  }

}
