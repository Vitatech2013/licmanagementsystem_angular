import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentAddCustomerComponent } from './agent-add-customer.component';

describe('AgentAddCustomerComponent', () => {
  let component: AgentAddCustomerComponent;
  let fixture: ComponentFixture<AgentAddCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentAddCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentAddCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
