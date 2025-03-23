import { Component,Input,OnInit,Output,EventEmitter } from '@angular/core';
import { Assignment } from '../assignment.model';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AssignmentsService } from '../../assignments.service';
import { FormsModule } from '@angular/forms';  
import { ActivatedRoute,Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-assignment-detail',
  imports: [CommonModule,MatCardModule,MatCheckboxModule,FormsModule,MatFormFieldModule],
  templateUrl: './assignment-detail.component.html',
  styleUrl: './assignment-detail.component.css'
})
export class AssignmentDetailComponent {
 /*@Input()*/ assignmentTransmis!: Assignment; // Déclarer la propriété @Input()
  @Output() deleteAssignment = new EventEmitter<Assignment>();
  
  constructor(private assignmentsService: AssignmentsService,private route: ActivatedRoute,
    private router: Router, private authService: AuthService ) {}  
  ngOnInit(): void {
    this.getAssignment ();
  }

  onCheckboxChange() {
    this.assignmentsService.updateAssignment(this.assignmentTransmis).subscribe((message) => {
      console.log(message); // Afficher le message de confirmation
    });
    this.router.navigate(['/home']);
  }

  onDelete(){
    this.assignmentsService.deleteAssignment(this.assignmentTransmis).subscribe((message) => {
      console.log(message);
    });
    
    this.deleteAssignment.emit(this.assignmentTransmis);
    this.router.navigate(['/home']);
  }
    

  getAssignment() {
    const id = +this.route.snapshot.params['id']; // Récupérer l'ID de l'URL
    this.assignmentsService.getAssignment(id).subscribe((assignment) => {
      if (assignment) {
        this.assignmentTransmis = assignment; // Assigner seulement si assignment est défini
      } else {
        console.error('Assignment non trouvé'); // Gérer le cas où assignment est undefined
      }
    });
  }

  onClickEdit() {
    this.router.navigate(["/assignment", this.assignmentTransmis.id, "edit"],
      {queryParams: {nom: this.assignmentTransmis.nom,fragment: 'edition'}}
    );
  }

  isAdmin(): boolean {
    return this.authService.isAdmin(); // Utilisez la méthode isAdmin() du service
  }

  isLogged(): boolean {
    return this.authService.isLogged(); // Utilisez la méthode isLogged() du service
  }
  
}
