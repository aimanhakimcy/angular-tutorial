import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // Basic input property (no default value)
  name = input<string>(); // InputSignal<string | undefined>

  // Input with default value
  occupation = input<string>('Developer');

  // Input with specific type
  age = input<number>(25);
  isActive = input<boolean>(true);

  // Input with complex object type
  address = input<{ city: string, country: string }>({
    city: 'Unknown',
    country: 'Unknown'
  });

  // Input with array type
  skills = input<string[]>([]);

  // Required input (must be provided by parent)
  userId = input.required<number>();

  // Input with transform function
  salary = input(0, {
    transform: (value: string | number) => {
      // Transform string to number and format
      const num = typeof value === 'string' ? parseFloat(value) : value;
      return Math.round(num);
    }
  });

  // Computed properties based on inputs
  get userInfo() {
    return `${this.name()} is a ${this.age()}-year-old ${this.occupation()}`;
  }

  get statusColor() {
    return this.isActive() ? 'text-green-600' : 'text-red-600';
  }

  get statusText() {
    return this.isActive() ? 'Active' : 'Inactive';
  }

  get formattedSalary() {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(this.salary());
  }

  // Method to demonstrate input usage
  getLocation() {
    const addr = this.address();
    return `${addr.city}, ${addr.country}`;
  }
}
