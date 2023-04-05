import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AgentLoginComponent } from './Agent/agent-login/agent-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AddAgentComponent } from './admin/add-agent/add-agent.component';
import { AddPolicyComponent } from './admin/add-policy/add-policy.component';
import { ViewAgentComponent } from './admin/view-agent/view-agent.component';
import { ViewPolicyComponent } from './admin/view-policy/view-policy.component';
import { AgentDashboardComponent } from './Agent/agent-dashboard/agent-dashboard.component';
import { AgentViewPolicyComponent } from './Agent/agent-view-policy/agent-view-policy.component';
import { AgentAddCustomerComponent } from './Agent/agent-add-customer/agent-add-customer.component';
import { AgentViewCustomerComponent } from './Agent/agent-view-customer/agent-view-customer.component';
import { AgentPaymentComponent } from './Agent/agent-payment/agent-payment.component';
import { AgentPaymentDetailsComponent } from './Agent/agent-payment-details/agent-payment-details.component';
import { AgentProfileComponent } from './Agent/agent-profile/agent-profile.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:WelcomeComponent,children:[
    {path:'admin-login',component:AdminLoginComponent},
    {path:'agent-login', component:AgentLoginComponent}
  ]},
  {path:'admin-dashboard', component:AdminDashboardComponent,children:[
     {path:'add-agent',component:AddAgentComponent},
     {path:'add-policy',component:AddPolicyComponent},
     {path:'view-agents', component:ViewAgentComponent},
     {path:'view-policy',component:ViewPolicyComponent}
  ]},
  {path:'agent-dashboard', component:AgentDashboardComponent,children:[
    {path:'',redirectTo:'agent-view-policy',pathMatch:'full'},
    {path:'agent-view-policy', component:AgentViewPolicyComponent},
    {path:'add-customer', component:AgentAddCustomerComponent},
    {path:'view-customer', component:AgentViewCustomerComponent},
    {path:'payment', component:AgentPaymentComponent},
    {path:'payment-details', component:AgentPaymentDetailsComponent},
    {path:'agent-view-profile', component:AgentProfileComponent},
  ]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
