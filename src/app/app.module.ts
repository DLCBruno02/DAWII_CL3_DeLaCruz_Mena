import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './angular-material/material.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './dashboard/usuario/usuario.component';
import { EmpresaComponent } from './dashboard/empresa/empresa.component';
import { ClasificacionesComponent } from './dashboard/clasificaciones/clasificaciones.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsuarioComponent,
    EmpresaComponent,
    ClasificacionesComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'dashboard', component:DashboardComponent,
        children:[
          {path:'usuario',component:UsuarioComponent},
          {path:'empresa',component:EmpresaComponent},
          {path:'clasificaciones',component:ClasificacionesComponent}

        ]
    
      },
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
      
      
    ])
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
