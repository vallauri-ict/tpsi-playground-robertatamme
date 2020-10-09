import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  names = ["Barak Obama","Filippo","Luke Hemmings","Calum Hood","Michael Clifford","Ashton Irwin","Camilla Mala","Edoardo Pavese","Bloody Mery"];
  myName = 'Roberta Tammè';

  
  changeName(){
    this.myName= this.names[Math.floor(Math.random()*8)];
  }
}
