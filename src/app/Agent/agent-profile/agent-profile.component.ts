import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgentService } from 'src/app/shared/services/agent.service';

@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.scss']
})
export class AgentProfileComponent implements OnInit {
agentProfileForm!:FormGroup
agent:any
  constructor(
    private fb:FormBuilder,
    private agentservice:AgentService
  ) { 
    
  }

  ngOnInit(): void {
    this.agentProfileForm=this.fb.group({
      agentname:['',[Validators.required]],
      phno:['',[Validators.required]],
      email:['',[Validators.required]],
      dob:['',[Validators.required]],
      gender:['',[Validators.required]],
      adharno:['',[Validators.required]],
      address:['',[Validators.required]]
    })
    this.agent=this.agentservice.getAgentFromLocal()
    this.agentservice.agentViewProfile(this.agent.agentname).subscribe((res:any)=>{
      this.agentProfileForm.patchValue({
        agentname:res.agentname,
      phno:res.phno,
      email:res.email,
      dob:res.dob,
      gender:res.gender,
      adharno:res.adharno,
      address:res.address
      })
    })
  }
  updateProfile(){
    if(this.agentProfileForm.valid){
      this.agentservice.updateAgentProfile(this.agent._id,this.agentProfileForm.value).subscribe((res:any)=>{
        
      })
    }
  }
}
