import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

import { RadSideDrawerComponent, SideDrawerType } from 'nativescript-telerik-ui/sidedrawer/angular';

@Component({
    selector: "my-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
  @ViewChild('event-drawer') private eventDrawerComponent: RadSideDrawerComponent;

  private eventDrawer: SideDrawerType;

  ngAfterViewInit() {
    this.eventDrawer = this.eventDrawerComponent.sideDrawer;
  }

  ngOnInit() {
  }

  toggleDrawer() {
    this.eventDrawer.toggleDrawerState();
  }
}
