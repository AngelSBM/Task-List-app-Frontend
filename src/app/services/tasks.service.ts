import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TasksResponse } from '../interfaces/task.interface';

const BASE_URL = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class TasksService {


  constructor( private http: HttpClient ) { }

  getTasks( listID: string ){

    return this.http.get<TasksResponse>( `${ BASE_URL }/list/tasks`, { headers: { id: listID } });

  }

  createTask( title: string, listid: string  ){

    return this.http.post( `${ BASE_URL }/list/tasks/post`, { title }, {
      headers: {
        listid
      }
    } )

  }

}
