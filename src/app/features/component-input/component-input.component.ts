import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-component-input',
  imports: [CommonModule, UserComponent],
  templateUrl: './component-input.component.html',
  styleUrl: './component-input.component.css'
})
export class ComponentInputComponent {

  currentUserName = 'Simran';
  currentUserOccupation = 'Software Engineer';
  currentUserAge = 28;
  currentUserActive = true;
  currentUserSalary = 85000;

  currentUserAddress = {
    city: 'San Francisco',
    country: 'USA'
  };

  currentUserSkills = ['Angular', 'TypeScript', 'RxJS', 'Tailwind CSS'];

  // Array of users for multiple instances
  users = [
    { id: 1, name: 'Alex Johnson', occupation: 'Frontend Developer', age: 32, active: true, salary: 95000 },
    { id: 2, name: 'Maria Chen', occupation: 'UI Designer', age: 27, active: true, salary: 85000 },
    { id: 3, name: 'David Smith', occupation: 'Backend Developer', age: 35, active: false, salary: 110000 },
    { id: 4, name: 'Sarah Wilson', occupation: 'Product Manager', age: 30, active: true, salary: 120000 }
  ];

  // Theme for styling
  theme = {
    primary: '#3b82f6',
    secondary: '#10b981',
    background: '#f8fafc'
  };

  // Update user data
  updateUserName() {
    const names = ['Alex', 'Maria', 'David', 'Sarah', 'John', 'Emma'];
    this.currentUserName = names[Math.floor(Math.random() * names.length)];
  }

  updateUserOccupation() {
    const occupations = ['Software Engineer', 'UX Designer', 'DevOps Specialist', 'Data Scientist', 'Product Manager'];
    this.currentUserOccupation = occupations[Math.floor(Math.random() * occupations.length)];
  }

  toggleActive() {
    this.currentUserActive = !this.currentUserActive;
  }

  increaseAge() {
    this.currentUserAge++;
  }

  increaseSalary() {
    this.currentUserSalary += 5000;
  }

  // Add a new user
  addUser() {
    const newId = this.users.length + 1;
    const names = ['Taylor Swift', 'John Doe', 'Emma Watson', 'Michael Jordan'];
    const occupations = ['Full Stack Dev', 'DevOps Engineer', 'QA Tester', 'Scrum Master'];

    this.users.push({
      id: newId,
      name: names[Math.floor(Math.random() * names.length)],
      occupation: occupations[Math.floor(Math.random() * occupations.length)],
      age: Math.floor(Math.random() * 20) + 25,
      active: Math.random() > 0.5,
      salary: Math.floor(Math.random() * 50000) + 60000
    });
  }

  // Remove a user
  removeUser(index: number) {
    this.users.splice(index, 1);
  }
}
