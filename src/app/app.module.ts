import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './angular-material/material.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path:'dashboard', component:DashboardComponent
    
      },
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
      
      
    ])
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
