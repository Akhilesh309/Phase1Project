import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clients } from './clients';
import { Observable } from 'rxjs';
import { Projects } from './projects';
import { Meetings } from './meetings';
import { ProjectTasks } from './project-tasks';
import { Obj } from '@popperjs/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient:HttpClient) { }

  private apiUrl = "http://localhost:3000/Clients";
  private apiUrlP = "http://localhost:3000/Projects";
  private apiUrlM = "http://localhost:3000/Client_Meetings";
  private baseUrl = "http://localhost:3000";
  private apiUrlPt = "http://localhost:3000/Proj_Tasks";

  addNewCli(cli:Clients):Observable<Object>{
    return this.httpClient.post(`${this.apiUrl}`, cli);
  }

  showallClients():Observable<Clients[]>{
    return this.httpClient.get<Clients[]>(`${this.apiUrl}`);
  }

  getCliInfobasedOnCliId(id:any):Observable<Clients>{
    return this.httpClient.get<Clients>(`${this.apiUrl}/${id}`);
  }

  updateClient(id:number, cli:Clients):Observable<Object>{
    return this.httpClient.put(`${this.apiUrl}/${id}`, cli);
  }

  DeleteCliInfoBasedOnCliId(id:any):Observable<Object>{
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

  addNewPro(pro:Projects):Observable<Object>{
    return this.httpClient.post(`${this.apiUrlP}`, pro);
  }

  showallPros():Observable<Projects[]>{
    return this.httpClient.get<Projects[]>(`${this.apiUrlP}`);
  }

  getProBasedOnProId(id:any):Observable<Projects>{
    return this.httpClient.get<Projects>(`${this.apiUrlP}/${id}`);
  }

  updateProject(id:number, pro:Projects):Observable<Object>{
    return this.httpClient.put(`${this.apiUrlP}/${id}`, pro);
  }

  DeleteProInfoBasedOnProId(id:any):Observable<Object>{
    return this.httpClient.delete(`${this.apiUrlP}/${id}`);
  }

  addNewMeeting(meet:Meetings):Observable<Object>{
    return this.httpClient.post(`${this.apiUrlM}`, meet);
  }

  showallMeetings():Observable<Meetings[]>{
    return this.httpClient.get<Meetings[]>(`${this.apiUrlM}`);
  }

  getMeetInfobasedOnMeetId(id:any):Observable<Meetings>{
    return this.httpClient.get<Meetings>(`${this.apiUrlM}/${id}`);
  }

  updateMeeting(id:number, meet:Meetings):Observable<Object>{
    return this.httpClient.put(`${this.apiUrlM}/${id}`, meet);
  }

  DeleteMeetInfoBasedOnMeetId(id:any):Observable<Object>{
    return this.httpClient.delete(`${this.apiUrlM}/${id}`);
  }

  getClientById(clientId: string): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/Clients/${clientId}`);
  }

  getProjectsByClientId(clientId: string): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/Projects?ClientId=${clientId}`);
  }

  getMeetingsByClientId(clientId: string): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/Client_Meetings?ClientID=${clientId}`);
  }

  addNewTask(pt:ProjectTasks):Observable<Object>{
    return this.httpClient.post(`${this.apiUrlPt}`, pt);
  }

  showallTasks():Observable<ProjectTasks[]>{
    return this.httpClient.get<ProjectTasks[]>(`${this.apiUrlPt}`);
  }

  getTaskByprojectId(id: any): Observable<ProjectTasks> {
    return this.httpClient.get<ProjectTasks>(`${this.apiUrlPt}/${id}`);
  }

  updateTask(id:number, pt:ProjectTasks):Observable<object>{
    return this.httpClient.put(`${this.apiUrlPt}/${id}`, pt);
  }

  DeleteTask(id:any):Observable<Object>{
    return this.httpClient.delete(`${this.apiUrlPt}/${id}`);
  }

  getTasksByProjectId(projectId: number): Observable<ProjectTasks[]> {
    return this.httpClient.get<ProjectTasks[]>(`${this.baseUrl}/Proj_Tasks?ProjectId=${projectId}`);
  }

}
