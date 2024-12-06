import { Component } from '@angular/core';

@Component({
  selector: 'app-components',
  template: `
    <div class="components-section">
      <h2>Componentes</h2>

      <section>
        <h3>Botones</h3>
        <div class="component-demo">
          <button mat-flat-button class="custom-button">Botón Principal</button>
          <button mat-flat-button class="custom-button" disabled>
            Botón Deshabilitado
          </button>
          <div class="code-preview">
            <pre><code>{{buttonCode}}</code></pre>
          </div>
        </div>
      </section>

      <section>
        <h3>Badges de Estado</h3>
        <div class="component-demo">
          <span class="status-badge status-existencia">Existencia</span>
          <span class="status-badge status-agotado">Agotado</span>
          <div class="code-preview">
            <pre><code>{{badgeCode}}</code></pre>
          </div>
        </div>
      </section>

      <section>
        <h3>Cards</h3>
        <div class="component-demo">
          <div class="demo-card">
            <h4>Título de Card</h4>
            <p>Contenido de ejemplo para la card</p>
          </div>
          <div class="code-preview">
            <pre><code>{{cardCode}}</code></pre>
          </div>
        </div>
      </section>

      <section>
        <h3>Tabla Moderna</h3>
        <div class="component-demo">
          <table class="modern-table">
            <thead>
              <tr>
                <th>Encabezado 1</th>
                <th>Encabezado 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Contenido 1</td>
                <td>Contenido 2</td>
              </tr>
            </tbody>
          </table>
          <div class="code-preview">
            <pre><code>{{tableCode}}</code></pre>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      .components-section {
        padding: 2rem;
      }

      section {
        margin-bottom: 3rem;
      }

      h3 {
        margin-bottom: 1.5rem;
        color: #2c3e50;
      }

      .component-demo {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      }

      .custom-button {
        background-color: #ff9800 !important;
        color: white !important;
        padding: 0.5rem 2rem;
        margin-right: 1rem;
      }

      .custom-button:hover:not([disabled]) {
        background-color: #ffa726 !important;
      }

      .custom-button[disabled] {
        background-color: rgba(255, 152, 0, 0.3) !important;
        color: rgba(255, 255, 255, 0.5) !important;
      }

      .status-badge {
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
        font-size: 0.75rem;
        font-weight: 500;
        margin-right: 1rem;
      }

      .status-existencia {
        background: #def7ec;
        color: #046c4e;
      }

      .status-agotado {
        background: #fde8e8;
        color: #c81e1e;
      }

      .demo-card {
        background: white;
        border-radius: 12px;
        padding: 1.5rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        max-width: 300px;
      }

      .modern-table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0 0.5rem;
      }

      .modern-table th {
        color: #4a5568;
        font-weight: 600;
        font-size: 0.875rem;
        padding: 1rem;
        background: #f7fafc;
        border: none;
        text-align: left;
      }

      .modern-table td {
        padding: 1rem;
        border: none;
        font-size: 0.875rem;
        background: white;
      }

      .code-preview {
        margin-top: 1.5rem;
        background: #f8f9fa;
        padding: 1rem;
        border-radius: 4px;
        overflow-x: auto;
      }

      pre {
        margin: 0;
      }

      code {
        font-family: 'Courier New', Courier, monospace;
        font-size: 0.875rem;
      }
    `,
  ],
})
export class ComponentsComponent {
  buttonCode = `.custom-button {
  background-color: #ff9800;
  color: white;
  padding: 0.5rem 2rem;
  font-weight: 500;
}

.custom-button:hover:not([disabled]) {
  background-color: #ffa726;
}

.custom-button[disabled] {
  background-color: rgba(255, 152, 0, 0.3);
  color: rgba(255, 255, 255, 0.5);
}`;

  badgeCode = `.status-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.status-existencia {
  background: #def7ec;
  color: #046c4e;
}

.status-agotado {
  background: #fde8e8;
  color: #c81e1e;
}`;

  cardCode = `.card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}`;

  tableCode = `.modern-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
}

.modern-table th {
  color: #4a5568;
  font-weight: 600;
  font-size: 0.875rem;
  padding: 1rem;
  background: #f7fafc;
  border: none;
}

.modern-table td {
  padding: 1rem;
  border: none;
  font-size: 0.875rem;
}`;
}
