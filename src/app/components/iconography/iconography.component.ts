import { Component } from '@angular/core';

@Component({
  selector: 'app-iconography',
  template: `
    <div class="icon-section">
      <h2>Iconografía</h2>

      <h3>Iconos de Navegación</h3>
      <div class="icon-grid">
        <div
          class="icon-card"
          *ngFor="let icon of navigationIcons"
          [class.dark-mode]="icon.isDark"
          (click)="toggleTheme(icon)"
        >
          <div class="icon-preview">
            <mat-icon>{{ icon.name }}</mat-icon>
          </div>
          <div class="icon-info">
            <span class="icon-name">{{ icon.label }}</span>
            <span class="icon-value">{{ icon.name }}</span>
          </div>
        </div>
      </div>

      <h3>Iconos de Acción</h3>
      <div class="icon-grid">
        <div
          class="icon-card"
          *ngFor="let icon of actionIcons"
          [class.dark-mode]="icon.isDark"
          (click)="toggleTheme(icon)"
        >
          <div class="icon-preview">
            <mat-icon>{{ icon.name }}</mat-icon>
          </div>
          <div class="icon-info">
            <span class="icon-name">{{ icon.label }}</span>
            <span class="icon-value">{{ icon.name }}</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .icon-section {
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

      .icon-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 1rem;
      }

      .icon-card {
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        padding: 1rem;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .icon-card.dark-mode {
        background: #2d2927;
      }

      .icon-preview {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
      }

      .icon-preview mat-icon {
        font-size: 32px;
        width: 32px;
        height: 32px;
        color: #2c3e50;
        transition: color 0.3s ease;
      }

      .dark-mode .icon-preview mat-icon {
        color: #ff9800;
      }

      .icon-info {
        text-align: center;
      }

      .icon-name {
        display: block;
        font-weight: 500;
        margin-bottom: 0.5rem;
        color: #2c3e50;
        transition: color 0.3s ease;
      }

      .dark-mode .icon-name {
        color: white;
      }

      .icon-value {
        font-family: monospace;
        font-size: 0.9rem;
        color: #6c757d;
        transition: color 0.3s ease;
      }

      .dark-mode .icon-value {
        color: #ff9800;
      }
    `,
  ],
})
export class IconographyComponent {
  navigationIcons = [
    { name: 'shopping_cart', label: 'Ventas', isDark: false },
    { name: 'cookie', label: 'Galletas', isDark: false },
    { name: 'factory', label: 'Produccion', isDark: false },
  ];

  actionIcons = [
    { name: 'chevron_left', label: 'Colapsar', isDark: false },
    { name: 'chevron_right', label: 'Desplegar', isDark: false },
    { name: 'arrow_upward', label: 'Ordenar ascendente', isDark: false },
    { name: 'arrow_downward', label: 'Ordenar descendente', isDark: false },
    { name: 'arrow_drop_down', label: 'Desplegar menú', isDark: false },
    { name: 'arrow_drop_up', label: 'Colapsar menú', isDark: false },
    { name: 'first_page', label: 'Primera página', isDark: false },
    { name: 'last_page', label: 'Última página', isDark: false },
  ];

  toggleTheme(icon: any) {
    icon.isDark = !icon.isDark;
  }
}
