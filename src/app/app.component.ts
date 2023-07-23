import { Component } from '@angular/core';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  password = ''
  includeLtrs = false;
  includeNmbrs = false;
  includeSym = false;
  length = 0;

  onChangeInput(value: string){
    const parsedValue = parseInt(value);
    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
  }

  includeLetters(){
    this.includeLtrs = !this.includeLtrs;
  }
  includeNumbers(){
    this.includeNmbrs = !this.includeNmbrs;
  }
  includeSymbols(){
    this.includeSym = !this.includeSym;
  }

  onButtonClick(){
    console.log(this.includeLtrs);
    console.log(this.includeNmbrs);
    console.log(this.includeSym);
    console.log(this.length);

    

    const validLetters = 'abcdefghijklmnopqrstuvwxyz'
    const validNumbers = '1234567890'
    const validSymbols = '!@#$%^&*'

    let validString = '';

    if(this.includeLtrs){
      validString+=validLetters;
    }
    if(this.includeNmbrs){
      validString+=validNumbers;
    }
    if(this.includeSym){
      validString+=validSymbols;
    }

    let generatedPass = ''

    for(let i=0; i<this.length; i++){
      const index = Math.floor(Math.random() * validString.length);
      generatedPass+= validString[index];
    }
    
    this.password = generatedPass;
    
  }


}
