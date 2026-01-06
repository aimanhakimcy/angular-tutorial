import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFlowIfComponent } from './control-flow-if.component';

describe('ControlFlowIfComponent', () => {
  let component: ControlFlowIfComponent;
  let fixture: ComponentFixture<ControlFlowIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFlowIfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlFlowIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
