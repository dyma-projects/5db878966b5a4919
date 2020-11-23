import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css', '../main-component.css']
})
export class Exercice1Component implements OnInit {

  public color: string = 'orange';
  public text: string = 'Exo 1';
  public visibilite: boolean = true;
  public textBtn: string = 'Texte teal';

  constructor() { }

  ngOnInit(): void {
  }

  public visibiliteText(): void {
    if (this.visibilite) {
      this.color = 'teal';
      this.textBtn = 'Texte orange';
    } else {
      this.color = 'orange';
      this.textBtn = 'Texte teal';
    }
    this.visibilite = !this.visibilite;
  }

}
