import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {

  isServerRunning = true;
  isLoggedIn = true;
  hasAdminAccess = false;
  maintenanceMode = false;

  serverUptime = 99.8;
  activeConnections = 247;
  serverLoad = 65;
  lastBackup = new Date('2024-01-15');

  userName = 'Aiman Hakim';
  userRole = 'Developer';
  notificationsCount = 3;
  readonly Date = Date;

  servers = [
    { id: 1, name: 'Web Server', status: 'running', load: 45, location: 'US East' },
    { id: 2, name: 'Database Server', status: 'running', load: 80, location: 'US West' },
    { id: 3, name: 'API Server', status: 'stopped', load: 0, location: 'EU Central' },
    { id: 4, name: 'Cache Server', status: 'maintenance', load: 10, location: 'Asia Pacific' },
    { id: 5, name: 'File Server', status: 'running', load: 30, location: 'US Central' }
  ];

  toggleServerStatus() {
    this.isServerRunning = !this.isServerRunning;
  }


  toggleLoginStatus() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  toggleAdminAccess() {
    this.hasAdminAccess = !this.hasAdminAccess;
  }

  toggleMaintenanceMode() {
    this.maintenanceMode = !this.maintenanceMode;
  }

  restartServer(serverId: number) {
    const server = this.servers.find(s => s.id === serverId);
    if (server) {
      server.status = server.status === 'running' ? 'stopped' : 'running';
    }
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'running': return 'bg-green-100 text-green-800';
      case 'stopped': return 'bg-red-100 text-red-800';
      case 'maintenance': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  getStatusEmoji(status: string): string {
    switch (status) {
      case 'running': return '🟢';
      case 'stopped': return '🔴';
      case 'maintenance': return '🟡';
      default: return '⚪';
    }
  }

  get runningServersCount(): number {
    return this.servers.filter(s => s.status === 'running').length;
  }

  get averageServerLoad(): number {
    const runningServers = this.servers.filter(s => s.status === 'running');
    if (runningServers.length === 0) return 0;
    return runningServers.reduce((sum, s) => sum + s.load, 0) / runningServers.length;
  }
}