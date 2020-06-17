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

  tabHeaders = [];


  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.getAll()
    //this.getAllRecords();

    //this.restdata = this.getRecords();
    //console.log("Length: " + this.restdata.length);
  }

  getAll() {
    this.restService.getAll().subscribe(result => {
      console.log(result)
      this.restdata = result

      this.setTabHeaders(result);
    });
  }



  setTabHeaders(result) {
    var i = 0;
    var tabset = new Set();

    result.forEach(element => {
      console.log("Tabs " + element.testID);
      tabset.add(element.testID);

    });
    this.tabHeaders = Array.from(tabset);
    console.log("The first tab: " + this.tabHeaders[0]);
  }

  getAllRecords() {
    this.restService.getAllRecords().subscribe(result => {
      console.log(result)
      this.restdata = result
    });
  }

}
