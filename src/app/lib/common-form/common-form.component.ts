import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'accounting-common-form',
  templateUrl: './common-form.component.html',
  styleUrls: ['./common-form.component.scss'],
})
export class CommonFormComponent implements OnInit {
  accountingForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }
  private buildForm() {
    this.accountingForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
      amount: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(15)]]
  });

  }
}
