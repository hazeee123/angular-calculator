import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-calculator';
  input1 = 0;
  input2 = 0;
  result = 0;

  getInput1(value: string){
    const parsedInt = parseInt(value);

    if(!isNaN(parsedInt)) {
      this.input1 = parsedInt;
      console.log(this.input1);
    }
  }

  getInput2(value: string){
    const parsedInt = parseInt(value);

    if(!isNaN(parsedInt)) {
      this.input2 = parsedInt;
      console.log(this.input2);
    }
  }

  toAdd() {
    console.log(this.result = this.input1 + this.input2)
  }

  toSubtract() {
    console.log(this.result = this.input1 - this.input2)
  }

  toMultiply() {
    console.log(this.result = this.input1 * this.input2)
  }

  toDivide() {
    console.log(this.result = this.input1 / this.input2)
  }

}
