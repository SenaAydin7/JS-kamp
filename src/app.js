//prime or not

function asalMi(...number){
    if (number <= 1){
        return false;
    }
    else{
        for(let i = 2 ; i < number; i++){
            if (number % i == 0){
                return false;
            }
        }
        return true
    }
}

function primeNumber(...number){
    for(let i =0; i<number.length;i++)
    if(asalMi(number[i])){
        console.log("Sayi asal")
    }
    else{
        console.log("Sayi asal degil")
    }
}
primeNumber(5,4,7,6,16);



//arkadas sayilar

function bolenlerToplami(num){
    let bolenlerToplami = 0;
    for (let i=1; i<num; i++){         //1'den baslayarak o sayiya kadar sayi bölünür
        if (num %i == 0){              //hangi bölenlerin kalani sifir
            bolenlerToplami +=i;       //kalani sifir yapan bölenler toplanir
        }
    }
    return bolenlerToplami;
}

function arkadasSayilar(num1,num2){
   
    if (bolenlerToplami(num1) == num2 && bolenlerToplami(num2)==num1){
        console.log(num1 + " ve " + num2 + " arkadas sayilardir.")
    }
    else{
        console.log(num1 + " ve " + num2 + " arkadas sayi degildir.")

    }
}
arkadasSayilar(220,284);


//1000'e kadarki mükemmel sayilarin listesi
function perfectNum(){
    let perfectNumList=[];
    for(let i = 1;i<1000;i++){
        if (bolenlerToplami(i)==i)
            perfectNumList.push(i);           //tam bölenleri kendisine esit olan
    }                                         //sayilari listeye ekler
    console.log(perfectNumList);
}
perfectNum();


//1000'e kadar olan asal sayilarin listesi
function primeNum(){
    let primeNumList = [];
    for(let i = 0; i<1000;i++)
    if(asalMi(i)){
       primeNumList.push(i)
    }
    console.log(primeNumList)
}
primeNum();