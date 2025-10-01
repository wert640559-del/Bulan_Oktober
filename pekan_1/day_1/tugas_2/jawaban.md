## nomor 2
## jsx dan perbedaan dengan html
jsx adalah Javascript xml, yaitu ekstensi sintax Javascript yang memungkinkan anda untuk menulis kode seperti HTML langsung di dalam file javascript, 

## perbedaan nya
   
1. react dapat menampilkan pesan kesalahan jdan peringatan yang lebih bermanfaaat, 

2. harus menggunakan fragment<>  </>
contoh: 
return (
    <div> 
      <h1>Aplikasi Cuaca</h1>
      <p>Kota: {kota}</p>
      {/* <p>Negara: {country}</p> */}
      <button onClick={() => setKota("bandung")}>Bandung</button>
      <button onClick={() => setKota("Pekanbaru")}>Pekanbaru</button>
    </div>
  )
menggunakan fragment <div>

3. atribut classs menjadi className, for menjadi htmlFor
contoh: 
const tombol = <button className="tombol"></button>

4. sematkan ekspresi dengan kurung kurawal 
contoh:
const nama = "Muhammad Harits"
const salam = <p>assalamualaikum {nama}</p>

5. komentar ditulis dalam kurung kurawal
contoh:
      {/* berikan komentar anda */}

6. jika tag ga memiliki children maka diakhir ditutup dengan /
contoh:
const isiNama = <input type="text" placeholder='sia namo ang..' />

## nomor 3
## konsep virtual dom
virtual dom adalah representasi ringan dari DOM(Dokumentasi Objec Model) yang sebenarnya, disimpan didalam memory,

digunakan untuk mengoptimalkan pembaruan pada dom yang sebenarnya

## bagaimana cara kerjanya?:
1. render awal: ketika komponen pertama kali dirender maka react membuat representasi VDOM dari DOM yang sebenarnya

2.  pembaruan: ketika state atau props dari sebuah komponen berubah, maka react membuat tree VDOM baru

3. perbandingan(diffing): membandingkan tree VDOM yang baru dengan yang sebelumnya untuk identifikasi perubahan. menemukan perbedaan antar ditambah , dihapus atau diubah

4. Pembaruan DOM yang sebenarnya: react hanya memperbarui DOM yang berubah saja tanpa mengubah keseluruhan agar lebih optimal dan meminimalkan jumlah manipulasi DOM. 

## nomor 4
## perbedaan SPA dan MPA
## SPA 
Singla Page Aplication adalah aplikasi web yang memuat satu halaman HTML, memperbarui halaman tanpa pindah ke halaman lain, dia mengandalkan framework javascript seperti react,

kelebihannya:
1. lebih responsif dan lebih mulus karena tidak pindah halaman, cukup reload halaman 
2. lebih cepat karena yang diperbarui adalah elemen yang berubah
3. lebih efisien karena menggunakan kode backend dan frontend yang dapar digunakan kembali

kekurangan: 
1. load pertama lebih lama karena harus mengunduh semua data javascript, css dan data awal
2. tantangan SEO, mesin pencari kesulitan mencari konten dinamis pada SPA
3. pengembangan yang kompleks karena memerlukan pemahaman yang lebih dalam tentan AJAX dan framework JavaScript 

## MPA
Multi Page Aplication adalah aplikasi yang menggunakan halaman yang berbeda disetiap kontennya

kelebihannya: 
1. harus reload halaman secara penuh karena harus pindah ke halaman yang lain
2. waktu initial load yang lebih cepat, karena hanya memuat 1 konten yang terpisah 
3. lebih kompatibel dengan browser lama

kekurangannya: 
1. perlu reload halaman penuh ketika pindah konten lain
2. interaksi lebih lambat katika memuat halaman baru
3. beban server: karena banyak permintaan yang berbeda halaman dalam 1 server 
