import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Lists } from '../interfaces/list.interface';

const BASE_URL = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor( private http: HttpClient ) { }

  getLists(){
    return this.http.get<Lists>( `${ BASE_URL }/list` );
  }

  createList( title: string ){

    return this.http.post( `${ BASE_URL }/list`, { title } );

  }

}
