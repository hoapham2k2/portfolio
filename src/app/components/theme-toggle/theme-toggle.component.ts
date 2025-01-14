import { Component, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  template: `
    <button (click)="toggleTheme()">
      Switch to {{ isDarkMode ? 'Light' : 'Dark' }} Mode
    </button>
  `,
  styles: [`
    button {
      padding: 8px 16px;
      font-size: 16px;
      cursor: pointer;
    }
  `]
})
export class ThemeToggleComponent implements OnInit {
  isDarkMode = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    this.applyTheme();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
  }

  private applyTheme() {
    const themeClass = this.isDarkMode ? 'dark-theme' : '';
    this.renderer.setAttribute(document.body, 'class', themeClass);
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }
}

