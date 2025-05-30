import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Assignment } from '../assignment.model';
import {AssignmentsService} from '../../assignments.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
 selector: 'app-edit-assignment',
 standalone: true,
 providers: [provideNativeDateAdapter()],
 imports: [
   FormsModule,
   MatInputModule,
   MatFormFieldModule,
   MatDatepickerModule,
   MatButtonModule,
 ],
 templateUrl: './edit-assignment.component.html',
 styleUrl: './edit-assignment.component.css',
})

export class EditAssignmentComponent {
  assignment: Assignment | undefined;
  // Pour les champs de formulaire
  nomAssignment = '';
  dateDeRendu?: Date = undefined;
  assignmentTransmis!: Assignment;

 
  constructor(
    private assignmentsService: AssignmentsService,
    private router: Router,
    private route: ActivatedRoute 
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID de l'assignment depuis l'URL
    const id = this.route.snapshot.params['id'];
    if (!id || isNaN(+id)) {
    console.error("Paramètre ID invalide ou manquant :", id);
    console.log("ID récupéré:", id); // Pour vérifier que c'est bien défini

    return;
  }
    this.assignmentsService.getAssignment(id).subscribe((assignment) => {
      if (assignment) {
        this.assignment = assignment;
        this.nomAssignment = assignment.nom; // Initialiser le champ "nom"
        this.dateDeRendu = assignment.dateDeRendu; // Initialiser le champ "date de rendu"
      } 
    });

    //this.getAssignment();
    console.log("Query Params :");
    console.log(this.route.snapshot.queryParams);
    console.log("Fragment :");
    console.log(this.route.snapshot.fragment);
  }
 
  onSaveAssignment() {
    if (!this.assignment) return;
    if (this.nomAssignment == '' || this.dateDeRendu === undefined) return;
 
    // on récupère les valeurs dans le formulaire
    this.assignment.nom = this.nomAssignment;
    this.assignment.dateDeRendu = this.dateDeRendu;
    this.assignmentsService
      .updateAssignment(this.assignment)
      .subscribe((message) => {
        console.log(message);
 
        // navigation vers la home page
        this.router.navigate(['/home']);
      });
  }

  getAssignment(): void {
    const id = +this.route.snapshot.params['id'];    

    this.assignmentsService.getAssignment(id).subscribe((assignment) => {
      if (assignment) {
        this.assignment = assignment;
        this.nomAssignment = assignment.nom; // Initialiser le champ "nom"
        this.dateDeRendu = assignment.dateDeRendu; // Initialiser le champ "date de rendu"
      } 
    });
  }
 
}
 
 
 