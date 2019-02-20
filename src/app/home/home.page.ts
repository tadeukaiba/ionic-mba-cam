import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public images: string[] = [];

  constructor(private camera: Camera) { }

  public adicionarCamera() {
    let options : CameraOptions = {
      quality : 75,
      destinationType : this.camera.DestinationType.DATA_URL,
      sourceType : this.camera.PictureSourceType.CAMERA,
      allowEdit : true,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 120,
      targetHeight: 120,
      saveToPhotoAlbum: false
    }
    this.takePicture(options);
  }

  public adicionarGaleria() {
    let options : CameraOptions = {
      destinationType : this.camera.DestinationType.DATA_URL,
      sourceType : this.camera.PictureSourceType.PHOTOLIBRARY,
      encodingType: this.camera.EncodingType.JPEG,
      allowEdit : true,
      targetWidth: 120,
      targetHeight: 120,
    }
    this.takePicture(options);
  }

  private takePicture(options:CameraOptions) {
    // const options: CameraOptions = {
    //   quality: 100,
    //   destinationType: this.camera.DestinationType.FILE_URI,
    //   encodingType: this.camera.EncodingType.JPEG,
    //   mediaType: this.camera.MediaType.PICTURE
    // }
    
    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.images.push(base64Image);
    }, (err) => {
      console.log(err);
    });
  }

}
