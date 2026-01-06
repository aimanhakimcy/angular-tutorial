import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-property-binding',
  imports: [CommonModule, FormsModule],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {

  isEditable = true;
  isDisabled = false;
  isChecked = true;

  imageURL = 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=300&fit=crop';
  imageAlt = 'Angular programming setup';
  videoURL = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

  buttonColor = '#3b82f6'; // Blue
  textColor = '#1f2937'; // Gray-800
  backgroundColor = '#f3f4f6'; // Gray-100
  fontSize = 16;
  borderRadius = 8;

  // Form properties
  inputValue = 'Edit me!';
  placeholderText = 'Type something...';
  maxLength = 50;
  minValue = 0;
  maxValue = 100;
  currentValue = 42;

  // Link properties
  websiteURL = 'https://angular.io';
  linkText = 'Visit Angular Documentation';
  linkTarget = '_blank';

  galleryImages = [
    { id: 1, url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w-400&h=300&fit=crop', title: 'Code Editor' },
    { id: 2, url: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=300&fit=crop', title: 'Development Setup' },
    { id: 3, url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop', title: 'Web Development' },
    { id: 4, url: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop', title: 'Programming' }
  ];

  currentImageIndex = 0;

  toggleEditable() {
    this.isEditable = !this.isEditable;
  }

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }

  toggleChecked() {
    this.isChecked = !this.isChecked;
  }

  changeImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.galleryImages.length;
    this.imageURL = this.galleryImages[this.currentImageIndex].url;
    this.imageAlt = this.galleryImages[this.currentImageIndex].title;
  }

  updateButtonColor() {
    const colors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6'];
    this.buttonColor = colors[Math.floor(Math.random() * colors.length)];
  }

  updateTextColor() {
    const colors = ['#1f2937', '#dc2626', '#059669', '#d97706', '#7c3aed'];
    this.textColor = colors[Math.floor(Math.random() * colors.length)];
  }

  updateBackground() {
    const colors = ['#f3f4f6', '#fef3c7', '#dbeafe', '#f0f9ff', '#fce7f3'];
    this.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  }

  increaseFontSize() {
    this.fontSize = Math.min(this.fontSize + 2, 32);
  }

  decreaseFontSize() {
    this.fontSize = Math.max(this.fontSize - 2, 12);
  }

  increaseBorderRadius() {
    this.borderRadius = Math.min(this.borderRadius + 4, 32);
  }

  decreaseBorderRadius() {
    this.borderRadius = Math.max(this.borderRadius - 4, 0);
  }

  get currentImage() {
    return this.galleryImages[this.currentImageIndex];
  }

  get buttonStyles() {
    return {
      'background-color': this.buttonColor,
      'color': 'white',
      'border-radius': `${this.borderRadius}px`
    };
  }

  get editableDivStyles() {
    return {
      'background-color': this.backgroundColor,
      'color': this.textColor,
      'font-size': `${this.fontSize}px`,
      'border-radius': `${this.borderRadius}px`
    };
  }

  get progressValue() {
    return (this.currentValue / this.maxValue) * 100;
  }
}
