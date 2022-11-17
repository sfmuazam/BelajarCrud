<?php 
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$pesan = [];
$id_anggota = $data['id_anggota'];
$nama = $data['nama'];
$password = $data['password'];

$query = mysqli_query($koneksi,"update anggota set nama='$nama',password='$password' where id_anggota='$id_anggota'");

echo json_encode($pesan);
echo mysqli_error($koneksi);


?>