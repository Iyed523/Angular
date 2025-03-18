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
    
  ],
  providers: [provideNativeDateAdapter()],
  bootstrap: [AppComponent]
})
export class AppModule { }