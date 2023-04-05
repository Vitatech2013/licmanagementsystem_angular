import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgentChangePwdComponent } from '../agent-change-pwd/agent-change-pwd.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agent-dashboard',
  templateUrl: './agent-dashboard.component.html',
  styleUrls: ['./agent-dashboard.component.scss']
})
export class AgentDashboardComponent implements OnInit {

  constructor(
    private dialog:MatDialog,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  changepwd(){
    this.dialog.open(AgentChangePwdComponent,{
      width:'40%',
    })
  }
agentLogout(){
sessionStorage.removeItem('licagent')
this.router.navigate(['home/admin-login'])
}
}
