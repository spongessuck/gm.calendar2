import { Component, OnInit, HostBinding } from '@angular/core';
import { GmDateViewComponentInterface } from './date-view-component.interface';

@Component({
  selector: 'gm-date-view',
  templateUrl: './date-view.component.html',
  styles: [`
    :host {
      display: block;
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
