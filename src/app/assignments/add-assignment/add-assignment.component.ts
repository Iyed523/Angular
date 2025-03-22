import { Component,EventEmitter,OnInit,Output} from '@angular/core';
import { Assignment } from '../assignment.model';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { CommonModule } from '@angular/common'; 

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { AssignmentsService } from '../../assignments.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-assignment',
  imports: [MatDatepickerModule,FormsModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatListModule,CommonModule],
  templateUrl: './add-assignment.component.html',
  styleUrl: './add-assignment.component.css'
})
export class AddAssignmentComponent implements OnInit {
  //@Output() nouvelAssignment = new EventEmitter<Assignment>();
  nomDevoir:string="";
  dateRendu: Date = new Date();
  ajouteActive = false;

  constructor(private assignmentsService: AssignmentsService,    
    private router: Router) {}

  ngOnInit():void{
    setTimeout(() => {
      this.ajouteActive = true;
    }, 2000);
  }

  onSubmit() {
    const newAssignment = new Assignment();
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateDeRendu = this.dateRendu;
    newAssignment.rendu = false;
    
    this.assignmentsService.addAssignment(newAssignment).subscribe(() => {
      // Redirigez l'utilisateur vers la liste des assignments après l'ajout
      this.router.navigate(['/home']);
    });
    //this.nouvelAssignment.emit(newAssignment);

  }

  



}
