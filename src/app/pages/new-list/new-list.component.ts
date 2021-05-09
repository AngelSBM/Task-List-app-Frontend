import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  constructor( private listSerive: ListService,
               private router: Router ) { }

  ngOnInit(): void {
  }

  createList ( value: string ){
    console.log(value);

    this.listSerive.createList( value )
          .subscribe( resp => {
            this.router.navigateByUrl('/');            
          });
    
  }

}
