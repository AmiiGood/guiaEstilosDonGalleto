import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css'],
})
export class ComponentsComponent {
  displayedColumns = [
    'select',
    'name',
    'description',
    'stock',
    'status',
    'price',
  ];

  cookies = [
    {
      name: 'Galleta Chocolate',
      description: 'Galleta de chocolate con chips',
      stock: 150,
      stockClass: 'stock-high',
      status: 'Existencia',
      statusClass: 'status-existencia',
      prices: {
        unit: 2,
        medium: 8,
        large: 15,
      },
    },
    {
      name: 'Galleta Vainilla',
      description: 'Galleta clásica de vainilla',
      stock: 5,
      stockClass: 'stock-low',
      status: 'Agotado',
      statusClass: 'status-agotado',
      prices: {
        unit: 1.5,
        medium: 7,
        large: 13,
      },
    },
  ];

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

  tableCode = `<!-- Estructura de la tabla -->
<table mat-table [dataSource]="dataSource" class="modern-table">
  <!-- Columna de radio button -->
  <ng-container matColumnDef="select">
    <th mat-header-cell *matHeaderCellDef>Seleccionar</th>
    <td mat-cell *matCellDef="let element">
      <mat-radio-button color="accent"></mat-radio-button>
    </td>
  </ng-container>
  
  <!-- Otras columnas... -->
  
  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
</table>`;

  paginatorCode = `<!-- HTML -->
<mat-paginator 
  [length]="100"
  [pageSize]="5"
  [pageSizeOptions]="[5, 10, 25]"
  aria-label="Select page">
</mat-paginator>

<!-- Styles -->
:host ::ng-deep .mat-paginator {
  background: transparent;
}

<!-- Module Import -->
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [
    MatPaginatorModule,
    // ...
  ]
})`;

  dragDropCode = `.stage-list {
  min-height: 400px;
  border-radius: 8px;
  padding: 16px;
  border: 3px dashed #cbd5e1;
  background: linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}

.stage-item {
  background: white;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  cursor: move;
  transition: transform 0.2s, box-shadow 0.2s;
}

.stage-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* Estado de las listas */
#preparacion:not(:empty) { border-color: #818cf8; }
#horneado:not(:empty) { border-color: #fb923c; }
#enfriamiento:not(:empty) { border-color: #38bdf8; }
#lista:not(:empty) { border-color: #4ade80; }

/* Estilos responsivos */
@media (max-width: 1200px) {
  .stages-container {
    flex-wrap: wrap;
  }
  .stage {
    flex: 0 0 calc(50% - 12px);
  }
}`;

  snackbarCode = `// Component
import { MatSnackBar } from '@angular/material/snack-bar';

export class YourComponent {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom'
    });
  }
}

// Module Import
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    MatSnackBarModule,
    // ...
  ]
})`;

  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      panelClass: 'mat-snack-bar-container',
      duration: 3000,
    });
  }
}
