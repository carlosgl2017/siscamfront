import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Oficina } from './oficina';

@Injectable({
  providedIn: 'root'
})
export class OficinaService {
  baseUrl: String = environment.baseUrl;
  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  findAll(): Observable<Oficina[]> {
    const url = `${this.baseUrl}/oficina/sel`;
    return this.http.get<Oficina[]>(url);
  }

  create(oficina: Oficina): Observable<Oficina> {
    const url = `${this.baseUrl}/oficina/add`;
    return this.http.post<Oficina>(url, oficina);
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, "OK", {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 3000,
    });
  }

  findById(idoficina: Number): Observable<Oficina> {
    const url = `${this.baseUrl}/oficina/sel/${idoficina}`;
    return this.http.get<Oficina>(url);
  }

  delete(idoficina: Number): Observable<void> {
    const url = `${this.baseUrl}/oficina/del/${idoficina}`;
    return this.http.delete<void>(url);
  }
    
  update(oficina: Oficina,idoficina:number): Observable<void> {
    const url = `${this.baseUrl}/oficina/upd/${idoficina}`;
    return this.http.put<void>(url, oficina);
  }
}
