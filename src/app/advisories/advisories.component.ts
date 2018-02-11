import { Component, OnInit, ViewChild } from '@angular/core';
import { Advisory } from './advisory';
import { DataTable, DataTableTranslations, DataTableResource, DataTableParams } from 'angular-4-data-table';
import { AdvisoryService } from './advisory.service';
import { Response } from '@angular/http/src/static_response';
import { Observable } from 'rxjs/Observable';
import { HttpModule } from '@angular/http';
import { take } from 'rxjs/operators/take';

@Component({
  selector: 'app-advisories',
  providers: [AdvisoryService],
  templateUrl: './advisories.component.html',
  styleUrls: ['./advisories.component.css']
})
export class AdvisoriesComponent {
  private advisoryResource: DataTableResource<Advisory>;
  private searchValue = '';
  public advisories: Array<Advisory> = [];
  //private aryAdvisory: Advisory[];
  advisoryCount = 0;
  private data: Array<Advisory> = [];
  private msg;
  public fromDate = "";
  public toDate = "";
  public params: DataTableParams;
  translations = <DataTableTranslations>{
    indexColumn: 'Index column',
    expandColumn: 'Expand column',
    selectColumn: 'Select column',
    paginationLimit: 'Max results',
    paginationRange: 'Showing'
  };

  @ViewChild(DataTable) advisoriesTable;

  constructor(private _advisoriesService: AdvisoryService) {
    // this.getStaticData(); // Uncomment the follow statements for loading the data from memory.
    this.advisories = this.data;
    this.advisoryResource = new DataTableResource(this.advisories);
    this.advisoryResource.count().then(count => (this.advisoryCount = count));
  }

  getStaticData() {
    this.data = [
      { type: 'advMeasurements', date: '05/01/2017', title: 'c181_MM_201707', link: 'http://www.bing.com' },
      { type: 'advMeasurements', date: '07/01/2017', title: 'd181_MM_201707', link: 'http://www.google.com' },
      { type: 'advMeasurements', date: '08/01/2017', title: 'e181_MM_201707', link: 'http://www.bing.com' },
      { type: 'advMeasurements', date: '10/01/2017', title: 'f181_MM_201707', link: 'http://www.google.com' },
      { type: 'advMeasurements', date: '05/01/2017', title: 'c181_MM_201707', link: 'http://www.bing.com' },
      { type: 'advMeasurements', date: '07/01/2017', title: 'd181_MM_201707', link: 'http://www.google.com' },
      { type: 'advMeasurements', date: '08/01/2017', title: 'e181_MM_201707', link: 'http://www.bing.com' },
      { type: 'advMeasurements', date: '05/01/2017', title: 'c181_MM_201707', link: 'http://www.bing.com' },
      { type: 'advMeasurements', date: '07/01/2017', title: 'd181_MM_201707', link: 'http://www.google.com' },
      { type: 'advMeasurements', date: '08/01/2017', title: 'e181_MM_201707', link: 'http://www.bing.com' },
      { type: 'advMeasurements', date: '05/01/2017', title: 'c181_MM_201707', link: 'http://www.bing.com' },
      { type: 'advMeasurements', date: '07/01/2017', title: 'd181_MM_201707', link: 'http://www.google.com' },
      { type: 'advMeasurements', date: '08/01/2017', title: 'e181_MM_201707', link: 'http://www.bing.com' },
      { type: 'advMeasurements', date: '05/01/2017', title: 'c181_MM_201707', link: 'http://www.bing.com' },
      { type: 'advMeasurements', date: '07/01/2017', title: 'd181_MM_201707', link: 'http://www.google.com' },
      { type: 'advMeasurements', date: '08/01/2017', title: 'e181_MM_201707', link: 'http://www.bing.com' },
      { type: 'advMeasurements', date: '05/01/2017', title: 'c181_MM_201707', link: 'http://www.bing.com' },
      { type: 'advMeasurements', date: '07/01/2017', title: 'd181_MM_201707', link: 'http://www.google.com' },
      { type: 'advMeasurements', date: '08/01/2017', title: 'e181_MM_201707', link: 'http://www.bing.com' }
    ] as Array<Advisory>;
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this._advisoriesService.query()
      .subscribe(data => this.processQuery(data), error => this.processErrorMessage(error)
      );
    this.params = { sortBy: 'date' };
  }

  // This will execute when http.get returns the data.
  processQuery(data: Advisory[]) {
    this.advisories = data;
    this.advisoryResource = new DataTableResource(this.advisories);
    this.advisoryResource.count().then(count => (this.advisoryCount = count));
  }

  // This will run when http returns error.
  processErrorMessage(error: any) {
    debugger;
    alert('Unable to process the request');
  }

  //Summary: Searches the rows for matching conditions / filter conditions, and binds the filtered result set to data table.
  search(params): void {
    debugger;
    params.limit = 14;
    params.offset = 0;
    this.msg = params.offset;
    this.reloadAdvisories(params);
    this.advisoryResource
      .count(
      advisory =>
        this.filterRow(advisory)
      )
      .then(count => (this.advisoryCount = count));
  }

  //loads the filtered advisories into the array.
  reloadAdvisories(params) {
    this.advisoryResource
      .query(params,
      advisory =>
        this.filterRow(advisory)
      )
      .then(advisory => (this.advisories = advisory));
    // debugger; ToDo: Will execute till this point and breaks.
  }

  // Summary: This funcation validates the input search text as well as entered data rage. to make sure they are part of the Adviroy results
  // Returns: True if criteria matches else False.
  filterRow(advisory: Advisory) {
    var typeVal = true;
    var dateVal = true;

    if (this.searchValue !== '')
      typeVal = advisory.type.toLowerCase().includes(this.searchValue.toLowerCase()) || advisory.title.toLowerCase().includes(this.searchValue.toLowerCase());

    if (this.fromDate !== "" && this.toDate !== "") {
      var fromD = new Date(this.fromDate);
      var toD = new Date(this.toDate);
      var D = new Date(advisory.date);
      dateVal = D >= fromD && D <= toD;
    }
    return typeVal && dateVal;
  }

}
