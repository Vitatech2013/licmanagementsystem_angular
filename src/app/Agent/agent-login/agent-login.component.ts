import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgentService } from 'src/app/shared/services/agent.service';

@Component({
  selector: 'app-agent-login',
  templateUrl: './agent-login.component.html',
  styleUrls: ['./agent-login.component.scss']
})
export class AgentLoginComponent implements OnInit {
  agentLoginForm!:FormGroup
  constructor(
    private fb:FormBuilder,
    private agentService:AgentService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.agentLoginForm=this.fb.group({
      agentname:['',[Validators.required]],
      phno:['',[Validators.required]]
    })
  }
  agentLogin(){
if(this.agentLoginForm.valid){
this.agentService.agentLogin(this.agentLoginForm.value.agentname,this.agentLoginForm.value.phno).subscribe((res:any)=>{
  if(res){
    sessionStorage.setItem('licagent', JSON.stringify(res))
  this.router.navigate(['agent-dashboard'])
  }
  
})
}else{
  alert('please fill required field')
}
  }
}
