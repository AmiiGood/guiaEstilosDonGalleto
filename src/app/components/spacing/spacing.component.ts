import { Component } from '@angular/core';

@Component({
  selector: 'app-spacing',
  template: `
    <div class="spacing-section">
      <h2>Sistema de Espaciado</h2>

      <h3>Padding</h3>
      <div class="spacing-grid">
        <div class="spacing-example" *ngFor="let space of paddingSpaces">
          <div class="space-box" [style.padding]="space.value">
            <div class="inner-box"></div>
          </div>
          <div class="space-info">
            <h4>{{ space.name }}</h4>
            <p>{{ space.value }}</p>
          </div>
        </div>
      </div>

      <h3>Margin</h3>
      <div class="spacing-grid">
        <div class="spacing-example" *ngFor="let space of marginSpaces">
          <div class="margin-box">
            <div class="inner-box" [style.margin]="space.value"></div>
          </div>
          <div class="space-info">
            <h4>{{ space.name }}</h4>
            <p>{{ space.value }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .spacing-section {
        padding: 2rem;
      }

      .spacing-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 2rem;
        margin: 2rem 0;
      }

      .spacing-example {
        background: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      }

      .space-box,
      .margin-box {
        background: #f8f9fa;
        border: 1px dashed #dee2e6;
      }

      .inner-box {
        background: #ff9800;
        height: 50px;
        width: 100%;
      }

      .space-info {
        padding: 1rem;
      }

      .space-info h4 {
        margin: 0 0 0.5rem;
        color: #2c3e50;
      }

      .space-info p {
        margin: 0;
        color: #6c757d;
        font-family: monospace;
      }
    `,
  ],
})
export class SpacingComponent {
  paddingSpaces = [
    { name: 'Container Large', value: '2rem' },
    { name: 'Container Medium', value: '1.5rem' },
    { name: 'Container Small', value: '1rem' },
    { name: 'Element Large', value: '1rem' },
    { name: 'Element Medium', value: '0.75rem' },
    { name: 'Element Small', value: '0.5rem' },
  ];

  marginSpaces = [
    { name: 'Section Spacing', value: '1.5rem' },
    { name: 'Element Spacing', value: '1rem' },
    { name: 'Compact Spacing', value: '0.5rem' },
  ];
}
