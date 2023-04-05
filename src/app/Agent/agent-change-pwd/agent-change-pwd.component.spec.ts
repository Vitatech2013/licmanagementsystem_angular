import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentChangePwdComponent } from './agent-change-pwd.component';

describe('AgentChangePwdComponent', () => {
  let component: AgentChangePwdComponent;
  let fixture: ComponentFixture<AgentChangePwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentChangePwdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentChangePwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
