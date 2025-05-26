import { Injectable } from '@angular/core';
import { Assignment } from './assignments/assignment.model';
import { Observable,of  } from 'rxjs';
import { LoggingService } from './logging.service';
import { bdData } from './data';

import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
   backendURL = 'http://localhost:8010/api/assignments';

  constructor(private loggingService: LoggingService, private http: HttpClient) {}

  // Récupérer tous les assignments
  getAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.backendURL);
  }

  getAssignment(id: string): Observable<Assignment> {
    return this.http.get<Assignment>(`${this.backendURL}/${id}`);
  }

  // Ajouter un nouvel assignment
  addAssignment(assignment: Assignment): Observable<any> {
    return this.http.post(this.backendURL, assignment);
  }

  // Supprimer un assignment
  deleteAssignment(assignment: Assignment): Observable<any> {
    return this.http.delete(`${this.backendURL}/${assignment.id}`);
  }

  // Mettre à jour un assignment
  updateAssignment(assignment: Assignment): Observable<any> {
    return this.http.put(`${this.backendURL}/${assignment.id}`, assignment);
  }

  // Peupler la BD avec les données du fichier data.ts
  peuplerBD() {
    bdData.forEach(data => {
      const assignment: Assignment = {
        nom: data.nom,
        dateDeRendu: new Date(data.dateDeRendu),
        rendu: data.rendu
      };

      this.addAssignment(assignment).subscribe({
        next: () => console.log(`Ajouté : ${assignment.nom}`),
        error: err => console.error(`Erreur lors de l'ajout : ${assignment.nom}`, err)
      });
    });
  }


}
