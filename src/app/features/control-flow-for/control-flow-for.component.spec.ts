import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFlowForComponent } from './control-flow-for.component';

describe('ControlFlowForComponent', () => {
  let component: ControlFlowForComponent;
  let fixture: ComponentFixture<ControlFlowForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFlowForComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlFlowForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
