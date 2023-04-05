import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/shared/services/admin.service';
import { EditPolicyComponent } from '../edit-policy/edit-policy.component';

@Component({
  selector: 'app-view-policy',
  templateUrl: './view-policy.component.html',
  styleUrls: ['./view-policy.component.scss']
})
export class ViewPolicyComponent implements OnInit {
  Policies:any
  constructor( 
    private adminservice:AdminService,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.adminservice.viewAllPolicies().subscribe((res:any)=>{
      this.Policies=res
    })
  }

  editPolicy(policy:any){
    this.dialog.open(EditPolicyComponent,{
      width:'40%',
      data:policy
    }).afterClosed().subscribe(res=>{
      this.ngOnInit()
    })
  }
  deletePolicy(policyId:any){
    let result=confirm('are you sure want to delete the policy')
    if(result){
      this.adminservice.DeletePolocyById(policyId).subscribe((res:any)=>{
        this.ngOnInit()
      })
    }
  }
}
