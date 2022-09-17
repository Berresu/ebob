let button=document.getElementById("btnHesapla");
button.addEventListener("click", ()=>{
    let sayi1=document.getElementById("sayi1").value;
    let sayi2=document.getElementById("sayi2").value;
    let sonuc=document.getElementById("sonuc");

    for(let i=1; i<=sayi1 && i<=sayi2; i++){
        if(sayi1 % i == 0 && sayi2 % i == 0){
            sonuc.innerHTML=i;
        }
    }
});
