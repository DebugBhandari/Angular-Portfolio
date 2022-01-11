import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {


  @Output() public proev = new EventEmitter()
  @Output() public proev2 = new EventEmitter()
  public val : boolean= false;
  public val1 : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
      this.val= !this.val;
      this.proev.emit(this.val);
      
    
  }
  fireEvent2(){
    this.val1= !this.val1;
    this.proev2.emit(this.val1);
    
  }

}
