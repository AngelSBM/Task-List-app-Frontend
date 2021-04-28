import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  constructor( private listSerive: ListService ) { }

  ngOnInit(): void {
  }

  createList ( value: string ){
    console.log(value);

    this.listSerive.createList( value )
          .subscribe( resp => {
            console.log(resp);            
          });
    
  }

}
