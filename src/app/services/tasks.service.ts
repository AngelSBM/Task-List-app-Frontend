import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Task, TasksResponse } from '../interfaces/task.interface';

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

    return this.http.post<{ok: boolean, task: Task}>( `${ BASE_URL }/list/tasks/post`, { title }, {
      headers: {
        listid
      }
    } )

  }

  updateTask( task: Task ){

    

    return this.http.put(`${ BASE_URL }/list/tasks/update`, { 
      title: task.title,
      completed: !task.completed
     }, {
      headers: {
        id: task._id
      }
    })

  }

}
