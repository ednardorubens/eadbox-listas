import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatMenuModule,
  MatTableModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';

import { CursosComponent } from './cursos.component';
import { EadboxApiService } from '../eadbox-api.service';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    NoopAnimationsModule
  ],
  providers: [{provide: 'eadbox-api', useClass: EadboxApiService}],
  bootstrap: [CursosComponent]
})
export class CursosModule { }
