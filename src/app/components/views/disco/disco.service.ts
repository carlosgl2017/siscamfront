import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Disco } from './disco';

@Injectable({
  providedIn: 'root'
})
export class DiscoService {
  baseUrl: String = environment.baseUrl;
  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  findAll(): Observable<Disco[]> {
    const url = `${this.baseUrl}/disco/sel`;
    return this.http.get<Disco[]>(url);
  }

  create(disco: Disco): Observable<Disco> {
    const url = `${this.baseUrl}/disco/add`;
    return this.http.post<Disco>(url, disco);
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, "OK", {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 3000,
    });
  }

  findById(iddisco: Number): Observable<Disco> {
    const url = `${this.baseUrl}/disco/sel/${iddisco}`;
    return this.http.get<Disco>(url);
  }

  delete(iddisco: Number): Observable<void> {
    const url = `${this.baseUrl}/disco/del/${iddisco}`;
    return this.http.delete<void>(url);
  }
  
  update(disco: Disco,iddisco:number): Observable<void> {
    const url = `${this.baseUrl}/disco/upd/${iddisco}`;
    return this.http.put<void>(url, disco);
  }

}
