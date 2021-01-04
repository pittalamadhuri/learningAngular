import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  public name: string = "Madhuri";

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(): void  {
    alert(this.name);
  }

  public onClickChild(name: string): void  {
    alert('passtext' + name);
  }

}
