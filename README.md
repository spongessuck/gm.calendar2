# gm.calendar2

[![npm version](https://badge.fury.io/js/gm.calendar2.svg)](https://badge.fury.io/js/gm.calendar2)

## Components

### `gm-month-view`

Displays a month view calendar.

    <gm-month-view [date]="date" [items]="items"></gm-month-view>

#### Inputs

##### `date: Date`

Sets the month displayed by the component based on the month and year.

##### `items: { title: string, date: Date }[]`

  Sets the items displayed on the calendar.

#### Styles

##### .gm-different-month

Used to distinguish between dates in a different month than the one displayed. Set this in the global styles of your application.

```css
/* Give dates in a different month a slightly gray background */
.gm-different-month {
  background-color: #eee;
}
```

### `gm-day-view-container`

Displays the times of day and their demarcation lines. Place your `gm-day-view` components in one of these.

```html
<gm-day-view-container [scrollToHour]="firstHourToShow"></gm-day-view-container>
```

#### Inputs

##### `scrollToHour: number`

The hour of the day to scroll to, from 0-23. Only works if the parent element of `gm-day-view-container` has a height smaller than `gm-day-view-container` and has its `overflow` style set to something other than `visible`.

### `gm-all-day-view-container`

A container element to hold `gm-day-view` components with events that last all day. Should be placed in an element with a specific height set.

```html
<gm-all-day-view-container></gm-day-view-container>
```

#### Styles

##### `.gm-day-view-spacer`

This element pushes the `gm-day-view` components to make room for the time-of-day labels. You can set your own style rules to change the width.

### `gm-day-view`

Shows a day view with events spanning their `startTime` and `endTime` properties.

```html
<gm-day-view [isToday]="isToday"></gm-day-view>
```

#### Inputs

##### `isToday: boolean`

Determines if the component should render a line designating the current time.

### `gm-event-view`

Placed inside `gm-day-view` elements to display the event details.

In order for these items to be positioned properly, they must implement the `GmEventItem` interface, and you must pass your array of events to `eventItemsToDayViewItems`, which is exported by the main module.

`eventItemsToDayViewItems` analyzes the event items to find overlaps in their start and end times so that they can be arranged adjacently.

```ts
...
import { GmDayViewItem,
         eventItemsToDayViewItems } from 'gm.calendar2'

@Component
...
  items: GmDayViewItem[] = eventItemsToDayViewItems([
    {
      title: 'My Event',
      startTime: {
        hours: 12,
        minutes: 00
      },
      endTime: {
        hours: 12,
        minutes: 30
      }
    }
  ]);
...

```

```html
<gm-event-view *ngFor="let item of items" [item]="item">
  {{item.title}}
</gm-event-view>
```

These items have no style by default.

#### Inputs

##### `item: GmDayViewItem`

An item returned by `eventItemsToDayViewItems`.

#### Styles

##### `.gm-cal-item`

This element holds whatever you put inside `<gm-event-view>`. You should set style rules for this class in your application global stylesheet.

<!--# Configuration

You can set the component that should be used by `gm-month-view` to display events by setting `GmCalendarConfig.dateViewComponent`. -->

# Development

## Development server
Run `ng serve` to run the example app. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
