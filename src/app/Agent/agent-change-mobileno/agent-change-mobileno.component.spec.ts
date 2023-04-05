import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentChangeMobilenoComponent } from './agent-change-mobileno.component';

describe('AgentChangeMobilenoComponent', () => {
  let component: AgentChangeMobilenoComponent;
  let fixture: ComponentFixture<AgentChangeMobilenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentChangeMobilenoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentChangeMobilenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
