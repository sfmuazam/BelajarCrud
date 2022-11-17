import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient,
  ) {

  }

  //link API
  apiURL() {
    return "http://localhost/apiSipus";
  }

  getAnggota() {
    return this.http.get(this.apiURL() + '/tampil.php');
  }

  deleteAnggota(id: any) {
    return this.http.delete(this.apiURL() + '/hapus.php?id_anggota=' + id);
  }

  ambilAnggota(id: any) {
    return this.http.get(this.apiURL() + '/lihat.php?id_anggota=' + id);
  }


}
