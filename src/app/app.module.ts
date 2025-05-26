import { NgModule } from '@angular/core';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';  
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; 
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';

import { MatListModule } from '@angular/material/list';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import{AddAssignmentComponent} from './assignments/add-assignment/add-assignment.component';

import { AssignmentsComponent } from './assignments/assignments.component';
import { RenduDirective } from './assignments/rendu.directive';
import { NonrenduDirective } from './assignments/nonrendu.directive';
import { FormsModule } from '@angular/forms';  
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LoginComponent } from './assignments/login/login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';







@NgModule({
  declarations: [
    AppComponent,
    AssignmentDetailComponent,
    AddAssignmentComponent,
    AssignmentsComponent,
    RenduDirective,
    NonrenduDirective,


  ],
 
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatDividerModule,
    MatListModule,
    RouterModule.forRoot(routes),// Configurez les routes ici
    MatSlideToggleModule,
    LoginComponent,
    MatToolbarModule,
    MatSidenavModule,
    HttpClientModule

    

  ],
  providers: [provideNativeDateAdapter()],
  bootstrap: [AppComponent]
})
export class AppModule { }