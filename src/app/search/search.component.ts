import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: string;
  //@Output() searchEmmiter = new EventEmitter<any>();

  constructor() { }

  //emmitUser() {
    //this.searchEmmiter.emit(this.search);
  //}

  ngOnInit(): void {
  }

}
