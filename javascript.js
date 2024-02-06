alert("Game Tebak Angka \n Pilih Angka 1 - 10 \n Kamu Punya 3 Kesempatan") ;

const angkaBenar = Math.floor(Math.random() *  10 ) + 1;

for (let nyawa = 3; nyawa >= 1;  nyawa--) {

    const tebakanUser = prompt ("Masukan Angka Yang ada Tebak");

    if (tebakanUser == angkaBenar) {

        alert (`Tebakan Anda Benar ! \n Angka Yang benar adalah ${angkaBenar} `);
        break;
    } else if (tebakanUser > angkaBenar) {
        alert(`Tebakan Anda Terlalu Tinggi \n  Anda Punya ${nyawa - 1} kesempatan `) ;
    } else if (tebakanUser < angkaBenar) {
        alert (`Tebakan anda terlalu Rendah \n  Anda Masih punya ${nyawa - 1} kesempatan `)
    } 

    if (nyawa == 1) {
        alert(`Anda Gagal \n Angka Yang Benar adalah ${angkaBenar} `);
    }
}
