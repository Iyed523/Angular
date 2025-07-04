import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { OnInit } from '@angular/core';
import { RenduDirective } from './rendu.directive';
import { NonrenduDirective } from './nonrendu.directive';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Assignment } from './assignment.model';
import { provideNativeDateAdapter } from '@angular/material/core';
import{AssignmentDetailComponent} from './assignment-detail/assignment-detail.component';
import { MatListModule } from '@angular/material/list';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';
import {AssignmentsService} from '../assignments.service';
import { RouterLink } from '@angular/router';
import {EditAssignmentComponent} from './edit-assignment/edit-assignment.component';
import { LoginComponent } from './login/login.component';
@Component({
  selector: 'app-assignments',
  imports: [CommonModule,RenduDirective,NonrenduDirective,FormsModule, 
    MatButtonModule, MatInputModule, MatDatepickerModule, MatFormFieldModule,MatListModule,RouterLink,EditAssignmentComponent,LoginComponent 
  ],
  providers: [provideNativeDateAdapter()], // Ajoutez cette ligne
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})


export class AssignmentsComponent implements OnInit {
  titre = "Mon application sur les Assignments !"
  ajouteActive = false;
  nomDevoir:string="";
  dateRendu: Date = new Date();
  assignmentSelectionne!:Assignment;
  formVisible = false;
  //id=0;

  // Déclarer la propriété sans initialisation
  assignments!: Assignment[];
  page: number = 1;
  limit: number = 20;
  totalPages: number = 1;
  

  // Initialiser dans le constructeur
  constructor(private assignmentsService: AssignmentsService) {}

 

  
  ngOnInit():void{
    //this.assignments = this.assignmentsService.getAssignments();    
    this.getAssignments();

    setTimeout(() => {
      this.ajouteActive = true;
    }, 2000);
  }

  getAssignments() {
  this.assignmentsService.getAssignments(this.page, this.limit)
    .subscribe(data => {
      this.assignments = data.assignments;
      this.totalPages = data.totalPages;
    });
}

  onSubmit() {
    const newAssignment = new Assignment();
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateDeRendu = this.dateRendu;
    newAssignment.rendu = false;
    //newAssignment.id = this.id++;
    
    //this.assignments.push(newAssignment);
    this.assignmentsService.addAssignment(newAssignment);


  }

  assignmentClique(assignment:Assignment){
    this.assignmentSelectionne = assignment;
  }

  onDeleteAssignment(assignment: Assignment) {
    this.assignmentsService.deleteAssignment(assignment).subscribe((message) => {
      console.log(message); 
  
      this.assignments = this.assignments.filter(a => a !== assignment);
  
      this.assignmentSelectionne = null!;
    });
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.getAssignments();
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.getAssignments();
    }
  }

 
 
  

  getColor(a:any){
    if(a.rendu){
      return 'green';
    }else{
      return 'red';
    }
  }

  

  onAddAssignmentBtnClick() {
    //this.formVisible = true;
  }
 /* 
  onNouvelAssignment(event:Assignment) {
    this.assignmentsService.addAssignment(event).subscribe(message => console.log(message));
    this.formVisible = false;

    this.assignments.push(event);

  }
    */
   
}




