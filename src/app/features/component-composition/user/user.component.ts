import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  constructor(
    private router: Router
  ){}

  @Input() userName = 'youngTech';
  @Input() userRole = 'Developer';
  @Input() isActive = true;
  @Input() avatar = '👤';
  @Input() userId = 0;

  lastActive = '2 hours ago';
  joinDate = new Date(2023, 0, 15);

  getStatusColor() {
    return this.isActive ? 'text-green-600' : 'text-gray-400';
  }

  getStatusText() {
    return this.isActive ? 'Active' : 'Inactive';
  }

  getCardColor() {
    return this.isActive
      ? 'bg-gradient-br from-blue-50 to-cyan-50 border-blue-200'
      : 'bg-gradient-br from-gray-50 to-gray-100 border-gray-300';
  }
}
