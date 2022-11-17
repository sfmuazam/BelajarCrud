import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { ApiService } from "../api.service";
import { Http } from "@capacitor-community/http";

@Component({
  selector: 'app-anggota-edit',
  templateUrl: './anggota-edit.page.html',
  styleUrls: ['./anggota-edit.page.scss'],
})
export class AnggotaEditPage implements OnInit {
  id_anggota: any;
  nama: any;
  password: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public LoadingController: LoadingController,
  ) {
    this.route.params.subscribe((param: any) => {
      this.id_anggota = param.id_anggota;
      console.log(this.id_anggota);
      this.ambilAnggota(this.id_anggota);
    })
  }

  ngOnInit() {
  }


  ambilAnggota(id_anggota: any) {
    this._apiService.ambilAnggota(id_anggota).subscribe((res: any) => {
      console.log('sukses', res);
      let anggota = res;
      //console.log(Anggota);
      this.nama = anggota.nama;
      this.password = anggota.password;
    }, (error: any) => {
      console.log('error', error);
      alert('gagal ambil data');
    })
  }


  editAnggota() {
    let url = this._apiService.apiURL() + "/edit.php";
    Http.request({
      method: "POST",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: {
        id_anggota: this.id_anggota,
        nama: this.nama,
        password: this.password,
      },
    }).then((data) => {
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Berhasil Edit Data Anggota',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
      this.router.navigateByUrl('/anggota');
    }, (err) => {
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal Edit Data Anggota',
        buttons: ['OK']
      }).then(res => {
        res.present()
      });
    })
  }
}
