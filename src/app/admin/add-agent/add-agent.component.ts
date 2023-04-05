import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.scss']
})
export class AddAgentComponent implements OnInit {
addAgentForm!:FormGroup
  constructor(
    private fb:FormBuilder,
    private adminService:AdminService
  ) { }

  ngOnInit(): void {
    this.addAgentForm=this.fb.group({
      agentname:['',[Validators.required]],
      phno:['',[Validators.required]],
      email:['',[Validators.required]],
      dob:['',[Validators.required]],
      gender:['',[Validators.required]],
      adharno:['',[Validators.required]],
      address:['',[Validators.required]]
    })
}
addAgent(){
  if(this.addAgentForm.valid){
    this.adminService.addAgents(this.addAgentForm.value).subscribe((res:any)=>{
      alert('agent added successfully')
      this.addAgentForm.reset()
    })
  }else{
    alert('please fill required fields')
  }
  
}
}
