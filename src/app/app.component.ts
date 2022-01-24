import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-task-payment-requests';
  selectedTab = 0;

  changeTab(index: number): void {
    this.selectedTab = index;
  }

  getClassName(value: any): void{
    console.log(value);
  }
}
