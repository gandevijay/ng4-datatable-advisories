import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataTableModule } from 'angular-4-data-table/src/index';
import { SliderContainerComponentComponent } from './slider-container-component/slider-container-component.component';
import { DataRetrievalComponentComponent } from './data-retrieval-component/data-retrieval-component.component';
import { ReportsComponent } from './reports/reports.component';
import { AdvisoriesComponent } from './advisories/advisories.component';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AdvisoryService } from './advisories/advisory.service';

@NgModule({
  declarations: [
    AppComponent,
    SliderContainerComponentComponent,
    DataRetrievalComponentComponent,
    AdvisoriesComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    DataTableModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [AdvisoryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
