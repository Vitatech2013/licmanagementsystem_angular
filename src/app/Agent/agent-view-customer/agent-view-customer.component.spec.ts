import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentViewCustomerComponent } from './agent-view-customer.component';

describe('AgentViewCustomerComponent', () => {
  let component: AgentViewCustomerComponent;
  let fixture: ComponentFixture<AgentViewCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentViewCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentViewCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
