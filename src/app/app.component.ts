import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http:HttpClient){

  }
  title = 'TACOS';
  taco={}
  public getTaco(){
    this.http.get("http://taco-randomizer.herokuapp.com/random/?full-taco=true")
    .subscribe(function(taco){this.taco=taco}.bind(this))
  }
}

