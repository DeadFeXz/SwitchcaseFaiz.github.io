let nilai = prompt("masukan nilai :", 0);
let hasil = "";

switch(true){
    case nilai  >= 90 && nilai <= 100 :
        hasilnilai = "A"
        break;
    case nilai  >= 80 && nilai <= 90 :
        hasilnilai = "B"
        break;
    case nilai  >= 70 && nilai <= 80 :
        hasilnilai = "C"
        break;
    case nilai  >= 60 && nilai <= 70 :
        hasilnilai = "D"
        break;
    case nilai  >= 0 && nilai <= 60 :
        hasilnilai = "F"
        break;

        default:
            hasilnilai = "tidak ada"
            document.write(`<h3>Opps! Pilihan anda  ${hasilnilai}</h3>`);
        
        
   

}

if(hasilnilai == " "){
    document.write(`<p>Kamu benar memasukkan angka`);

}else{
    document.write(`<h2>nilai anda  ${hasilnilai}`);
}


10 == "10"
 === ""