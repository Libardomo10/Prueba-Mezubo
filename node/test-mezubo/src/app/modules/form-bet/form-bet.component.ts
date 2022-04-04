import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { PublicHttpService } from 'src/app/services/public-http.service';

@Component({
  selector: 'app-form-bet',
  templateUrl: './form-bet.component.html',
  styleUrls: ['./form-bet.component.css']
})
export class FormBetComponent implements OnInit {

  form = new FormGroup({});
  changeColorInput: boolean = false;

  constructor(private httpService: PublicHttpService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      idRoulette: new FormControl(null, [Validators.required]),
      betNumber: new FormControl(null, [Validators.min(0), Validators.max(36), Validators.required]),
      betColor: new FormControl(this.changeColorInput, [Validators.required]),
      amountMoney: new FormControl(null, [Validators.max(10000), Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.required])
    });
  }
  addBet() {
    this.httpService.addBet(this.form.value).subscribe(
      (response: any) => {      
        if (response.success) {
          this.initForm();
          this.messageService.add({
            severity:'success',
            summary: 'Apuesta exitosa',
            detail: 'Apuesta realizada correctamente.',
            key: 'sc'
          });
        }
      }
    );
  }
  changeColor() {
    this.changeColorInput = !this.changeColorInput;
  }
}
