import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RestService } from '../../service/rest.service';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RestComponent implements OnInit {

  restdata: any[];
  

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.getAll()
    //this.getAllRecords();
  }

  getAll() {
    this.restService.getAll().subscribe(result => {
      console.log(result)
      this.restdata = result
    });
  }

  getAllRecords() {
    this.restService.getAllRecords().subscribe(result => {
      console.log(result)
      this.restdata = result
    });
  }

}
