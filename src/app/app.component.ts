import { fa1, fa2, fa3, faQuestion, fas } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {constructor(library: FaIconLibrary) {
  library.addIconPacks(fas);
}

  title = 'AngularTest';
  iconNumber=-1;
  iconsArray=[faQuestion,faQuestion,faQuestion,faQuestion,faQuestion]
  delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
    }
 async getRandomIcon(){
  let keys=Object.keys(fas);
  keys[ keys.length * Math.random() << 0]
    this.iconNumber++;
    if(this.iconNumber>4)this.iconNumber=0;
    let localIconNumber= this.iconNumber;
    this.iconsArray[localIconNumber]=fa3;
    await this.delay(1000);
    this.iconsArray[localIconNumber]=fa2;
    await this.delay(1000);
    this.iconsArray[localIconNumber]=fa1;
    await this.delay(1000);
    this.iconsArray[localIconNumber]=fas[keys[ keys.length * Math.random() << 0]]
  }
}