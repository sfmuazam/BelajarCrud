import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { ApiService } from "../api.service";
import { Http } from "@capacitor-community/http";

@Component({
  selector: 'app-anggota-tambah',
  templateUrl: './anggota-tambah.page.html',
  styleUrls: ['./anggota-tambah.page.scss'],
})
export class AnggotaTambahPage implements OnInit {
  id_anggota: any;
  nama: any;
  password: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,

  ) { }

  ngOnInit() {
  }

  addAnggota() {
    let url = this._apiService.apiURL() + "/tambah.php";
    Http.request({
      method: "POST",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: {
        id_anggota: this.id_anggota,
        nama: this.nama,
        password: this.password
      },
    }).then((data: any) => {
      this.id_anggota = '';
      this.nama = '';
      this.password = '';
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Berhasil Input data Anggota',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
      this.router.navigateByUrl('/anggota');
    }, (error: any) => {
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal Input data Anggota',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
    })
  }
}
