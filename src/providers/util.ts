import { LoadingController, ToastController, Loading } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Toast } from '@ionic-native/toast';

@Injectable()
export class UtilProvider {

  constructor(public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    console.log('contrutor Util');
   }

  private loader;
  loading: Loading;

  public loaderIn(conteudo: string) {

    if (!conteudo || conteudo == '') {
      conteudo = 'Carregando...';
    }

    this.loader = this.loadingCtrl.create({
      content: conteudo,
    });
    this.loader.present();
  }

  public loaderOut() {
    this.loader.dismiss();
  }

  static showToast(object, message, pos) {
    let toast = object.toastCtrl.create({
      message: message,
      duration: 3000,
      position: pos
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

  //top, middle or bottom
  public showToast(text: string, duration: number, position: string) {
    //this.favorite = true;
    if (!position || position == '') position = 'bottom';
    let toast = this.toastCtrl.create({
      message: text,
      duration: duration,
      position: position,
      showCloseButton: true,
      closeButtonText: 'x'

    });
    toast.present();
  }

  public presentWithGif1() {
    this.loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
        <div class="custom-spinner-container">
          <img class="loading" width="120px" height="120px"  src="assets/loader1.gif" />
        </div>`
    });

    return this.loading.present();
  }

  public presentWithGif2() {
    this.loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
        <div class="custom-spinner-container">
          <img class="loading" width="70px" height="70px" src="assets/loader2.gif" />
        </div>`
    });

    return this.loading.present();
  }

  public presentWithMessage(message) {
    this.loading = this.loadingCtrl.create({
      content: message
    });

    return this.loading.present();
  }

  dismiss() {
    return new Promise((resolve, reject) => {
      if (this.loading) {
        return this.loading.dismiss(resolve(true)).catch(error => {
          console.log('loading error: ', error);
        });
      } else {
        resolve(true);
      }
    });

  }

}
