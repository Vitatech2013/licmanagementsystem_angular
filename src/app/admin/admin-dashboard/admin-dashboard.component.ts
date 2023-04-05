import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminChangePwdComponent } from '../admin-change-pwd/admin-change-pwd.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor(
    private router:Router,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
  }
  adminLogout(){
    sessionStorage.removeItem('licadmin')
    this.router.navigate(['/home/admin-login'])

  }
  changepwd(){
 this.dialog.open(AdminChangePwdComponent,{
  width:'40%'
 }).afterClosed().subscribe(res=>{

  if(res.status=='changed'){
    this.adminLogout()
}
 })
  }
}
