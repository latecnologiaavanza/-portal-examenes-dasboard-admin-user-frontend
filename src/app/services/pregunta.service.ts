import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  constructor(private http:HttpClient) { }

  public listarPreguntasDelExamen(examenId:any){
    return this.http.get(`${baserUrl}/pregunta/examen/todos/${examenId}`);
  }

  public guardarPregunta(pregunta:any){
    return this.http.post(`${baserUrl}/pregunta/`,pregunta);
  }

  public eliminarPregunta(preguntaId:any){
    return this.http.delete(`${baserUrl}/pregunta/${preguntaId}`);
  }

  public actualizarPregunta(pregunta:any){
    return this.http.put(`${baserUrl}/pregunta/`,pregunta);
  }

  public obtenerPregunta(preguntaId:any){
    return this.http.get(`${baserUrl}/pregunta/${preguntaId}`);
  }

  public listarPreguntasDelExamenParaLaPrueba(examenId:any){
    return this.http.get(`${baserUrl}/pregunta/examen/todos/${examenId}`);
  }

  public evaluarExamen(preguntas:any){
    return this.http.post(`${baserUrl}/pregunta/evaluar-examen`,preguntas);
  }
}
