import { NgModule,
         ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GmDayViewComponent } from './day-view/day-view.component';
import { GmDayViewContainerComponent } from './day-view/day-view-container/day-view-container.component';
import { GmEventViewComponent } from './day-view/event-view/event-view.component';
import { GmAllDayViewContainerComponent } from './day-view/all-day-view-container/all-day-view-container.component';
import { GmMonthViewComponent } from './month-view/month-view.component';
import { GmDateViewEntryPointComponent } from './month-view/date-view-entry-point/date-view-entry-point.component';
import { GmDateViewComponent } from './month-view/date-view/date-view.component';
import { GmCalendarConfig } from './calendar.config';
import { GmCalendarService } from './calendar.service';
// import { CONFIG_PROVIDER } from './calendar.config.provider';

const components = [
    GmDayViewComponent,
    GmDayViewContainerComponent,
    GmEventViewComponent,
    GmAllDayViewContainerComponent,
    GmMonthViewComponent,
    GmDateViewEntryPointComponent,
    GmDateViewComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ],
  providers: [GmCalendarService],
  entryComponents: [GmDateViewComponent]
})
export class GmCalendarModule {

  // static forChild(): ModuleWithProviders {
  //   return GmCalendarModule.forRoot();
  // }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GmCalendarModule,
      providers: [GmCalendarService]
    };
  }
  // static forRoot(config?: GmCalendarConfig): ModuleWithProviders {
  //   if (!config) {
  //     config = {
  //       dateViewComponent: GmDateViewComponent
  //     };
  //   }

  //   return {
  //     ngModule: GmCalendarModule,
  //     providers: [
  //       {
  //         provide: CONFIG_PROVIDER,
  //         useValue: config
  //       }
  //     ]
  //   };
  // }
}
