import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { PublicHttpService } from "../../services/public-http.service";

@Component({
  selector: 'app-create-roulette',
  templateUrl: './create-roulette.component.html',
  styleUrls: ['./create-roulette.component.css']
})
export class CreateRouletteComponent implements OnInit {

  idRoulette: any;

  constructor(private httpService: PublicHttpService,
    private messageService: MessageService) { }

  ngOnInit() {
  }

  createRoulette() {
    this.httpService.createAndGetIdRoulette().subscribe(
      (response: any) => {
        if (response) {
          this.idRoulette = response.insertId;
          this.messageService.add({
            severity:'success',
            summary: 'Exito',
            detail: 'Ruleta ' + this.idRoulette + ' creada correctamente.',
            key: 'sc'
          });
        }
      }
    );
  }
}
