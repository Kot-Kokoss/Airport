import { Injectable } from '@angular/core';
import { Translations } from '../consts/translate-consts';

@Injectable({
  providedIn: 'root',
})
export class ColumnTranslationService {
  private translations: { [key: string]: string };

  constructor() {
    this.translations = Translations;
  }

  getTranslation(column: string): string {
    return this.translations[column] || column;
  }
}
