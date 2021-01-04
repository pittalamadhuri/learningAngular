import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listener',
  templateUrl: './listener.component.html',
  styleUrls: ['./listener.component.scss']
})
export class ListenerComponent implements OnInit {

  public passText: string = 'def';
  @Input('inputName')
  name : string = 'test';

  @Output()
  clickCall: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onClick() : void {

    this.clickCall.emit(this.passText);
  }

}
