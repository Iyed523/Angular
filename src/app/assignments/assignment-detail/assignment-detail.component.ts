import { Component,Input,OnInit,Output,EventEmitter } from '@angular/core';
import { Assignment } from '../assignment.model';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
@Component({
  selector: 'app-assignment-detail',
  imports: [CommonModule,MatCardModule,MatCheckboxModule],
  templateUrl: './assignment-detail.component.html',
  styleUrl: './assignment-detail.component.css'
})
export class AssignmentDetailComponent {
  @Input() assignmentTransmis!: Assignment; // Déclarer la propriété @Input()
  @Output() deleteAssignment = new EventEmitter<Assignment>();
  
  constructor() { }
  ngOnInit(): void {
  }

  onDelete(){
    this.deleteAssignment.emit(this.assignmentTransmis);
  }

  
}
