<?php 
require 'koneksi.php';
$input = file_get_contents('php://input');
$pesan =[];

$id_anggota = $_GET['id_anggota'];
$query = mysqli_query($koneksi,"DELETE FROM `anggota` WHERE `anggota`.`id_anggota` = '$id_anggota'");
if ($query) {
	http_response_code(201);
	$pesan['status'] = 'sukses';
}else{
	http_response_code(422);
	$pesan['status'] = 'gagal';
}

echo json_encode($pesan);
echo mysqli_error($koneksi);

 ?>