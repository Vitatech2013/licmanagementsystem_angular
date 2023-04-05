import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentViewPolicyComponent } from './agent-view-policy.component';

describe('AgentViewPolicyComponent', () => {
  let component: AgentViewPolicyComponent;
  let fixture: ComponentFixture<AgentViewPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentViewPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentViewPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
