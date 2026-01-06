import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-update-component',
  imports: [CommonModule],
  templateUrl: './update-component.component.html',
  styleUrl: './update-component.component.css'
})
export class UpdateComponentComponent {

  city: string = 'San Francisco';
  temperature: number = 65;
  isSunny: boolean = true;
  population: number = 874961;
  foundedYear: number = 1776;

  landmarks = [
    { name: 'Golden Gate Bridge', type: 'Bridge', visited: true },
    { name: 'Alcatraz Island', type: 'Island', visited: false },
    { name: 'Fisherman\'s Wharf', type: 'Pier', visited: true },
    { name: 'Lombard Street', type: 'Street', visited: true }
  ];

  currentDate = new Date();

  updateCity() {
    const cities = ['New York', 'Tokyo', 'London', 'Paris', 'Sydney', 'Dubai'];
    this.city = cities[Math.floor(Math.random() * cities.length)];
    this.updateCityDetails();
  }

  private updateCityDetails() {
    this.temperature = Math.floor(Math.random() * 50) + 30;
    this.isSunny = Math.random() > 0.4;
    this.population = Math.floor(Math.random() * 10000000) + 1000000;
  }

  updateTemperature() {
    this.temperature = Math.floor(Math.random() * 50) + 30;
    this.isSunny = Math.random() > 0.3;
  }
  
  toggleLandmarkVisited(index: number) {
    this.landmarks[index].visited = !this.landmarks[index].visited;
  }
  get weatherEmoji() {
    return this.isSunny ? '☀️' : '☁️';
  }
  
  get weatherMessage() {
    return this.isSunny ? 'Perfect weather for sightseeing!' : 'Might want an umbrella!';
  }
}
