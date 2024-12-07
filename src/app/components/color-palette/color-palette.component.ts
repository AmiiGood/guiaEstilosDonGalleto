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

      <h3>Colores de UI</h3>
      <div class="color-grid">
        <div class="color-card" *ngFor="let color of uiColors">
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
    { name: 'Hover Light Orange', value: '#ffa726' },
    { name: 'Hover Dark Orange', value: '#f57c00' },
    { name: 'Dark Background', value: '#2d2927' },
    { name: 'Snackbar Background', value: '#333333' },
  ];

  textColors = [
    { name: 'Primary Text', value: '#2c3e50' },
    { name: 'Secondary Text', value: '#6c757d' },
    { name: 'Menu Text Light', value: '#d6d3d1' },
    { name: 'Menu Icon', value: '#a8a29e' },
    { name: 'Table Header', value: '#4a5568' },
    { name: 'Detail Header', value: '#2d3748' },
    { name: 'Count Icon', value: '#718096' },
    { name: 'Units Info', value: '#666' },
    { name: 'Success Text', value: '#046c4e' },
    { name: 'Warning Text', value: '#c27803' },
    { name: 'Danger Text', value: '#c81e1e' },
    { name: 'Delete Action', value: '#ff4444' },
    { name: 'White Text', value: '#ffffff' },
    {name: 'Snackbar Text', value: '#ff4081'},
  ];

  statusColors = [
    { name: 'Preparación', value: '#818cf8' },
    { name: 'Horneado', value: '#fb923c' },
    { name: 'Enfriamiento', value: '#38bdf8' },
    { name: 'Lista', value: '#4ade80' },
  ];

  uiColors = [
    { name: 'Background Light', value: '#f8f9fa' },
    { name: 'Table Header BG', value: '#f7fafc' },
    { name: 'Border Light', value: '#e9ecef' },
    { name: 'Table Border', value: '#e2e8f0' },
    { name: 'Border Dark', value: '#cbd5e1' },
    { name: 'Placeholder Text', value: '#94a3b8' },
  ];

  constructor(private clipboard: Clipboard, private snackBar: MatSnackBar) {}

  copyColor(color: string) {
    this.clipboard.copy(color);
    this.snackBar.open(`Color ${color} copiado al portapapeles`, 'Cerrar', {
      duration: 2000,
    });
  }
}
