import { Component } from '@angular/core';

@Component({
  selector: 'app-shadows',
  template: `
    <div class="shadows-section">
      <h2>Sistema de Sombras</h2>

      <div class="shadow-grid">
        <div class="shadow-example" *ngFor="let shadow of shadows">
          <div class="shadow-box" [style.box-shadow]="shadow.value">
            <h4>{{ shadow.name }}</h4>
            <p>{{ shadow.description }}</p>
          </div>
          <div class="shadow-code">
            <code>box-shadow: {{ shadow.value }};</code>
          </div>
        </div>
      </div>

      <div class="shadow-usage">
        <h3>Uso Recomendado</h3>
        <ul>
          <li>
            <strong>Nivel 1 (Sutil):</strong> Para elementos secundarios, cards
            en estado normal
          </li>
          <li>
            <strong>Nivel 2 (Medio):</strong> Para elementos principales, cards
            en hover
          </li>
          <li>
            <strong>Nivel 3 (Pronunciado):</strong> Para elementos elevados,
            modales, dropdowns
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [
    `
      .shadows-section {
        padding: 2rem;
      }

      .shadow-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2rem;
        margin: 2rem 0;
      }

      .shadow-example {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .shadow-box {
        background: white;
        border-radius: 8px;
        padding: 1.5rem;
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      }

      .shadow-box h4 {
        margin: 0 0 0.5rem;
        color: #2c3e50;
      }

      .shadow-box p {
        margin: 0;
        color: #6c757d;
      }

      .shadow-code {
        background: #f8f9fa;
        padding: 1rem;
        border-radius: 4px;
        font-family: 'Courier New', monospace;
        font-size: 0.875rem;
      }

      .shadow-usage {
        margin-top: 3rem;
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      }

      .shadow-usage h3 {
        margin-top: 0;
        color: #2c3e50;
      }

      .shadow-usage ul {
        list-style-type: none;
        padding: 0;
      }

      .shadow-usage li {
        margin: 1rem 0;
        color: #6c757d;
      }

      .shadow-usage strong {
        color: #2c3e50;
      }
    `,
  ],
})
export class ShadowsComponent {
  shadows = [
    {
      name: 'Nivel 1 - Sutil',
      value: '0 1px 3px rgba(0, 0, 0, 0.05)',
      description: 'Para elementos sutiles y estados normales',
    },
    {
      name: 'Nivel 2 - Medio',
      value: '0 2px 4px rgba(0, 0, 0, 0.05)',
      description: 'Para elementos con mayor importancia visual',
    },
    {
      name: 'Nivel 3 - Pronunciado',
      value: '0 4px 6px rgba(0, 0, 0, 0.1)',
      description: 'Para elementos destacados y estados hover',
    },
  ];
}
