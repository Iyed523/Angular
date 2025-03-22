import { Injectable } from '@angular/core';
import { Assignment } from './assignments/assignment.model';
import { Observable,of  } from 'rxjs';
import { LoggingService } from './logging.service';



@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  assignments: Assignment[] = [
    {
      id:1,
      nom: 'TP1 sur WebComponents, un lecteur audio amélioré',
      dateDeRendu: new Date('2021-03-01'),
      rendu: true
    },
    {
      id:2,
      nom: 'TP2 sur Angular, un joli gestionnaire de devoirs (Asseingments)',
      dateDeRendu: new Date('2021-03-15'),
      rendu: false
    },
    {
      id:3,
      nom: 'TP3 sur Angular, utilisation duu router et de ',
      dateDeRendu: new Date('2021-03-15'),
      rendu: false
    }
  ];

  constructor(private loggingService:LoggingService) {}

  // Récupérer tous les assignments
  getAssignments(): Observable<Assignment[]> {
    return of(this.assignments);
  }

  getAssignment(id:number):Observable<Assignment|undefined>{
    const a:Assignment|undefined = this.assignments.find(a => a.id === id);
    return of(a);
  }

  // Ajouter un nouvel assignment
  addAssignment(assignment: Assignment): Observable<string> {
    this.assignments.push(assignment);
    this.loggingService.log(assignment.nom, 'a été ajouté !');
    return of('Assignment ajouté !');
  }

  // Supprimer un assignment
  deleteAssignment(assignment: Assignment): Observable<string> {
    this.assignments = this.assignments.filter(a => a !== assignment);
    return of('Assignment supprimé !');
  }

  // Mettre à jour un assignment
  updateAssignment(assignment: Assignment): Observable<string> {
    // Ici, on pourrait envoyer une requête PUT à une base de données
    // Mais comme on travaille avec un tableau local, aucune action supplémentaire n'est nécessaire
    return of("Assignment service: assignment modifié !");
  }


}
