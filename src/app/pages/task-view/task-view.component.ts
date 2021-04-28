import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  constructor( private listService: ListService ) { }

  ngOnInit(): void {

    this.listService.getLists()
          .subscribe( resp => {
            console.log(resp);
            
          })

  }

}
