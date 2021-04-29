import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/interfaces/list.interface';
import { Task } from 'src/app/interfaces/task.interface';
import { ListService } from 'src/app/services/list.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  constructor( private listService: ListService,
               private taskService: TasksService ) { }

  public lists: List [] = [];
  public tasks: Task[] = [];
  public id: string = '';
        
  ngOnInit(): void {

    this.listService.getLists()
          .subscribe( resp => this.lists = resp.lists );

  }


  showTasks( id: string ){

    this.id = id;

    //TODO: bring all the tasks in the list with the ID we are sending
    this.taskService.getTasks( id )
          .subscribe( resp => {
            this.tasks = resp.tasks;
            console.log(this.tasks);
          })

  }


}
