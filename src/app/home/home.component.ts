import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  @Input() usuarioHome:string;

  ngOnInit() {
    console.log("hme" + this.usuarioHome);
  }

}
