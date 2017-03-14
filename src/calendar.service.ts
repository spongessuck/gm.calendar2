import { Injectable } from '@angular/core';
import { GmEventItem } from './event-item';
import { GmDayViewItem } from './day-view-item';

enum ItemOverlap {
  NoOverlap = 0,    // No overlap
  Simultaneous = 1, // Begins at same time
  EndsDuring = 2,   // Second item ends during first item
  BeginsDuring = 4  // Second item begins during first item
}

@Injectable()
export class GmCalendarService {

  pixelsPerMs: number;

  private static eventItemToDayViewItem(item: GmEventItem): GmDayViewItem {
    const startVal = item.startTime.hours * 60 * 60 * 1000 + item.startTime.minutes * 60 * 1000;
    const endVal = item.endTime.hours * 60 * 60 * 1000 + item.endTime.minutes * 60 * 1000;
    return (<any>Object).assign({
        startVal: startVal,
        endVal: endVal,
        before: [],
        after: []
        // data: { primary: null, secondary: null }
      },
      // this.metricsOb(startVal, endVal),
      item
    );
  }

  static eventItemsToDayViewItems<T extends GmEventItem>(items: T[]): GmDayViewItem[] {
    const dayViewItems = items./*sort( (a, b): number => {
      let aDuration = (a.endTime.hours * 60 + a.endTime.minutes) - (a.startTime.hours * 60 + a.startTime.minutes);
      let bDuration = (a.endTime.hours * 60 + a.endTime.minutes) - (a.startTime.hours * 60 + a.startTime.minutes);
      // let orderByStart = (a.startTime.hours * 60 + a.startTime.minutes) - (b.startTime.hours * 60 + b.startTime.minutes);
      return bDuration - aDuration;
    }).*/map(this.eventItemToDayViewItem);

    for (let i = 0; i < dayViewItems.length; i++) {
      const item = dayViewItems[i];

      for (let j = 0; j < dayViewItems.length; j++) {
        if (i !== j) {
          const compItem = dayViewItems[j];

          const overlapFlags = this.itemOverlapsItem(item, compItem);

          if (overlapFlags !== ItemOverlap.NoOverlap) {
            if ((overlapFlags & ItemOverlap.Simultaneous && i > j)
                || overlapFlags & ItemOverlap.EndsDuring) {

              item.after.push(compItem);
            } else if ((overlapFlags & ItemOverlap.Simultaneous && i < j)
                       || overlapFlags & ItemOverlap.BeginsDuring) {

              item.before.push(compItem);
            }
          }
        }
      }
    }

    dayViewItems.forEach( item => {
      // Check to see if the items before the item are not before
      // or after each other. This means they're not adjacent and
      // the item would get pushed too far.
      item.before.forEach( beforeItem1 => {
          item.before.forEach( beforeItem2 => {
            if (beforeItem1 !== beforeItem2) {

              /// Remove entry from `before` if both `before` items
              /// don't overlap. Keeps item from being pushed too far right
              const overlapFlags = this.itemOverlapsItem(beforeItem1, beforeItem2);
              if (overlapFlags === ItemOverlap.NoOverlap) {
                item.before.splice(item.before.indexOf(beforeItem2), 1);
              }
            }
          });

          item.after.forEach( afterItem => {
            /// Remove entry from `after` if the `before` item doesn't overlap
            /// the `after` item, then move the item from `after`'s `before`
            /// list to its `after` list to move it to the left.
            const overlapFlags = this.itemOverlapsItem(beforeItem1, afterItem);
            if (overlapFlags === ItemOverlap.NoOverlap) {
              item.after.splice(item.after.indexOf(afterItem), 1);
              afterItem.before.splice(afterItem.before.indexOf(item), 1);
              afterItem.after.push(item);
            }
          });
      });


      item.after.forEach( afterItem1 => {
        item.after.forEach( afterItem2 => {
          if (afterItem1 !== afterItem2) {
            const overlapFlags = this.itemOverlapsItem(afterItem1, afterItem2);
            if (overlapFlags === ItemOverlap.NoOverlap) {
              item.after.splice(item.after.indexOf(afterItem2), 1);
            }
          }
        });

        item.before.forEach( beforeItem => {
          const overlapFlags = this.itemOverlapsItem(afterItem1, beforeItem);
          if (overlapFlags === ItemOverlap.NoOverlap) {
            item.before.splice(item.before.indexOf(beforeItem), 1);
            beforeItem.after.splice(beforeItem.after.indexOf(item), 1);
            beforeItem.before.push(item);
          }
        });
      });
    });

    return dayViewItems;
  }

  static itemOverlapsItem(item: GmDayViewItem, compItem: GmDayViewItem): number {
    let result = ItemOverlap.NoOverlap;

    if (item.startVal === compItem.startVal) {
      result += ItemOverlap.Simultaneous;
    }

    if (item.startVal < compItem.startVal
        && item.endVal > compItem.startVal
        && item.endVal <= compItem.endVal) {
      result += ItemOverlap.EndsDuring;
    }

    if (item.startVal > compItem.startVal
        && item.startVal < compItem.endVal) {
      result += ItemOverlap.BeginsDuring;
    }

    return result;
  }

  constructor() { }

  metricsOb(startVal: number, endVal: number) {
    return {
      pixelsFromTop: Math.round(startVal * this.pixelsPerMs),
      height: Math.round((endVal - startVal) * this.pixelsPerMs)
    };
  }

  // pixelsFromTop(item: GmBlockItem) {
  //   return Math.round(item.startVal * this.pixelsPerMs);
  // }

  // itemHeight(item: GmBlockItem) {
  //   return Math.round((item.endVal - item.startVal) * this.pixelsPerMs);
  // }
}
