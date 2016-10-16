import { Component, OnInit } from '@angular/core';

import { Event, EventTypes } from '../../models/event';

@Component({
  selector: 'event-list',
  templateUrl: 'components/event/eventList.component.html',
  styleUrls: ['components/event/eventList.css']
})
export class EventListComponent implements OnInit {
  public events: Event[] = [];

  ngOnInit() {
    this.events.push(new Event(
      EventTypes.Food,
      new Date(),
      'Vapiano avec la chérie',
      ["Risotto pollo al limone", "Tiramisu", "1 verre de vin"]
    ));

    this.events.push(new Event(
      EventTypes.Mood,
      new Date(),
      'Mal au ventre',
      []
    ));

    this.events.push(new Event(
      EventTypes.Sport,
      new Date(),
      'Escalade',
      []
    ));
  }
}
