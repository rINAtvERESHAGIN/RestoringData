import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ClarityModule, ClrInputModule, ClrSelectModule} from '@clr/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ROUTING} from './app.routing';
import { TableListComponent } from './table-list/table-list.component';
// import {ClarityIcons} from '@clr/icons';

@NgModule({
    declarations: [
        AppComponent,
        TableListComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,

        ClarityModule,
        ClrInputModule,
        ClrSelectModule,
        // ClarityIcons,
        ROUTING
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
