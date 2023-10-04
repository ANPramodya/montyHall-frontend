import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../models/model.game';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SimulationService {
  constructor(private http: HttpClient) {}

  async simulate(switchOrNot: boolean, noOfGames: number): Promise<Game[]> {
    console.log('Switch or not:', switchOrNot);
    console.log('Number of games:', noOfGames);

    const headers = new HttpHeaders({
      'content-Type': 'application/json',
    });
    const url = 'https://localhost:7141/api/Simulation';
    // const url = 'http://localhost:4200/assets/server.json';
    const data = {
      noOfGames: noOfGames,
      switchDoors: switchOrNot,
    };

    console.log('passed the url');

    try {
      const response = await this.http
        .post<Game[]>(url, data)
        .pipe(
          catchError((error: any) => {
            console.error('Error:', error);
            return throwError(error);
          })
        )
        .toPromise();
      return response as Game[];
    } catch (error) {
      console.error('Error: ', error);
      return Promise.reject(error);
    }
    // return this.http.post<Game[]>(url, data, { headers: headers }).pipe(
    //   map((response: Game[]) => {
    //     console.log(response);
    //     return response;
    //   }),
    //   catchError((error: any) => {
    //     console.error('Error:', error);
    //     return throwError(error);
    //   })
    // );
  }
}
