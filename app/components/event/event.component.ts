import { Component, Input } from '@angular/core';

import { Event, EventTypes } from '../../models/event';

const EventIcons = {
  [EventTypes.Food]: 0xf27a,
  [EventTypes.Sport]: 0xf437,
  [EventTypes.Mood]: 0xf38e,
}

const EventColors = {
  [EventTypes.Food]: 'energized',
  [EventTypes.Sport]: 'calm',
  [EventTypes.Mood]: 'assertive',
}

@Component({
  selector: 'event',
  templateUrl: 'components/event/event.component.html',
  styleUrls: ['components/event/event.css']
})
export class EventComponent {
  @Input('data') event: Event;

  getEventIconChar() {
    return String.fromCharCode(EventIcons[this.event.type]);
  }

  getEventClasses() {
    return {
      'button-round': true,
      'tns-ionicon-large': true,
      [`button-${EventColors[this.event.type]}`]: true
    };
  }
}
