import { Component } from '@angular/core';

@Component({
  selector: 'app-typography',
  template: `
    <div class="typography-section">
      <h2>Tipografía</h2>

      <div class="type-examples">
        <mat-card *ngFor="let type of typeStyles" class="type-card">
          <div class="type-preview" [style.fontSize]="type.size"
               [style.fontWeight]="type.weight">
            Texto de ejemplo
          </div>
          <div class="type-info">
            <h4>{{type.name}}</h4>
            <p>Tamaño: {{type.size}}</p>
            <p>Peso: {{type.weight}}</p>
          </div>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .type-card{
      background-color: #f8f9fa;
      padding: 1rem;
    }

    .typography-section {
      padding: 2rem;
    }

    .type-examples {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1rem;
      margin-top: 2rem;
    }

    .type-preview {
      padding: 1rem;
      border-bottom: 1px solid #eee;
      margin-bottom: 1rem;
    }

    .type-info h4 {
      margin: 0 0 0.5rem;
      color: #2c3e50;
    }

    .type-info p {
      margin: 0.25rem 0;
      color: #6c757d;
    }
  `]
})
export class TypographyComponent {
  typeStyles = [
    { name: 'Título Grande', size: '1.5rem', weight: '600' },
    { name: 'Título Sección', size: '1.25rem', weight: '500' },
    { name: 'Texto Regular', size: '0.875rem', weight: '400' },
    { name: 'Texto Pequeño', size: '0.75rem', weight: '400' },
    { name: 'Menú', size: '14px', weight: '500' }
  ];
}