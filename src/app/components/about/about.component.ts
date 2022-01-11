import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { faAws  } from '@fortawesome/free-brands-svg-icons';
import {Data} from '../../types';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
  providers: [DataService]
})
export class AboutComponent implements OnInit {
  Stock: Data[] = [];
  faAws = faAws;

  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data)=>(this.Stock = data));
  }

}
