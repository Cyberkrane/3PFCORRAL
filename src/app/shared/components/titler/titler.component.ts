import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titler',
  templateUrl: './titler.component.html',
  styleUrls: ['./titler.component.scss']
})
export class TitlerComponent {

  @Input()title: string = 'revisar el titler, esta fallando.';

}
