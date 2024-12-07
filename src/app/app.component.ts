import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="style-guide-container">
      <header class="style-guide-header">
        <h1>Guía de Estilos: Don Galleto</h1>
        <p>Una guía interactiva de estilos para el proyecto final</p>
        <p>de Experiencia de Usuario</p>
      </header>

      <mat-tab-group
        animationDuration="200ms"
        class="style-guide-tabs custom-tabs"
        [color]="'primary'"
        [backgroundColor]="'primary'"
      >
        <mat-tab label="Colores">
          <app-color-palette></app-color-palette>
        </mat-tab>
        <mat-tab label="Tipografía">
          <app-typography></app-typography>
        </mat-tab>
        <mat-tab label="Iconografía">
          <app-iconography></app-iconography>
        </mat-tab>
        <mat-tab label="Espaciado">
          <app-spacing></app-spacing>
        </mat-tab>
        <mat-tab label="Componentes">
          <app-components></app-components>
        </mat-tab>
        <mat-tab label="Sombras">
          <app-shadows></app-shadows>
        </mat-tab>
      </mat-tab-group>

      <!-- Footer Interactivo -->
      <footer class="team-footer">
        <div class="team-container">
          <h3>Nuestro Equipo</h3>
          <div class="team-members">
            <div
              class="member-card"
              *ngFor="let member of teamMembers"
              (mouseenter)="member.showInfo = true"
              (mouseleave)="member.showInfo = false"
            >
              <div class="member-avatar">
                <mat-icon>person</mat-icon>
              </div>
              <div class="member-info" [class.show-info]="member.showInfo">
                <h4>{{ member.name }}</h4>
              </div>
            </div>
          </div>
          <p class="group-info">Grupo: {{ groupNumber }}</p>
        </div>
      </footer>
    </div>
  `,
  styles: [
    `
      .style-guide-container {
        padding: 2rem;
        max-width: 1200px;
        margin: 0 auto;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }
      .style-guide-header {
        text-align: center;
        margin-bottom: 3rem;
      }
      .style-guide-header h1 {
        font-size: 2.5rem;
        color: #2c3e50;
        margin-bottom: 1rem;
      }
      .style-guide-header p {
        font-size: 1.2rem;
        color: #6c757d;
      }
      .style-guide-tabs {
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        margin-bottom: 2rem;
      }

      /* Estilos del Footer */
      .team-footer {
        margin-top: auto;
        padding: 2rem 0;
        background-color: #f8f9fa;
        border-top: 1px solid #dee2e6;
        border-radius: 0 0 8px 8px;
      }

      .team-container {
        text-align: center;
      }

      .team-container h3 {
        color: #2c3e50;
        margin-bottom: 1.5rem;
        font-size: 1.5rem;
      }

      .team-members {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1.5rem;
        margin-bottom: 1rem;
      }

      .member-card {
        position: relative;
        width: 80px;
        cursor: pointer;
        transition: transform 0.3s ease;
      }

      .member-card:hover {
        transform: translateY(-5px);
      }

      .member-avatar {
        width: 60px;
        height: 60px;
        background-color: #ff9800;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
      }

      .member-avatar mat-icon {
        color: white;
        font-size: 30px;
        width: 30px;
        height: 30px;
      }

      .member-info {
        position: absolute;
        bottom: -70px;
        left: 50%;
        transform: translateX(-50%);
        background-color: white;
        padding: 0.5rem;
        border-radius: 4px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        opacity: 0;
        transition: opacity 0.3s ease;
        width: 120px;
        pointer-events: none;
      }

      .member-info.show-info {
        opacity: 1;
      }

      .member-info h4 {
        margin: 0;
        color: #2c3e50;
        font-size: 0.9rem;
      }

      .member-info p {
        margin: 0.2rem 0 0;
        color: #6c757d;
        font-size: 0.8rem;
      }

      .group-info {
        margin-top: 2rem;
        color: #6c757d;
        font-size: 1rem;
      }

      :host
        ::ng-deep
        .custom-tabs
        .mat-mdc-tab:not(.mat-mdc-tab-disabled)
        .mdc-tab__text-label {
        color: #2c3e50;
      }
      :host ::ng-deep .custom-tabs .mat-mdc-tab-header {
        --mdc-secondary-navigation-tab-container-height: 48px;
      }
      :host
        ::ng-deep
        .custom-tabs
        .mat-mdc-tab:not(.mat-mdc-tab-disabled).mdc-tab--active
        .mdc-tab__text-label {
        color: #ff9800;
      }
      :host ::ng-deep .custom-tabs .mat-mdc-tab-header .mat-mdc-tab-labels {
        background: white;
      }
      :host
        ::ng-deep
        .custom-tabs
        .mat-mdc-tab
        .mdc-tab-indicator__content--underline {
        border-color: #ff9800;
      }
      :host ::ng-deep .custom-tabs .mat-mdc-tab-header {
        border-bottom: 1px solid #dee2e6;
      }
    `,
  ],
})
export class AppComponent {
  groupNumber = 'IDGS703';

  teamMembers = [
    { name: 'Kevin Alexis Ramos Alvarez', showInfo: false },
    { name: 'Héctor Eduardo Balderas Sánchez', showInfo: false },
    { name: 'Sergio Esteban Vázquez Rizo', showInfo: false },
    { name: 'Juan Diego Cortez Gonzáles', showInfo: false },
    { name: 'Aaron Hernán Rocha Rodriguez', showInfo: false },
  ];
}
