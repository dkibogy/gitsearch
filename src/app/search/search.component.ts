import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: string;
  @Output() searchEmmiter = new EventEmitter();

  constructor() { }

  emmitUser() {
    this.searchEmmiter.emit(this.search);
  }

  ngOnInit(): void {
  }

}
