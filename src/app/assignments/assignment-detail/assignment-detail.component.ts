import { Component,Input,OnInit,Output,EventEmitter } from '@angular/core';
import { Assignment } from '../assignment.model';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AssignmentsService } from '../../assignments.service';
import { FormsModule } from '@angular/forms';  

@Component({
  selector: 'app-assignment-detail',
  imports: [CommonModule,MatCardModule,MatCheckboxModule,FormsModule],
  templateUrl: './assignment-detail.component.html',
  styleUrl: './assignment-detail.component.css'
})
export class AssignmentDetailComponent {
  @Input() assignmentTransmis: Assignment; // Déclarer la propriété @Input()
  @Output() deleteAssignment = new EventEmitter<Assignment>();
  
  constructor(private assignmentsService: AssignmentsService) {
    this.assignmentTransmis = {
      nom: '',
      dateDeRendu: new Date(),
      rendu: false
    };
  }  ngOnInit(): void {
  }

  onCheckboxChange() {
    this.assignmentsService.updateAssignment(this.assignmentTransmis).subscribe((message) => {
      console.log(message); // Afficher le message de confirmation
    });
  }

  onDelete(){
    this.assignmentsService.deleteAssignment(this.assignmentTransmis).subscribe((message) => {
      console.log(message);
    });
    
    this.deleteAssignment.emit(this.assignmentTransmis);
  }

  
}
