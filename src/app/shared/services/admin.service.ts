import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http:HttpClient
  ) { }
  url=environment.baseUrl

  getAdminFromLocal(){
    return JSON.parse(sessionStorage.getItem('licadmin')!)
  }

  adminLogin(uname:any,pwd:any){
   return this.http.get(this.url+'/admin?username='+uname+'&pwd='+pwd)
  }
  addAgents(data:any){
    return this.http.post(this.url+'/admin/addagents',data)
  }
  viewAllAgents(){
    return this.http.get(this.url+'/admin/viewagents')
  }
  addPolicies(data:any){
    return this.http.post(this.url+'/admin/polices',data)
  }
  viewAllPolicies(){
    return this.http.get(this.url+'/admin/viewpolicy')
  }
  DeletePolocyById(id:any){
    return this.http.delete(this.url+'/admin/'+id)
  }
  policyupdate(id:any,data:any){
    return this.http.put(this.url+'/admin/updatepolicy/'+id,data)
  }
  agentDelete(id:any){
    return this.http.delete(this.url+'/admin/delagent/'+id)
  }
  agentUpdate(id:any,data:any){
    return this.http.put(this.url+'/admin/'+id,data)
  }
  updateAdminPassword(id:any,data:any){
    return this.http.put(this.url+'/admin/updatepassword/'+id,data)
  }
}
