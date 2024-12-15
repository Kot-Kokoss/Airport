import { Component } from '@angular/core';
import { sharedImports } from '../imports/imports';
import { BaseService } from '../services/base.service';
import { ColumnTranslationService } from '../services/column-translate.service';

@Component({
  selector: 'app-watch-stats',
  standalone: true,
  imports: [...sharedImports],
  templateUrl: './watch-stats.component.html',
  styleUrl: './watch-stats.component.scss',
})
export class WatchStatsComponent {
  displayedColumns: string[] = [];
  dataSource: any[] = [];
  filteredDataSource: any[] = [];
  filter: any = '';
  filterName: string = '';

  constructor(
    public baseService: BaseService,
    public transle: ColumnTranslationService
  ) {}

  flattenObject(
    obj: any,
    parentKey: string = '',
    result: { [key: string]: any } = {}
  ): { [key: string]: any } {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        let newKey = parentKey ? `${parentKey}${key}` : key;
        if (
          typeof obj[key] === 'object' &&
          obj[key] !== null &&
          !Array.isArray(obj[key])
        ) {
          this.flattenObject(obj[key], newKey, result);
        } else {
          result[newKey] = obj[key];
        }
      }
    }
    return result;
  }

  transleColumn(column: string): string {
    return this.transle.getTranslation(column);
  }

  getElement(el: any) {
    if (Array.isArray(el)) {
      return el.join(',\n');
    }
    return el;
  }

  applyFilter() {
    if (this.filterName === 'коду должности') {
      this.filteredDataSource = this.dataSource.filter((item) => {
        return (
          item.PositionID &&
          String(item.PositionID)
            .toLowerCase()
            .includes(this.filter.toLowerCase())
        );
      });
    } else if (this.filterName === 'типу самолета') {
      this.filteredDataSource = this.dataSource.filter((item) => {
        return (
          item.TypeID &&
          String(item.TypeID).toLowerCase().includes(this.filter.toLowerCase())
        );
      });
    } else if (this.filterName === 'коду рейса') {
      this.filteredDataSource = this.dataSource.filter((item) => {
        return (
          item.FlightID &&
          String(item.FlightID)
            .toLowerCase()
            .includes(this.filter.toLowerCase())
        );
      });
    } else {
      this.filteredDataSource = this.dataSource;
    }
  }

  onAction(type: string): void {
    if (type === 'Employee') {
      this.baseService.getEmployeeStats().subscribe((data) => {
        this.displayedColumns = Object.keys(this.flattenObject(data[0]));
        this.dataSource = data.map((el: any) => {
          return this.flattenObject(el);
        });
        this.filterName = 'коду должности';
        this.applyFilter();
      });
    }
    if (type === 'Plane') {
      this.baseService.getPlaneStats().subscribe((data) => {
        this.displayedColumns = Object.keys(this.flattenObject(data[0]));
        this.dataSource = data.map((el: any) => {
          return this.flattenObject(el);
        });
        this.filterName = 'типу самолета';
        this.applyFilter();
      });
    }
    if (type === 'Crew') {
      this.baseService.getCrewStats().subscribe((data) => {
        this.displayedColumns = Object.keys(this.flattenObject(data[0]));
        this.dataSource = data.map((el: any) => {
          return this.flattenObject(el);
        });
        this.filterName = '';
        this.applyFilter();
      });
    }
    if (type === 'Flight') {
      this.baseService.getFlightStats().subscribe((data) => {
        this.displayedColumns = Object.keys(this.flattenObject(data[0]));
        this.dataSource = data.map((el: any) => {
          return this.flattenObject(el);
        });
        this.filterName = '';
        this.applyFilter();
      });
    }
    if (type === 'Ticket') {
      this.baseService.getTicketStats().subscribe((data) => {
        this.displayedColumns = Object.keys(this.flattenObject(data[0]));
        this.dataSource = data.map((el: any) => {
          return this.flattenObject(el);
        });
        this.filterName = 'коду рейса';
        this.applyFilter();
      });
    }
  }
}
