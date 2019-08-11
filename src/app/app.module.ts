import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import {
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatMenuModule,
  MatSelectModule,
  MatDialogModule,
  MatTableModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatAutocompleteModule,
  MatTooltipModule,
  MatTabsModule,
  MatSortModule,
  MatPaginatorModule,
  MatButtonToggleModule

} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TrackerComponent } from './components/tracker/tracker.component';
import { GetLocationService } from './get-location.service';
import { AgmCoreModule } from '@agm/core';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA6xntAjDU2ipRJBY9_q3Wwaazg6c73-gI'
    }),
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatTabsModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [GetLocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
