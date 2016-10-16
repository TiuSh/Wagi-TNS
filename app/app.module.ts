import { NgModule } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/platform';
// import { LISTVIEW_DIRECTIVES, LISTVIEW_PROVIDERS } from "nativescript-telerik-ui/listview/angular";
import { SIDEDRAWER_DIRECTIVES, SIDEDRAWER_PROVIDERS } from "nativescript-telerik-ui/sidedrawer/angular";
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NS_HTTP_PROVIDERS } from 'nativescript-angular/http';

import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { EventListComponent } from './components/event/eventList.component';
import { EventComponent } from './components/event/event.component';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    MomentModule,
  ],
  providers: [
    NS_HTTP_PROVIDERS,
    // LISTVIEW_PROVIDERS,
    SIDEDRAWER_PROVIDERS,
  ],
  declarations: [
    AppComponent,
    EventListComponent,
    EventComponent,
    // LISTVIEW_DIRECTIVES,
    SIDEDRAWER_DIRECTIVES,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}


