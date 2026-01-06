import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-control-flow-for',
  imports: [CommonModule, FormsModule],
  templateUrl: './control-flow-for.component.html',
  styleUrl: './control-flow-for.component.css'
})
export class ControlFlowForComponent {

  users = [
    { id: 0, name: 'Sarah', role: 'Frontend Developer', status: 'Active', avatar: '👩‍💻' },
    { id: 1, name: 'Amy', role: 'UI Designer', status: 'active', avatar: '🎨' },
    { id: 2, name: 'Rachel', role: 'Backend Developer', status: 'away', avatar: '👩‍💻' },
    { id: 3, name: 'Jessica', role: 'DevOps Engineer', status: 'active', avatar: '🚀' },
    { id: 4, name: 'Poornima', role: 'Product Manager', status: 'busy', avatar: '👩‍💼' }
  ];

  // Operating systems example from tutorial
  operatingSystems = [
    { id: 'win', name: 'Windows', version: '11', marketShare: 73, icon: '💻' },
    { id: 'osx', name: 'MacOS', version: 'Sonoma', marketShare: 16, icon: '🍎' },
    { id: 'linux', name: 'Linux', version: 'Ubuntu 22.04', marketShare: 4, icon: '🐧' },
    { id: 'chrome', name: 'Chrome OS', version: '118', marketShare: 3, icon: '🌐' }
  ];

  // Products array
  products = [
    { id: 1, name: 'Laptop Pro', category: 'Electronics', price: 1299, stock: 45, rating: 4.7 },
    { id: 2, name: 'Wireless Mouse', category: 'Accessories', price: 49, stock: 128, rating: 4.3 },
    { id: 3, name: 'Mechanical Keyboard', category: 'Accessories', price: 129, stock: 32, rating: 4.8 },
    { id: 4, name: '4K Monitor', category: 'Electronics', price: 599, stock: 18, rating: 4.6 },
    { id: 5, name: 'USB-C Hub', category: 'Accessories', price: 89, stock: 67, rating: 4.2 }
  ];

  // Tasks array
  tasks = [
    { id: 1, title: 'Fix login bug', priority: 'high', completed: false, assignee: 'Sarah' },
    { id: 2, title: 'Update documentation', priority: 'medium', completed: true, assignee: 'Amy' },
    { id: 3, title: 'Optimize database queries', priority: 'high', completed: false, assignee: 'Rachel' },
    { id: 4, title: 'Design new dashboard', priority: 'low', completed: false, assignee: 'Jessica' },
    { id: 5, title: 'Write unit tests', priority: 'medium', completed: true, assignee: 'Poornima' }
  ];

  // New user input
  newUserName = '';
  newUserRole = 'Developer';

  // Filter states
  filterStatus = 'all'; // all, active, away, busy
  filterRole = 'all';

  addUser() {
    if (this.newUserName.trim()) {
      const newId = this.users.length;
      this.users.push({
        id: newId,
        name: this.newUserName,
        role: this.newUserRole,
        status: 'active',
        avatar: this.getRandomAvatar()
      });
      this.newUserName = '';
    }
  }

  removeUser(userId: number) {
    this.users = this.users.filter(user => user.id !== userId);
  }

  toggleUserStatus(userId: number) {
    const user = this.users.find(u => u.id === userId);
    if (user) {
      const statuses = ['active', 'away', 'busy'];
      const currentIndex = statuses.indexOf(user.status);
      user.status = statuses[(currentIndex + 1) % statuses.length];
    }
  }

  toggleTaskCompletion(taskId: number) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
    }
  }

  private getRandomAvatar(): string {
    const avatars = ['👩‍💻', '👨‍💻', '🎨', '🚀', '👩‍💼', '👨‍🏫', '🧑‍🔬', '👨‍🚀'];
    return avatars[Math.floor(Math.random() * avatars.length)];
  }

  get filteredUsers() {
    return this.users.filter(user => {
      const statusMatch = this.filterStatus === 'all' || user.status === this.filterStatus;
      const roleMatch = this.filterRole === 'all' || user.role.toLowerCase().includes(this.filterRole.toLowerCase());
      return statusMatch && roleMatch;
    });
  }

  // Get status color
  getStatusColor(status: string): string {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'away': return 'bg-yellow-100 text-yellow-800';
      case 'busy': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  // Get priority color
  getPriorityColor(priority: string): string {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  // Statistics
  get totalUsers(): number {
    return this.users.length;
  }

  get activeUsers(): number {
    return this.users.filter(user => user.status === 'active').length;
  }

  get completedTasks() {
    return this.tasks.filter(task => task.completed);
  }
}
