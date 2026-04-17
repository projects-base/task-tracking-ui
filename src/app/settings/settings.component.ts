import {Component, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SettingsService} from "../../services/settings.service";
import {Environment} from "@angular/cli/lib/config/workspace-schema";
import {environment} from "../../environments/environment";
import {SettingFields} from "../../model/SettingFields";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  @Input() fieldSettings:SettingFields = new SettingFields();

  constructor(public settingsService : SettingsService) {
    this.getFields();
  }

  ngOnInit() {
  }

  getFields() {
    this.settingsService.getAllFieldStatus().subscribe(res => {
      this.fieldSettings = res;
    });
  }

  updateField(val: string) {
    console.log(val);
    switch (val) {
      case "HEADER":
        this.fieldSettings.HEADER = !this.fieldSettings.HEADER;
        break;
      case "SIDE_BAR":
        this.fieldSettings.SIDE_BAR = !this.fieldSettings.SIDE_BAR;
        break;
      case "SIDE_BAR_ANIMATION":
        this.fieldSettings.SIDE_BAR_ANIMATION = !this.fieldSettings.SIDE_BAR_ANIMATION;
        break;
      case "HEADER_ANIMATION":
        this.fieldSettings.HEADER_ANIMATION = !this.fieldSettings.HEADER_ANIMATION;
        break;
      case "TASK_ANIMATION":
        this.fieldSettings.TASK_ANIMATION = !this.fieldSettings.TASK_ANIMATION;
        break;
      case "PROJECT_ANIMATION":
        this.fieldSettings.PROJECT_ANIMATION = !this.fieldSettings.PROJECT_ANIMATION;
        break;
    }
    this.saveField(val);
    this.getFields();
  }

  private saveField(val: string) {
    console.log("Save field ", val);
    this.settingsService.updateField(val).subscribe(res =>  {
      if (res === null) {
        console.log("error");
      }
    })
  }
}
