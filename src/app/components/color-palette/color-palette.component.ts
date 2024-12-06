import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-color-palette',
  template: `
    <div class="color-section">
      <h2>Paleta de Colores</h2>

      <h3>Colores Primarios</h3>
      <div class="color-grid">
        <div class="color-card" *ngFor="let color of primaryColors">
          <div
            class="color-preview"
            [style.background-color]="color.value"
            (click)="copyColor(color.value)"
          ></div>
          <div class="color-info">
            <span class="color-name">{{ color.name }}</span>
            <span class="color-value">{{ color.value }}</span>
          </div>
        </div>
      </div>

      <h3>Colores de Texto</h3>
      <div class="color-grid">
        <div class="color-card" *ngFor="let color of textColors">
          <div
            class="color-preview"
            [style.background-color]="color.value"
            (click)="copyColor(color.value)"
          ></div>
          <div class="color-info">
            <span class="color-name">{{ color.name }}</span>
            <span class="color-value">{{ color.value }}</span>
          </div>
        </div>
      </div>

      <h3>Colores de Estado</h3>
      <div class="color-grid">
        <div class="color-card" *ngFor="let color of statusColors">
          <div
            class="color-preview"
            [style.background-color]="color.value"
            (click)="copyColor(color.value)"
          ></div>
          <div class="color-info">
            <span class="color-name">{{ color.name }}</span>
            <span class="color-value">{{ color.value }}</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .color-section {
        padding: 2rem;
      }

      h2 {
        margin-bottom: 2rem;
        color: #2c3e50;
      }

      h3 {
        margin: 2rem 0 1rem;
        color: #2c3e50;
      }

      .color-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
      }

      .color-card {
        background: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      }

      .color-preview {
        height: 100px;
        cursor: pointer;
        transition: transform 0.2s;
      }

      .color-preview:hover {
        transform: scale(1.05);
      }

      .color-info {
        padding: 1rem;
      }

      .color-name {
        display: block;
        font-weight: 500;
        margin-bottom: 0.5rem;
      }

      .color-value {
        color: #6c757d;
        font-family: monospace;
      }
    `,
  ],
})
export class ColorPaletteComponent {
  primaryColors = [
    { name: 'Primary Orange', value: '#ff9800' },
    { name: 'Hover Orange', value: '#ffa726' },
    { name: 'Dark Background', value: '#2d2927' },
  ];

  textColors = [
    { name: 'Primary Text', value: '#2c3e50' },
    { name: 'Secondary Text', value: '#6c757d' },
    { name: 'Menu Text Light', value: '#d6d3d1' },
    { name: 'Menu Icon', value: '#a8a29e' },
  ];

  statusColors = [
    { name: 'Success', value: '#046c4e' },
    { name: 'Error', value: '#c81e1e' },
    { name: 'Warning', value: '#c27803' },
  ];

  constructor(private clipboard: Clipboard, private snackBar: MatSnackBar) {}

  copyColor(color: string) {
    this.clipboard.copy(color);
    this.snackBar.open(`Color ${color} copiado al portapapeles`, 'Cerrar', {
      duration: 2000,
    });
  }
}
