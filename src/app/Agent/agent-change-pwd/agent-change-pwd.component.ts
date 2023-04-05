import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AgentService } from 'src/app/shared/services/agent.service';

@Component({
  selector: 'app-agent-change-pwd',
  templateUrl: './agent-change-pwd.component.html',
  styleUrls: ['./agent-change-pwd.component.scss']
})
export class AgentChangePwdComponent implements OnInit {
  agentChangepwdForm!:FormGroup
  agent:any
  constructor(
    private fb:FormBuilder,
    private dialog:MatDialogRef<AgentChangePwdComponent>,
    private agentService:AgentService,
    private router:Router
  ) { }

  ngOnInit(): void {
this.agent=this.agentService.getAgentFromLocal()
    this.agentChangepwdForm=this.fb.group({
      agentname:['',[Validators.required]],
      oldphno:['',[Validators.required]],
      phno:['',[Validators.required]]
    })
    this.agentChangepwdForm.patchValue({
      agentname:this.agent.agentname
    })
  }
updatePWD(){
  if(this.agentChangepwdForm.valid){
    if(this.agentChangepwdForm.value.oldphno==this.agent.phno){
      let data={
        phno:this.agentChangepwdForm.value.phno
      }
      this.agentService.updateMobileno(this.agent._id,data).subscribe((res:any)=>{
        this.dialog.close()
        sessionStorage.removeItem('licagent')
        this.router.navigate(['home/agent-login'])
      })
    }
  }

}
}
