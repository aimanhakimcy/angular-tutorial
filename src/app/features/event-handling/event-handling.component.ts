import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-handling',
  imports: [CommonModule, FormsModule],
  templateUrl: './event-handling.component.html',
  styleUrl: './event-handling.component.css'
})
export class EventHandlingComponent {

  clickCount = 0;
  hoverCount = 0;
  keyPressCount = 0;
  scrollCount = 0;
  formSubmitCount = 0;

  message = 'Hover over the section to reveal a secret message!';
  secretRevealed = false;
  backgroundColor = '#3b82f6'; 

  mouseX = 0;
  mouseY = 0;

  inputValue = '';
  textAreaValue = '';
  lastKeyPressed = '';
  keyCombo = '';

  username = '';
  email = '';
  rememberMe = false;

  dragCount = 0;
  isDragging = false;

  doubleClickCount = 0;
  contextMenuCount = 0;
  touchCount = 0;
  focusCount = 0;
  blurCount = 0;
  animationCount = 0;

  private debounceTimer: any;

  handleClick() {
    this.clickCount++;
    this.message = `Clicked ${this.clickCount} times! 🎯`;
  }

  handleHover() {
    this.hoverCount++;
    if (!this.secretRevealed) {
      this.message = 'Way to go 🚀';
      this.secretRevealed = true;
    }
  }

  showSecretMessage() {
    this.message = 'Secret revealed! You found the hidden message! 🎉';
  }

  resetHover() {
    this.hoverCount = 0;
    this.message = 'Hover over the section again!';
    this.secretRevealed = false;
  }

  handleMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  handleMouseEnter() {
    this.message = 'Mouse entered the area! 🖱️';
  }

  handleMouseLeave() {
    this.message = 'Mouse left the area! 👋';
  }

  handleKeyPress(event: KeyboardEvent) {
    this.keyPressCount++;
    this.lastKeyPressed = event.key;

    // Track key combinations
    if (event.ctrlKey && event.key === 's') {
      event.preventDefault();
      this.keyCombo = 'Ctrl + S (Save)';
      this.message = 'Save shortcut pressed! 💾';
    } else if (event.altKey && event.key === 'Enter') {
      this.keyCombo = 'Alt + Enter';
      this.message = 'Alternative enter pressed! ⏎';
    }
  }

  handleInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.inputValue = input.value;

    // Debounce example
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.message = `Typing stopped: "${this.inputValue}"`;
    }, 300);
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    this.formSubmitCount++;
    this.message = `Form submitted ${this.formSubmitCount} times! 📝`;

    // In a real app, you would send data to a server here
    console.log('Form data:', {
      username: this.username,
      email: this.email,
      rememberMe: this.rememberMe
    });
  }

  handleDragStart(event: DragEvent) {
    this.isDragging = true;
    event.dataTransfer?.setData('text/plain', 'Dragging item');
  }

  handleDragEnd() {
    this.isDragging = false;
    this.dragCount++;
    this.message = `Dragged ${this.dragCount} times! 🎯`;
  }

  handleDragOver(event: DragEvent) {
    event.preventDefault(); // Necessary to allow drop
  }

  handleDrop(event: DragEvent) {
    event.preventDefault();
    this.message = 'Item dropped successfully! ✅';
  }

  // Double click
  handleDoubleClick() {
    this.doubleClickCount++;
    this.message = `Double clicked ${this.doubleClickCount} times! ✨`;
  }

  // Context menu
  handleContextMenu(event: MouseEvent) {
    event.preventDefault(); // Prevent default browser context menu
    this.contextMenuCount++;
    this.message = `Custom context menu #${this.contextMenuCount}! 🎪`;
  }

  // Touch events
  handleTouchStart() {
    this.touchCount++;
    this.message = `Touch detected ${this.touchCount} times! 📱`;
  }

  // Focus events
  handleFocus() {
    this.focusCount++;
    this.message = `Focused ${this.focusCount} times! 🔍`;
  }

  handleBlur() {
    this.blurCount++;
    this.message = `Blurred ${this.blurCount} times! 👁️`;
  }

  // Animation events
  handleAnimationStart() {
    this.animationCount++;
  }

  // Scroll events (debounced)
  handleScroll() {
    this.scrollCount++;

    // Debounce scroll events
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.message = `Scrolled ${this.scrollCount} times! 📜`;
    }, 100);
  }

  // Reset all counters
  resetAll() {
    this.clickCount = 0;
    this.hoverCount = 0;
    this.keyPressCount = 0;
    this.scrollCount = 0;
    this.formSubmitCount = 0;
    this.dragCount = 0;
    this.doubleClickCount = 0;
    this.contextMenuCount = 0;
    this.touchCount = 0;
    this.focusCount = 0;
    this.blurCount = 0;
    this.animationCount = 0;
    this.message = 'All counters reset! Start fresh! 🆕';
    this.secretRevealed = false;
    this.inputValue = '';
    this.textAreaValue = '';
    this.username = '';
    this.email = '';
    this.rememberMe = false;
  }

  // Get event statistics
  get totalEvents(): number {
    return this.clickCount + this.hoverCount + this.keyPressCount +
      this.scrollCount + this.formSubmitCount + this.dragCount +
      this.doubleClickCount + this.contextMenuCount + this.touchCount +
      this.focusCount + this.blurCount + this.animationCount;
  }

  // Get event color based on count
  getEventColor(count: number): string {
    if (count === 0) return 'bg-gray-100 text-gray-800';
    if (count < 5) return 'bg-blue-100 text-blue-800';
    if (count < 10) return 'bg-green-100 text-green-800';
    if (count < 20) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  }

  decrement() { this.clickCount--; }
  increment() { this.clickCount++; }


}
