import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {

  @Output() searchQuery = new EventEmitter<string>();
  currSearchQuery: string = "";

  constructor() {}

  ngOnInit(): void {}

  onFindClicked() {
    this.searchQuery.emit(this.currSearchQuery);
  }
}
