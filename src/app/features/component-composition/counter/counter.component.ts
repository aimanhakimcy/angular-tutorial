import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  @Input() label = 'Counter';
  @Input() initialValue = 0;
  @Output() valueChanged = new EventEmitter<number>();

  currentValue = this.initialValue;

  increment() {
    this.currentValue++;
    this.valueChanged.emit(this.currentValue);
  }

  decrement() {
    if (this.currentValue > 0) {
      this.currentValue--;
      this.valueChanged.emit(this.currentValue);
    }
  }

  reset() {
    this.currentValue = 0;
    this.valueChanged.emit(this.currentValue);
  }

  setTo(value: number) {
    this.currentValue = value;
    this.valueChanged.emit(this.currentValue);
  }

  double() {
    this.currentValue *= 2;
    this.valueChanged.emit(this.currentValue);
  }


}
