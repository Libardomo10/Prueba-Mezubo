import { Component, Input, OnInit } from '@angular/core';
import { PublicHttpService } from 'src/app/services/public-http.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-open-roulette',
  templateUrl: './open-roulette.component.html',
  styleUrls: ['./open-roulette.component.css']
})
export class OpenRouletteComponent implements OnInit {

  idRouletteOpen: number = 0;
  public mostrarMsj: string = '';

  constructor(private httpService: PublicHttpService,
    private messageService: MessageService) { }

  ngOnInit(): void {
  }


  openRoulette(idReoulette: number) {
    this.httpService.openRoulette(idReoulette).subscribe(
      (response: any) => {
        if (response) {
          this.mostrarMsj = response.msg;
          console.log(this.mostrarMsj);
          this.messageService.add({
            severity:'success',
            summary: this.mostrarMsj,
            detail: 'Apertura de ruleta correcta.',
            key: 'sc'
          });
        }
      }
    );
  }

}
