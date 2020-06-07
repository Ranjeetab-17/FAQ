import { Component, OnInit } from '@angular/core';
import Viewer from 'viewerjs';
import { HttpClient } from '@angular/common/http';
import { IUsers } from 'src/app/models/iusers';
import { IFAQ } from 'src/app/models/IFAQ';
import { NgloaderService } from 'src/app/services/ngloader.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  private users: Array<IUsers>;
  private faqs: IFAQ;
  current_selected: string;

  typesOfShoes: string[] = ['All', 'Cashtile', 'Cashtile OBO', 'Blotter', 'DCI'];

  constructor(private _http: HttpClient, private loaderService: NgloaderService) { }

  ngOnInit() {
    this.getUSers();
    this.getFAQs();
  }

  viewImage() {

    let options = {
      backdrop: true,
      button: true,
      navbar: true,
      toolbar: true,
      inline: false,
      fullscreen: true,
      rotatable: true,
      zoomable: true,
      viewed() {
        viewer.zoomTo(1);
      },
    }

    const viewer = new Viewer(document.getElementById('images'), options);

    Viewer.setDefaults(options);

    viewer.show();
  }

  getUSers() {
    this._http.get('assets/Data/topans.json').subscribe((res: Array<IUsers>) => {
      this.users = res;
    })
  }

  getFAQs() {
    this._http.get('assets/Data/faqs.json').subscribe((res: IFAQ) => {
      this.faqs = res;
    })
  }

  onSelection(e, v) {
    this.current_selected = e.option.value;

    this._http.get('https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/customers.json').subscribe((res) => {
      console.log('called');
    })
  }

}
