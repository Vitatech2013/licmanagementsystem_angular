import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentCustomerEditComponent } from './agent-customer-edit.component';

describe('AgentCustomerEditComponent', () => {
  let component: AgentCustomerEditComponent;
  let fixture: ComponentFixture<AgentCustomerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentCustomerEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentCustomerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
