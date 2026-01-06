import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { UserComponent } from './user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-component-composition',
  imports: [CommonModule, CounterComponent, UserComponent, WelcomeComponent, RouterOutlet],
  templateUrl: './component-composition.component.html',
  styleUrl: './component-composition.component.css'
})
export class ComponentCompositionComponent {

  appTitle = 'Component Composition Demo';
  users = [
    { id: 1, name: 'Alex Johnson', role: 'Frontend Developer', active: true, avatar: '👨‍💻' },
    { id: 2, name: 'Maria Chen', role: 'UI Designer', active: true, avatar: '👩‍🎨' },
    { id: 3, name: 'David Smith', role: 'Backend Developer', active: false, avatar: '👨‍💻' },
    { id: 4, name: 'Sarah Wilson', role: 'Project Manager', active: true, avatar: '👩‍💼' }
  ]

  showWelcomeMessage = true;
  componentCounter = 0;

  toggleWelcome() {
    this.showWelcomeMessage = !this.showWelcomeMessage;
  }

  addUser() {
    const newId = this.users.length + 1;
    const names = ['Taylor Swift', 'John Doe', 'Emma Watson', 'Michael Jordan'];
    const roles = ['Full Stack Dev', 'DevOps Engineer', 'QA Tester', 'Scrum Master'];
    const avatars = ['👩‍💻', '🧑‍🔬', '👨‍🚀', '🧙‍♂️'];
    const randomIndex = Math.floor(Math.random() * names.length);
    this.users.push({
      id: newId,
      name: names[randomIndex],
      role: roles[randomIndex],
      active: Math.random() > 0.5,
      avatar: avatars[randomIndex]
    });
    this.componentCounter++;
  }

  removeUser() {
    if (this.users.length > 1) {
      this.users.pop();
      this.componentCounter++;
    }
  }

  toggleUserActive(index: number) {
    this.users[index].active = !this.users[index].active;
  }
}
