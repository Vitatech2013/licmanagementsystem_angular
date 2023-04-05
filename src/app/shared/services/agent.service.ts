import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(
    private http:HttpClient
  ) { }
   url=environment.baseUrl

getAgentFromLocal(){
  return JSON.parse(sessionStorage.getItem('licagent')!)
}

agentLogin(aName:any,phno:any){
 return this.http.get(this.url+'/user/show?agentname='+aName+'&phno='+phno)
}
viewpolicy(){
  return this.http.get(this.url+'/user/viewpolicy')
}
viewAgent(){
  return this.http.get(this.url+'/user/viewagent')
}
addCustomer(data:any){
  return this.http.post(this.url+'/user/customers',data)
}
viewCustomers(){
  return this.http.get(this.url+'/user/viewcustomer')
}
updateCustomer(id:any,data:any){
  return this.http.put(this.url+'/user/customerupdate/'+id,data)
}
viewPayments(){
  return this.http.get(`${this.url}/user/viewpayments`)
}
agentViewProfile(agentname:any){
  return this.http.get(`${this.url}/user/viewprofile?agentname=${agentname}`)
}
updateAgentProfile(id:any,data:any){
  return this.http.put(`${this.url}/user/updateprofile/${id}`,data)
}
updateMobileno(id:any,data:any){
  return this.http.put(`${this.url}/user/updatepassword/${id}`,data)
}
}
