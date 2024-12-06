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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorPaletteComponent } from './components/color-palette/color-palette.component';
import { TypographyComponent } from './components/typography/typography.component';
import { SpacingComponent } from './components/spacing/spacing.component';
import { ComponentsComponent } from './components/components/components.component';
import { ShadowsComponent } from './components/shadows/shadows.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorPaletteComponent,
    TypographyComponent,
    SpacingComponent,
    ComponentsComponent,
    ShadowsComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
