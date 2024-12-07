import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorPaletteComponent } from './components/color-palette/color-palette.component';
import { TypographyComponent } from './components/typography/typography.component';
import { SpacingComponent } from './components/spacing/spacing.component';
import { ComponentsComponent } from './components/components/components.component';
import { ShadowsComponent } from './components/shadows/shadows.component';
import { IconographyComponent } from './components/iconography/iconography.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorPaletteComponent,
    TypographyComponent,
    SpacingComponent,
    ComponentsComponent,
    ShadowsComponent,
    IconographyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    ClipboardModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatRadioModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatChipsModule,
    DragDropModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
