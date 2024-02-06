import {Component, OnInit, TemplateRef} from '@angular/core';

import {AuthService} from '../auth.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {GlobalService} from "../global.service";
import {AccordionConfig} from "ngx-bootstrap/accordion";

export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), {closeOthers: true});
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
  }
}
