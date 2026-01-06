import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-welcome',
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  @Input() title = 'Welcome to Angular!';
  @Input() message = 'This is a composed component example.';
  @Input() showTips = true;
  
  tips = [
    'Components are reusable like Lego blocks',
    'Parent components can have multiple children',
    'Data flows down via @Input()',
    'Events flow up via @Output()'
  ];
}
