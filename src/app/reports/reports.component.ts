import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../global.service";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  public studentIdeas = 0;
  public teacherIdeas=0;

  constructor(private service: GlobalService) {
  }

  ngOnInit(): void {
    this.service.getIdeas().subscribe((ideas: any) => {

      const teachers = 0;
      this.studentIdeas = ideas.filter((i: any) => i.user.type === 'student')?.length;
      this.teacherIdeas = ideas.filter((i: any) => i.user.type === 'teacher')?.length;

    });
  }

}
