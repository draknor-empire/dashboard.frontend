import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { PinnedModalModule } from "./common/pinned-modal/pinned-modal.module";

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        NavbarComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        PinnedModalModule
    ]
})
export class AppModule { }
