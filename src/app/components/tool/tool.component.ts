import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-tool',
  styleUrls: ['./tool.component.scss'],
  templateUrl: './tool.component.html',
})
export class ToolComponent implements OnInit {
  @Input() data: any = null;
  cardData: any;

  constructor(public activatedRoute: ActivatedRoute,
   ) {
 
   }
  ngOnInit(): void {
  }


}
