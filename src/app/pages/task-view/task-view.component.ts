import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
               private taskService: TasksService,
               private activatedRoute: ActivatedRoute ) { }

  public lists: List [] = [];
  public tasks: Task[] = [];
  public id: string = '';
  public TaskListid: string = '';
        
  ngOnInit(): void {

    this.listService.getLists()
          .subscribe( resp => this.lists = resp.lists );

    this.activatedRoute.params.subscribe( params => {
      this.id = params.listTaskCreated;
      
      this.showTasks( this.id )
            
    })

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
