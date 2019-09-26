import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  currentValue = '0';
  userFirstInput;
  arithmetic;
  result: string;

  constructor() { }

  ngOnInit() {
  }

  setInput(value: number) {
      this.currentValue += value.toLocaleString();
      this.currentValue = Math.round(parseInt(this.currentValue)).toString();
  }


  allClear() {
    this.clearInputValue();
    this.arithmetic = '';
  }


  clearInputValue() {
    this.currentValue = '';
  }

  delete(){
    this.currentValue = this.currentValue.substring(0, this.currentValue.length-1);
  }


  add() {
    if (!this.currentValue) return;
    this.userFirstInput = this.currentValue;
    this.clearInputValue();
    this.arithmetic = '+';
  }


  subtract() {
    if (!this.currentValue) return;
    this.userFirstInput = this.currentValue;
    this.clearInputValue();
    this.arithmetic = '-';
  }


  multiply() {
    if (!this.currentValue) return;
    this.userFirstInput = this.currentValue;
    this.clearInputValue();
    this.arithmetic = '*';
  }


  divide() {
    if (!this.currentValue) return;
    this.userFirstInput = this.currentValue;
    this.clearInputValue();
    this.arithmetic = '/';
  }


  equal() {
    if (!this.currentValue) return;
    switch (this.arithmetic) {
      case '+':
        this.currentValue = (parseInt(this.userFirstInput) + parseInt(this.currentValue)).toString();
        break;

      case '-':
        this.currentValue = (parseInt(this.userFirstInput) - parseInt(this.currentValue)).toString();
        break;

      case '*':
        this.currentValue = (parseInt(this.userFirstInput) * parseInt(this.currentValue)).toString();
        break;

      case '/':
        this.currentValue = (parseInt(this.userFirstInput) / parseInt(this.currentValue)).toString();
        break;

      default: this.clearInputValue();
        break;
    }
  }


}
