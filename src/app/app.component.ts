
import { Component } from '@angular/core';
import { faInstagram, faLinkedin, faFacebook, faBlogger, faAws  } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'port-folio';
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faFacebook = faFacebook;
  faBlogger = faBlogger;
  public message: boolean = false;
  public message2: boolean = false;
  
}
