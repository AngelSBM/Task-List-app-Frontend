import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  public listId: string = '';

  constructor(  private taskService: TasksService,
                private activatedRoute: ActivatedRoute,
                private router: Router ) { }

  ngOnInit(): void {
  
    this.activatedRoute.params.subscribe( params => {
      this.listId = params.listid;      
    })
    
  }

  createTask( title: string ){
    console.log(title);
    this.taskService.createTask( title, this.listId )
          .subscribe( resp => {
            console.log(resp);
            this.router.navigateByUrl('/');
          })
  }

}
