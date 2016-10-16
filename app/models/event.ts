export enum EventTypes {
  Food,
  Sport,
  Mood
}

export class Event {
  constructor(
    public type: EventTypes,
    public date: Date,
    public title: string,
    public content: string[]
  ) {}
}
