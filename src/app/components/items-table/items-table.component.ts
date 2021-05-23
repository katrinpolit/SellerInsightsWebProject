import {Component, Input, OnInit} from '@angular/core';
import {ConditionSummary} from "../../models/ConditionSummary";

@Component({
  selector: 'app-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.sass']
})
export class ItemsTableComponent implements OnInit {

  _itemList:ConditionSummary[];

  @Input() set itemsList(value: ConditionSummary[]){
    this._itemList = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
