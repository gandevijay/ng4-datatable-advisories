import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/Http'
import { Http } from '@angular/http/src/http';
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/Observable/of'
import { catchError, map, tap} from "rxjs/operators"

import { Report } from './report'



@Injectable()
export class ReportService {

  constructor(){}

}