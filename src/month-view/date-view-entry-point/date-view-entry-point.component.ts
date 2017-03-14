import { Component,
         Inject,
         Input,
         ComponentRef,
         ComponentFactoryResolver,
         ReflectiveInjector,
         ViewContainerRef,
         OnInit } from '@angular/core';
import { GmCalendarConfig } from '../../calendar.config';
import { CONFIG_PROVIDER } from '../../calendar.config.provider';
import { GmDateViewComponentInterface } from '../date-view/date-view-component.interface';

@Component({
  selector: 'gm-date-view-entry-point',
  template: ''
})
export class GmDateViewEntryPointComponent implements OnInit {

  @Input() date: Date;
  @Input() items: any[];
  @Input() differentMonth: boolean;

  constructor(
    private viewContainer: ViewContainerRef,
    private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(<any>GmCalendarConfig.dateViewComponent);
    const injector = ReflectiveInjector.fromResolvedProviders([], this.viewContainer.parentInjector);
    const compRef = <ComponentRef<GmDateViewComponentInterface>>this.viewContainer.createComponent(factory, 0, injector, []);
    compRef.instance.date = this.date;
    compRef.instance.items = this.items;
    compRef.instance.differentMonth = this.differentMonth;
  }

}
