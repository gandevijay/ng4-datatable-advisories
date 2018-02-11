import { Component, OnInit, ViewChild } from '@angular/core';
import { Report } from '../report';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular-4-data-table';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  private reportResource: DataTableResource<Report>;
  private searchValue: string = "";
  private reports: Array<Report> = [];
  private reportCount: number = 0;
  private data: Array<Report> = [];
  private msg;

  translations = <DataTableTranslations>{
    indexColumn: 'Index column',
    expandColumn: 'Expand column',
    selectColumn: 'Select column',
    paginationLimit: 'Max results',
    paginationRange: 'Showing'
};

@ViewChild(DataTable) reportsTable;

  constructor() {
    this.data =  [
      { type: 'Measurements', date: '05/01/2017', title: 'c181_MM_201707', link: 'http://www.bing.com'},
      { type: 'Measurements', date: '07/01/2017', title: 'd181_MM_201707', link: 'http://www.google.com'},
      { type: 'Measurements', date: '08/01/2017', title: 'e181_MM_201707', link: 'http://www.bing.com'},
      { type: 'Measurements', date: '10/01/2017', title: 'f181_MM_201707', link: 'http://www.google.com'},
      { type: 'Measurements', date: '05/01/2017', title: 'c181_MM_201707', link: 'http://www.bing.com'},
      { type: 'Measurements', date: '07/01/2017', title: 'd181_MM_201707', link: 'http://www.google.com'},
      { type: 'Measurements', date: '08/01/2017', title: 'e181_MM_201707', link: 'http://www.bing.com'},
      { type: 'Measurements', date: '05/01/2017', title: 'c181_MM_201707', link: 'http://www.bing.com'},
      { type: 'Measurements', date: '07/01/2017', title: 'd181_MM_201707', link: 'http://www.google.com'},
      { type: 'Measurements', date: '08/01/2017', title: 'e181_MM_201707', link: 'http://www.bing.com'},
      { type: 'Measurements', date: '05/01/2017', title: 'c181_MM_201707', link: 'http://www.bing.com'},
      { type: 'Measurements', date: '07/01/2017', title: 'd181_MM_201707', link: 'http://www.google.com'},
      { type: 'Measurements', date: '08/01/2017', title: 'e181_MM_201707', link: 'http://www.bing.com'},
      { type: 'Measurements', date: '05/01/2017', title: 'c181_MM_201707', link: 'http://www.bing.com'},
      { type: 'Measurements', date: '07/01/2017', title: 'd181_MM_201707', link: 'http://www.google.com'},
      { type: 'Measurements', date: '08/01/2017', title: 'e181_MM_201707', link: 'http://www.bing.com'},
      { type: 'Measurements', date: '05/01/2017', title: 'c181_MM_201707', link: 'http://www.bing.com'},
      { type: 'Measurements', date: '07/01/2017', title: 'd181_MM_201707', link: 'http://www.google.com'},
      { type: 'Measurements', date: '08/01/2017', title: 'e181_MM_201707', link: 'http://www.bing.com'},
      { type: 'Measurements', date: '07/01/2017', title: 'd181_MM_201707', link: 'http://www.google.com'},
      { type: 'Measurements', date: '08/01/2017', title: 'e181_MM_201707', link: 'http://www.bing.com'},
      { type: 'Measurements', date: '10/01/2017', title: 'f181_MM_201707', link: 'http://www.google.com'},
      { type: 'Measurements', date: '05/01/2017', title: 'c181_MM_201707', link: 'http://www.bing.com'},
      { type: 'Measurements', date: '07/01/2017', title: 'd181_MM_201707', link: 'http://www.google.com'},
      { type: 'Measurements', date: '08/01/2017', title: 'e181_MM_201707', link: 'http://www.bing.com'},
      { type: 'Measurements', date: '05/01/2017', title: 'c181_MM_201707', link: 'http://www.bing.com'},
      { type: 'Measurements', date: '07/01/2017', title: 'd181_MM_201707', link: 'http://www.google.com'},
      { type: 'Measurements', date: '08/01/2017', title: 'e181_MM_201707', link: 'http://www.bing.com'},
      { type: 'Measurements', date: '05/01/2017', title: 'c181_MM_201707', link: 'http://www.bing.com'},
      { type: 'Measurements', date: '07/01/2017', title: 'd181_MM_201707', link: 'http://www.google.com'},
      { type: 'Measurements', date: '08/01/2017', title: 'e181_MM_201707', link: 'http://www.bing.com'},
      { type: 'Measurements', date: '05/01/2017', title: 'c181_MM_201707', link: 'http://www.bing.com'},
      { type: 'Measurements', date: '07/01/2017', title: 'd181_MM_201707', link: 'http://www.google.com'},
      { type: 'Measurements', date: '08/01/2017', title: 'e181_MM_201707', link: 'http://www.bing.com'},
      { type: 'Measurements', date: '05/01/2017', title: 'c181_MM_201707', link: 'http://www.bing.com'},
      { type: 'Measurements', date: '07/01/2017', title: 'd181_MM_201707', link: 'http://www.google.com'},
      { type: 'Measurements', date: '08/01/2017', title: 'e181_MM_201707', link: 'http://www.bing.com'}
    ] as Array<Report>;

    this.reports = this.data;

    this.reportResource = new DataTableResource(this.reports);
    this.reportResource.count().then(count => this.reportCount = count);
  }

  ngOnInit() {
  }

  search(params, searchValue : string ):void {
    params.limit = 14;
    params.offset = 0;
    //this.msg = params.offset;
    this.searchValue = searchValue.toLowerCase();

    this.reloadReports(params);

    this.reportResource.count(report =>
      report.type.toLowerCase().includes(this.searchValue)
      || report.date.toLowerCase().includes(this.searchValue)
      || report.title.toLowerCase().includes(this.searchValue)).then(count => this.reportCount = count);
  }

  reloadReports(params) {
    this.msg = params.limit;
    this.reportResource.query(params,report =>
          report.type.toLowerCase().includes(this.searchValue)
          || report.date.toLowerCase().includes(this.searchValue)
          || report.title.toLowerCase().includes(this.searchValue)
        ).then(report => this.reports = report);
  }

}
