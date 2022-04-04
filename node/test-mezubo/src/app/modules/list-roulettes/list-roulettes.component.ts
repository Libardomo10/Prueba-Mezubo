import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-roulettes',
  templateUrl: './list-roulettes.component.html',
  styleUrls: ['./list-roulettes.component.css']
})
export class ListRoulettesComponent implements OnInit {

  @Input() listRoulettes: any[] = [];

  constructor() { }

  ngOnInit(): void {}

}
