import {Component, Input} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import { APIService } from "../services/api.service";
@Component({
  selector: 'parts-table',
  styleUrls: ['./parts-table.component.css'],
  templateUrl: './parts-table.component.html',
})
export class DataCollectionComponent {
  @Input() path: string="test-local";
  @Input() displayedColumns: any[]=[];
  dataSource: MyDataSource;
  dataSubject = new BehaviorSubject<any[]>([]);
  constructor(private apiService: APIService) {}

  ngOnInit() {
    this.dataSource =  new MyDataSource(this.dataSubject);
    this.apiService.getData(this.path).subscribe({
      next: value => this.dataSubject.next([value])
    });
  }
}
export class MyDataSource extends DataSource<any[]> {
  constructor(private subject: BehaviorSubject<any[]>) {
    super ();
  }
  connect (): Observable<any[]> {
    return this.subject.asObservable();
  }
  disconnect (): void {}
}

