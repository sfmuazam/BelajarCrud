import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from "../api.service";
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anggota',
  templateUrl: './anggota.page.html',
  styleUrls: ['./anggota.page.scss'],
})
export class AnggotaPage implements OnInit {
  id_anggota: any;
  nama: any;
  password: any;
  token: any;
  anggota: any[] = [];
  constructor(
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.getAnggota();
  }

  ngOnInit() {
    console.log('cek fungsi halaman event init jalan');
  }
  loadToken() {
    this.token = this.authService.getData('token');
    if (this.token != null) {
      this.nama = this.authService.getData('username');
    } else {
      this.router.navigateByUrl('/login');
    }
  }
  //membuat fungsi logout
  logout() {
    this.authService.logout(); // lempar ke authService lalu cari fungsi logout
    this.router.navigateByUrl('/', { replaceUrl: true }); // alihkan ke halama
  }

  ionViewDidEnter() {
    console.log("jika selesai loading");
    this.getAnggota();
  }

  getAnggota() {
    this._apiService.getAnggota().subscribe((res: any) => {
      console.log("sukses", res);
      this.anggota = res;
    }, (error: any) => {
      console.log("gagal", error);
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal memuat data Anggota',
        buttons: ['OK']
      }).then(res => {
        res.present();
      })
    })
  }

  deleteAnggota(id: any) {
    this.alertController.create({
      header: 'perhatian',
      subHeader: 'Yakin menghapus data ini?',
      buttons: [
        {
          text: 'Batal',
          handler: (data: any) => {
            console.log('dibatalkan', data);
          }
        },
        {
          text: 'Yakin',
          handler: (data: any) => {
            //jika tekan yakin
            this._apiService.deleteAnggota(id).subscribe((res: any) => {
              console.log("sukses", res);
              this.getAnggota();
            }, (error: any) => {
              console.log("error", error);
              this.alertController.create({
                header: 'Notifikasi',
                message: 'gagal memuat data Anggota',
                buttons: ['OK']
              }).then(res => {
                res.present();
              })
            })
          }
        }
      ]
    }).then(res => {
      res.present();
    })
  }
}

