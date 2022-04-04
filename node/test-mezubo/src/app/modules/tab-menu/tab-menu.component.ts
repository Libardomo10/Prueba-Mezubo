import { Component, OnInit } from '@angular/core';
import { PublicHttpService } from 'src/app/services/public-http.service';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.css']
})
export class TabMenuComponent implements OnInit {

  activeIndex: number = 0;
  activeIndexClose: number = 0;
  listRoulettes: any[] = [];
  idRouletteClose: number = 0;
  showListBets: boolean = false;

  constructor(private httpService: PublicHttpService) { }

  ngOnInit(): void {
    this.getListRoulettes();
  }
  
  getListRoulettes() {
    this.httpService.getListRoulettes().subscribe(
      (response: any) => {
        if (response) {
          this.listRoulettes = response;
        }
      }
    );
  }

  closeRoulette() {
    if (this.idRouletteClose != 0) {
      this.showListBets = true;
      this.activeIndexClose = 1;
    }
  }

}
