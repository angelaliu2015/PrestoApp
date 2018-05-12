import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  public username: string;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  public async addAccount(): Promise<any> {
    let accounts: object = await this.storage.get('accounts');

    if (accounts == null) { accounts = {}; }
    accounts[this.username] = this.password;

    await this.storage.set('accounts', accounts);
    console.log('saved username and password');

  }

}
