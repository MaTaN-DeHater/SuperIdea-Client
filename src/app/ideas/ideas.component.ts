import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {AuthService} from "../auth.service";
import {GlobalService} from "../global.service";

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit {

  ideas:any[] = [];
  user = null;
  searchText = '';
  public modalRef: BsModalRef;
  idea = {
    title: '',
    description: '',
    user: ''
  };


  constructor(
    private authService: AuthService,
    private modalService: BsModalService,
    private service: GlobalService) {
  }

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.service.getIdeas().subscribe((ideas: any) => {
      this.ideas = JSON.parse(JSON.stringify(ideas));
    });
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  createIdea() {
    // @ts-ignore
    this.idea.user = this.user?._id;
    this.service.createIdeas(this.idea).subscribe(res => {
      this.modalRef.hide();
      this.ngOnInit();
    });
  }

  like(idea: any) {
    this.service.like(idea).subscribe(res => {
      this.ngOnInit();
    });
  }


}
