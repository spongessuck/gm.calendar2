import { GmEventItem } from './event-item';

export interface GmDayViewItem extends GmEventItem {
  startVal: number;
  endVal: number;
  before: any[];
  after: any[];
  pixelsFromTop?: number;
  height?: number;
}
