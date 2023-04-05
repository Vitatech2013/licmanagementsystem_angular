import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AgentLoginComponent } from './Agent/agent-login/agent-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AddAgentComponent } from './admin/add-agent/add-agent.component';
import { AddPolicyComponent } from './admin/add-policy/add-policy.component';
import { ViewAgentComponent } from './admin/view-agent/view-agent.component';
import { ViewPolicyComponent } from './admin/view-policy/view-policy.component';
import { AdminChangePwdComponent } from './admin/admin-change-pwd/admin-change-pwd.component';
import { EditPolicyComponent } from './admin/edit-policy/edit-policy.component';
import { EditAgentComponent } from './admin/edit-agent/edit-agent.component';
import { AgentDashboardComponent } from './Agent/agent-dashboard/agent-dashboard.component';
import { AgentViewPolicyComponent } from './Agent/agent-view-policy/agent-view-policy.component';
import { AgentAddCustomerComponent } from './Agent/agent-add-customer/agent-add-customer.component';
import { AgentViewCustomerComponent } from './Agent/agent-view-customer/agent-view-customer.component';
import { AgentPaymentComponent } from './Agent/agent-payment/agent-payment.component';
import { AgentPaymentDetailsComponent } from './Agent/agent-payment-details/agent-payment-details.component';
import { AgentProfileComponent } from './Agent/agent-profile/agent-profile.component';
import { AgentChangeMobilenoComponent } from './Agent/agent-change-mobileno/agent-change-mobileno.component';
import { AgentCustomerEditComponent } from './Agent/agent-customer-edit/agent-customer-edit.component';
import { AgentChangePwdComponent } from './Agent/agent-change-pwd/agent-change-pwd.component'

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AgentLoginComponent,
    AddAgentComponent,
    AddPolicyComponent,
    ViewAgentComponent,
    ViewPolicyComponent,
    AdminChangePwdComponent,
    EditPolicyComponent,
    EditAgentComponent,
    AgentDashboardComponent,
    AgentViewPolicyComponent,
    AgentAddCustomerComponent,
    AgentViewCustomerComponent,
    AgentPaymentComponent,
    AgentPaymentDetailsComponent,
    AgentProfileComponent,
    AgentChangeMobilenoComponent,
    AgentCustomerEditComponent,
    AgentChangePwdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
