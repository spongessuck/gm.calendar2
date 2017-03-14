export class GmCalDay {
  items: any[] = [];
  allDayItems: any[] = [];
  isToday: boolean;

  private _date: Date;
  get date(): Date {
    return this._date;
  };
  set date(d: Date) {
    this._date = d;
    const todayVal = new Date().setHours(0, 0, 0, 0);
    this.isToday = d.valueOf() === todayVal;
  }

  constructor(d: Date | number | string) {
    this.date = new Date(new Date(d as any).setHours(0, 0, 0, 0));
  }
}
