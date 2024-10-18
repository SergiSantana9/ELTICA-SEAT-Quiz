import { Component } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  // TODO: Create a text project to support multilanguange
  tittle = "Quiz App"
  section1 = "New Quiz"
  section2 = "Ranking"

  sharePage() {
    this.section1 = "Hola"
  }

}


