import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class EadboxApiService {

    constructor(private http: HttpClient) { }

    consultar(url, callback) {
        //e3gq0byt4c9id9ng@my10minutemail.com

        return this.http.get(url)
            .pipe(retry(1), catchError(this.handleError))
            .subscribe(res => callback(Object.values(res).map((curso, index) => {
                return {
                    ordem: index + 1,
                    nome: curso['title'],
                    descricao: curso['description'],
                    categoria: curso['category']['title'],
                }
            })));
    }

    private handleError(error: HttpErrorResponse) {
        let erroMsg = 'Algum erro está acontecendo; Por favor tente novamente mais tarde. Detalhamento: ' + JSON.stringify(error);
        if (error.error instanceof ErrorEvent) {
            erroMsg = `Um código ${error.status} retornou e a resposta foi: ${error.message}`;
        }
        return throwError(erroMsg);
    };
}