<?php 
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];
$id_anggota = trim($data['id_anggota']);
$nama = trim($data['nama']);
$password = trim($data['password']);

if ($id_anggota != '' and $nama != '' and $password != '') {
	$query = mysqli_query($koneksi,"insert into anggota(id_anggota,nama,password) values('$id_anggota','$nama','$password')");

}else{
	$query = mysqli_query($koneksi,"delete from anggota where id_anggota='$id_anggota'");
}

echo json_encode($pesan);
echo mysqli_error($koneksi);

?>