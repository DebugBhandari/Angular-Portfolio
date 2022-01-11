import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../../types';
import { DataService } from '../../services/data.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass'],
  providers: [DataService],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({  opacity: 0 }),
            animate('1s ease-out', 
                    style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({  opacity: 1 }),
            animate('1s ease-in', 
                    style({  opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class HomepageComponent implements OnInit {
  Stock: Data[] = [];
  clickedDiv: boolean = false;
  projClicked: boolean = false;
  private _passev: boolean= false;

  get passev(): boolean{
    return this._passev
  }

  @Input()
  set passev(value:boolean){
    this._passev= value;
    if(value){
      this.projectClicked();
      this._passev = !this._passev;
    }
    else{
      this.unClicked();
     
    }
  }

  private _passev2: boolean= false;

  get passev2(): boolean{
    return this._passev2;
  }

  @Input()
  set passev2(value2:boolean){
    this._passev2= value2;
    if(value2){
      this.meClicked();
      this._passev2 = !this._passev2;
    }
    else{
      this.unClicked();
      
    }
  }

  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data)=>(this.Stock = data));
  }

  public meClicked(){
    this.clickedDiv = !this.clickedDiv;
    console.log(this.clickedDiv)
  }
  public projectClicked(){
    this.projClicked = true;
    this.clickedDiv = !this.clickedDiv;
    console.log(this.projClicked)
  }

  public unClicked(){
    this.clickedDiv =false;
    this.projClicked=false;
  }
}
