import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {
  @Input() title: any;
  @Input() description: any;
  @Input() tools: any;
  @Input() imageUrl: any;
  @Input() gitRepo: any;
  @Input() url: any;
  @Input() demo:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
