import { GmDateViewComponent } from './month-view/date-view/date-view.component';
import { GmDateViewComponentInterface } from './month-view/date-view/date-view-component.interface';

export class GmCalendarConfig {
  static dateViewComponent: GmDateViewComponentInterface | any = GmDateViewComponent;
}
