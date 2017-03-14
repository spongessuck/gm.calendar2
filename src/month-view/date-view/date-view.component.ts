import { Component, OnInit, HostBinding } from '@angular/core';
import { GmDateViewComponentInterface } from './date-view-component.interface';

@Component({
  selector: 'gm-date-view',
  templateUrl: './date-view.component.html',
  styles: [`
    :host {
      display: block;
    }

    table {
      table-layout: fixed;
    }

    .item-row {
      display: flex;
      align-items: center;
    }

    .item-left {
      flex-grow: 1;
    }

    .item-right {
      flex-shrink: 0;
    }
  `]
})
export class GmDateViewComponent implements GmDateViewComponentInterface, OnInit {

  date: Date;
  items: any[];

  @HostBinding('class.gm-different-month')
  differentMonth: boolean;

  constructor() { }

  ngOnInit() {
  }

}
