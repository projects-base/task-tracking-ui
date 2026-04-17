import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SettingFields} from "../model/SettingFields";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  domainUrl:string = "";
  constructor(public http : HttpClient) {
    this.domainUrl = environment.baseUrl;
  }

  getAllFieldStatus() : Observable<SettingFields> {
    return this.http.get<SettingFields>(this.domainUrl + "api/setting/field-status");
  }

  updateField(val: string) : Observable<boolean> {
    return this.http.put<boolean>(this.domainUrl + "api/setting/field-status-update/" + val, {});
  }
}
