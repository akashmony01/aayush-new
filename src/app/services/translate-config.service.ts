import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {Constants} from '@app/common/constants'


@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {
  constructor( private translate: TranslateService ) { 
    if (localStorage.getItem(Constants.LANGUAGE_SELECTION) !== null){
        this.translate.use(localStorage.getItem(Constants.LANGUAGE_SELECTION));
    }
    else
    {
      this.getDefaultLanguage();
    }
  }

  getDefaultLanguage(){
    let language = this.translate.getBrowserLang();
    if(language !== null && (language === 'te' || language === 'telugu')) {
      this.setLanguage(Constants.TELUGU_LANGUAGE);
    } else {
      this.setLanguage(Constants.DEFAULT_LANGUAGE);
    }
    return language;
  }

  setLanguage(setLang) {
    this.translate.setDefaultLang(setLang);
    this.translate.use(setLang);
  }
}