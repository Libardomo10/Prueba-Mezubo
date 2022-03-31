import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PublicHttpService } from "../../services/public-http.service";

@Component({
  selector: 'app-create-roulette',
  templateUrl: './create-roulette.component.html',
  styleUrls: ['./create-roulette.component.css']
})
export class CreateRouletteComponent implements OnInit {

  idRoulette: any;
  idRouletteOpen: any;
  public mostrarMsj: string = '';
  form = new FormGroup({});
  changeColorInput: boolean = false;
  listBets: any[] = [];
  showTable: boolean = false;
  showTableRoulettes: boolean = false;
  listRoulettes: any[] = [];

  constructor(private httpService: PublicHttpService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      idRoulette: new FormControl(0, [Validators.required]),
      betNumber: new FormControl(null, [Validators.min(0), Validators.max(36), Validators.required]),
      betColor: new FormControl(this.changeColorInput, [Validators.required]),
      amountMoney: new FormControl(null, [Validators.max(10000), Validators.required])
    });
  }

  createRoulette() {
    this.httpService.createAndGetIdRoulette().subscribe(
      (response: any) => {
        if (response) {
          this.idRoulette = response.insertId;
          this.idRouletteOpen = null;
        }
      }
    );
  }
  openRoulette(idReoulette: number) {
    this.httpService.openRoulette(idReoulette).subscribe(
      (response: any) => {
        if (response) {
          this.mostrarMsj = response.msg;
          this.idRouletteOpen = idReoulette;
          this.idRoulette = null;
        }
      }
    );
  }
  addBet() {
    this.form.get('idRoulette')?.setValue(this.idRouletteOpen);
    console.log("Formulario", this.form.value);
    this.httpService.addBet(this.form.value).subscribe(
      (response: any) => {
        console.log(response);        
        if (response.msg) {
          this.mostrarMsj = response.msg;
          this.initForm();
        }
      }
    );
  }
  closeRoulette(idRoulette: number) {
    this.httpService.closeRoulette(idRoulette).subscribe(
      (response: any) => {
        if (response) {
          this.showTable = true;
          this.listBets = response;
        }
      }
    );
  }
  getListRoulettes() {
    this.httpService.getListRoulettes().subscribe(
      (response: any) => {
        if (response) {
          this.showTableRoulettes = true;
          this.listRoulettes = response;
        }
      }
    );
  }
}
