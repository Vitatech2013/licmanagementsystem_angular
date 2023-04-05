import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/shared/services/admin.service';
import { EditAgentComponent } from '../edit-agent/edit-agent.component';

@Component({
  selector: 'app-view-agent',
  templateUrl: './view-agent.component.html',
  styleUrls: ['./view-agent.component.scss']
})
export class ViewAgentComponent implements OnInit {
agents:any
  constructor( 
    private adminService:AdminService,
    private dialog:MatDialog
    ) { }

  ngOnInit(): void {
    this,this.adminService.viewAllAgents().subscribe((res:any)=>{
      this.agents=res
    })
  }
  editAgent(a:any){
    this.dialog.open(EditAgentComponent,{
      width:'40%',
      data:a
    }).afterClosed().subscribe(res=>{
      this.ngOnInit()
    })
  }
  deleteAgent(a:any){
    let result=confirm('Are you sure you want to deleta')
    if(result){
      this.adminService.agentDelete(a).subscribe(res=>{
        this.ngOnInit()
      })
    }
  }
}
