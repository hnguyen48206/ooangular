import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  htmlContent: '';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }
  goBack()
  {
    this.router.navigate(['/tasks/task-list']);
  }
}
