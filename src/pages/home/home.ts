import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public prestoData: Array<any> = [];


  /**
   * Creates an instance of HomePage.
   * @param {NavController} navCtrl 
   * @param {ServiceProvider} service 
   * @param {Storage} storage 
   * @memberof HomePage
   */
  constructor(public navCtrl: NavController, private service: ServiceProvider, private storage: Storage) {
    this.storage.get('accounts').then((value: object) => {
      for (const key in value) {
        if (value.hasOwnProperty(key)) {
          const element = value[key];

          this.service.getBalance(key, element).subscribe((data: Array<any>) => this.prestoData.push({ 'username': key, 'cardData': data }));

        }
      }
    });

  }

}
