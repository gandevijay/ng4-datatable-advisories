import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/Http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataTableParams } from 'angular-4-data-table/src/index';
import 'rxjs/add/operator/toPromise';
import { Advisory } from './advisory';
import { Observable } from 'rxjs/Observable';

const BASE_URL = 'https://demo7060061.mockable.io';
// const BASE_URL = './api/advisories/advisories.json';

function paramsToQueryString(params: DataTableParams) {
  const result = [];

  if (params.offset != null) {
    result.push(['_start', params.offset]);
  }
  if (params.limit != null) {
    result.push(['_limit', params.limit]);
  }
  if (params.sortBy != null) {
    result.push(['_sort', params.sortBy]);
  }
  if (params.sortAsc != null) {
    result.push(['_order', params.sortAsc ? 'ASC' : 'DESC']);
  }

  return result.map(param => param.join('=')).join('&');
}

@Injectable()
export class AdvisoryService {
  // constructor (private http: Http) {}
  constructor(private http: Http) {}

  query() {
    // Make the GET HTTP request:
    return this.http.get(BASE_URL).map(response => {
      return response.json() as Advisory[] || new Array<Advisory>();
    });
  }

}
