import { Component, Input, OnInit } from '@angular/core';

import { alertStatus } from './alert.config';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  public isConected!: boolean;
  public iconAlert!: string;

  @Input()
  public textAlert: string = 'Texto por defecto';
  @Input()
  public statusAlert: alertStatus = alertStatus.INFO;
  @Input()
  public showIcon: boolean = false

  constructor( ) {
  }

  ngOnInit(): void {
    this.changeStatysAlert();
  }

  changeStatysAlert() {
    switch (this.statusAlert) {
      case alertStatus.INFO:
        this.iconAlert = 'pi-info-circle';
        break;
      case alertStatus.SUCCESS:
        this.iconAlert = 'pi-check-circle';
        break;
      case alertStatus.WARNING:
        this.iconAlert = 'pi-bell';
        break;
      case alertStatus.DANGER:
        this.iconAlert = 'pi-megaphone';
        break;
      default: alertStatus.INFO
    }
  }

}
