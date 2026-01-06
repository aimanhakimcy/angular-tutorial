import { Component } from '@angular/core';

@Component({
  selector: 'app-anatomy',
  imports: [],
  templateUrl: './anatomy.component.html',
  styleUrl: './anatomy.component.css'
})
export class AnatomyComponent {

  componentTitle = 'Anatomy of an Angular Component';
  message = 'Hello Universe';
  componentParts = [
    {
      name: 'TypeScript Class',
      description: 'The BRAIN - contains logic and data',
      icon: '🧠'
    },
    {
      name: 'HTML Template',
      description: 'The FACE - what users see',
      icon: '🎨'
    },
    {
      name: 'CSS Styles',
      description: 'The CLOTHES - makes it look good',
      icon: '👕'
    }
  ]

  componentCode = `@Component({
    selector: 'app-anatomy',
    templateUrl: './anatomy.component.html',
    styleUrls: ['./anatomy.component.css']
  })
  export class AnatomyComponent {
    message = 'Hello Universe';
    color = '#a144eb';
  
    updateMessage() {
      this.message = 'Updated!';
    }
  }`;


  currentColor = '#a144eb';

  updateMessage() {
    this.message = 'Hello Angular';
  }

  updateColor() {
    this.currentColor = this.generateRandomColor();
  }

  generateRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

}
