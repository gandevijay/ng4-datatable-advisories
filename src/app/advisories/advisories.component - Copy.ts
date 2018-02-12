// import { Component, OnInit, ViewChild } from '@angular/core';
// import { Advisory } from './advisory';
// import { DataTable, DataTableTranslations, DataTableResource } from 'angular-4-data-table';
// import { AdvisoryService } from './advisory.service';
// import { Response } from '@angular/http/src/static_response';
// import { Observable } from 'rxjs/Observable';
// import { HttpModule } from '@angular/http';

// @Component({
//   selector: 'app-advisories',
//   providers: [AdvisoryService],
//   templateUrl: './advisories.component.html',
//   styleUrls: ['./advisories.component.css']
// })
// export class AdvisoriesComponent {
//   private advisoryResource: DataTableResource<Advisory>;
//   private searchValue = '';
//   public advisories: Array<Advisory> = [];
//   private aryAdvisory: Advisory[];
//   advisoryCount = 0;
//   private data: Array<Advisory> = [];
//   private msg;
//   public fromDate;
//   public toDate;

//   translations = <DataTableTranslations>{
//     indexColumn: 'Index column',
//     expandColumn: 'Expand column',
//     selectColumn: 'Select column',
//     paginationLimit: 'Max results',
//     paginationRange: 'Showing'
//   };

//   @ViewChild(DataTable) advisoriesTable;

//   constructor(private _advisoriesService: AdvisoryService) {
//    /* this.data =  [
//       { type: 'advMeasurements', date: '05/01/2017', title: 'c181_MM_201707', link: 'http://www.bing.com'},
//       { type: 'advMeasurements', date: '07/01/2017', title: 'd181_MM_201707', link: 'http://www.google.com'},
//       { type: 'advMeasurements', date: '08/01/2017', title: 'e181_MM_201707', link: 'http://www.bing.com'},
//       { type: 'advMeasurements', date: '10/01/2017', title: 'f181_MM_201707', link: 'http://www.google.com'},
//       { type: 'advMeasurements', date: '05/01/2017', title: 'c181_MM_201707', link: 'http://www.bing.com'},
//       { type: 'advMeasurements', date: '07/01/2017', title: 'd181_MM_201707', link: 'http://www.google.com'},
//       { type: 'advMeasurements', date: '08/01/2017', title: 'e181_MM_201707', link: 'http://www.bing.com'},
//       { type: 'advMeasurements', date: '05/01/2017', title: 'c181_MM_201707', link: 'http://www.bing.com'},
//       { type: 'advMeasurements', date: '07/01/2017', title: 'd181_MM_201707', link: 'http://www.google.com'},
//       { type: 'advMeasurements', date: '08/01/2017', title: 'e181_MM_201707', link: 'http://www.bing.com'},
//       { type: 'advMeasurements', date: '05/01/2017', title: 'c181_MM_201707', link: 'http://www.bing.com'},
//       { type: 'advMeasurements', date: '07/01/2017', title: 'd181_MM_201707', link: 'http://www.google.com'},
//       { type: 'advMeasurements', date: '08/01/2017', title: 'e181_MM_201707', link: 'http://www.bing.com'},
//       { type: 'advMeasurements', date: '05/01/2017', title: 'c181_MM_201707', link: 'http://www.bing.com'},
//       { type: 'advMeasurements', date: '07/01/2017', title: 'd181_MM_201707', link: 'http://www.google.com'},
//       { type: 'advMeasurements', date: '08/01/2017', title: 'e181_MM_201707', link: 'http://www.bing.com'},
//       { type: 'advMeasurements', date: '05/01/2017', title: 'c181_MM_201707', link: 'http://www.bing.com'},
//       { type: 'advMeasurements', date: '07/01/2017', title: 'd181_MM_201707', link: 'http://www.google.com'},
//       { type: 'advMeasurements', date: '08/01/2017', title: 'e181_MM_201707', link: 'http://www.bing.com'}
//     ] as Array<Advisory>;
//     */
//         this.advisories = this.data;
//     this.advisoryResource = new DataTableResource(this.advisories);
//     this.advisoryResource.count().then(count => (this.advisoryCount = count));
//   }
//   // tslint:disable-next-line:use-life-cycle-interface
//   processQuery(vm: Advisory[]) {
//     this.advisories = vm;
//     this.advisoryResource = new DataTableResource(this.advisories);
//     this.advisoryResource.count().then(count => (this.advisoryCount = count));
//     }
//     processErrorMessage(error: any) {
//       debugger;
//       alert('Unable to process the request');
//     }

//   // tslint:disable-next-line:use-life-cycle-interface
//   ngOnInit() {
//           this._advisoriesService.query()
//      .subscribe(vm => this.processQuery(vm), error => this.processErrorMessage(error)
//      );
//   }

//   search(params, searchValue: string): void {
//     //this.reloadAdvisories(params);
//     params.limit = 14;
//     params.offset = 0;
//     this.msg = params.offset;
//     this.searchValue = searchValue.toLowerCase();
//     if (searchValue.length >= 1) {
//       this.reloadAdvisories(params);
//     }
//     this.advisoryResource
//       .count(
//         advisory =>
//           advisory.type.toLowerCase().includes(this.searchValue) ||
//           advisory.date.toLowerCase()>this.fromDate &&
//           advisory.title.toLowerCase()<this.toDate
//       )
//       .then(count => (this.advisoryCount = count));
//   }

//   reloadAdvisories(params) {
//     this.msg = params.limit;
//     this.advisoryResource
//       .query(params,
//         advisory =>
//           advisory.type.toLowerCase().includes(this.searchValue) ||
//           advisory.date.toLowerCase()>this.fromDate &&
//           advisory.title.toLowerCase()<this.toDate
//       )
//       .then(advisory => (this.advisories = advisory));
//     // debugger;
//     //   let finalResult = this.advisories.filter(r=>r.type.includes(this.searchValue));
//     //   if(this.fromDate !== '')
//     //   {
//     //     finalResult = finalResult.filter(r=> r.date > this.fromDate);
//     //   }
//     //   if(this.toDate !== ''){
//     //   finalResult=finalResult.filter(r=>r.date<this.toDate);
//     // }


//     //   this.advisoryResource = new DataTableResource(this.advisories);
//     // this.advisoryResource.count().then(count => (this.advisoryCount = count));
//     // this.getDatabyHttp();
//   }
// }
