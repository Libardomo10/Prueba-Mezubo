import { Component, Input, OnInit } from '@angular/core';
import { PublicHttpService } from 'src/app/services/public-http.service';

@Component({
  selector: 'app-list-bets',
  templateUrl: './list-bets.component.html',
  styleUrls: ['./list-bets.component.css']
})
export class ListBetsComponent implements OnInit {
  
  listBets: any[] = [];
  @Input() idRouletteClose: number = 0;
  @Input() showListBets: boolean = false;

  constructor(private httpService: PublicHttpService) { }

  ngOnInit(): void {
  }

  
  closeRoulette(idRoulette: number) {
    this.httpService.closeRoulette(idRoulette).subscribe(
      (response: any) => {
        if (response) {
          this.listBets = response;
        }
      }
    );
  }

}
