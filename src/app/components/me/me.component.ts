import { Component, OnInit } from '@angular/core';
import { Data } from '../../types';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.sass'],
  providers: [DataService],
})
export class MeComponent implements OnInit {
  Stock: Data[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data)=>(this.Stock = data));
  }

}
