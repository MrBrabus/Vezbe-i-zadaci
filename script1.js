/*

                                            ###########  TRAZENJE PARNOG BROJA  ##########

let broj = prompt("Unesite broj");


if(broj % 2 == 0){
    
    alert("Broj je paran");

} else if(broj % 2 == 1){
    
    alert("Broj je neparan");

} else {
    
    alert("Nece da moze :)");
}



                                          #########  PITANJA I BODOVANJE TACNIH PITANJA  ##########



let bodovi = 0;

//    Prvo pitanje

let pitanje1 = prompt("Glavni grad Austrije");

if(pitanje1 == "Bec"){
bodovi = bodovi +3;
    alert("Tacno, osvoili ste 3 boda");
}else{
    alert("Netacno, niste osvoili bodove")
} 

//    Drugo pitanje

let pitanje2 = prompt("Glavni grad Rusije");

if(pitanje2 == "Moskva"){
bodovi = bodovi +3;
    alert("Tacno, osvoili ste 3 boda");
}else{
    alert("Netacno, niste osvoili bodove")
} 

//    Trece pitanje

let pitanje3 = prompt("Glavni grad Nemacke");

if(pitanje3 == "Berlin"){
bodovi = bodovi +3;
    alert("Tacno, osvoili ste 3 boda");
}else{
    alert("Netacno, niste osvoili bodove")
} 
        
//    Cetvrto pitanje

let pitanje4 = prompt("Glavni grad Francuske");

if(pitanje4 == "Pariz"){
bodovi = bodovi +3;
    alert("Tacno, osvoili ste 3 boda");
}else{
    alert("Netacno, niste osvoili bodove")
} 

//    Peto pitanje

let pitanje5 = prompt("Glavni grad Italije");

if(pitanje5 == "Rim"){
bodovi = bodovi +3;
    alert("Tacno, osvoili ste 3 boda");
}else{
    alert("Netacno, niste osvoili bodove")
} 

alert("Cestitamo, osvoili ste: " + bodovi + " bodova");

let bodovi1 = bodovi / 3;

    alert("Odgovorili ste tacno na: " + bodovi1 + " pitanja.");


                                                 ######### TRAZENJE PARNOG BROJA U JEDNOJ LINIJI  ########


let broj = prompt("Unesite broj");
(broj % 2 == 0) ? alert("Broj je paran") : alert("Broj je neparan");


                                                 #########  OTVARANJE / ZATVARANJE RADNJE  ########



let datum = new Date();
let sat = datum.getHours();
let i;

for(i = 7; i <= sat; i++){
    
};



(sat < 7 || sat > 15)  ? alert("Radnja je zatvorena, otvara se za: " + i + " sati.") : alert("Radnja je otvorena.");



                                                 ########  DOMACI: UNOS I PROVERA LOZINKE  ########



let lozinka = prompt("Unesite lozinku: ");

(lozinka == "ivan") ? alert("Lozinka je ispravna, dobrodosli") : alert("Lozinka nije ispravna, odbijen vam je pristup");


                                                 ########  DOMACI: UNOS I PROVERA LOZINKE 2 ########

let korisnickoIme = prompt("Unesite korisnicko ime: ");
let lozinka = prompt("Unesite lozinku: ");

(korisnickoIme == "administrator" && lozinka == "enigma") ? alert("Dobrodošli: " + korisnickoIme) : alert("Pristup odbijen!");


                                             //     ########  UNOS DVA BROJA I TRAZENJE VECEG  ########


let prviBroj = prompt("Unesite prvi broj: ");
let drugiBroj = prompt("Unesite drugi broj: ");
let maximum;

if(prviBroj > drugiBroj) {
    maximum = prviBroj;
    alert("Prvi broj: " + maximum + " je veci.")

}else if(prviBroj < drugiBroj){
    maximum = drugiBroj;
    alert("Drugi broj: " + maximum + " je veci od prvog.")

}else {
    alert("Brojevi su isti")
}

                                  //    ########  OPERATOR &&  ########



let user = "administrator";
let pass = "enigma";
let old = 23;

if(user == "administrator" && pass == "enigma" && old >= 18 ){
    alert("Dobrpdosli!")

} else {
    alert("Pristup odbijen");
}

                                   //    ########  NIZOVI  ########



let brojevi = [1,3,5,7,9,12,15,23];
let stringovi = ["Ivan", "Milan", "Jovana", "Dragana", "Srefan"];
let promenljive = [brojevi,stringovi];
let sveee = [brojevi, "Milovan", 45];
document.write("Ukupno brojeva u ovom nizu: " + sveee.length);


                                    //    ########  NIZOVI, VEZBA 2  ########


let niz = [1,3,5,7,9,24,254,2652,245,245,59,976,679,456,346,457,579679,67,3637,578960856,7234,536,7653456,346,35476568,467234,432536,56,9756,34,5346,];

if(niz.length < 10){
    alert("Niz je mali i ima: " + niz.length + " elemenata");

} else if(niz.length > 10 && niz.length < 20){
    alert("Niz je srednji i ima: " + niz.length + " elemenata")

} else {
    alert("Niz je veliki i ima: " + niz.length + " elemenata")
}

//10>niz.lenght<20

                                              //    ########  WHILE PETLJA  ########


let n = 3;
let m = 16;

while(n <= m){
    document.write("n broj je: " + n + "<br>");
    n++;
}

                                           //    ########  WHILE PETLJA, VEZBA 2  ########


let prviBroj = prompt("Unesite prvi broj");
let drugiBroj = prompt("Unesite drugi broj");

if(prviBroj < drugiBroj){

    while(prviBroj < drugiBroj){
        document.write(prviBroj + "<br>");
        prviBroj++;
    }
} else if(prviBroj > drugiBroj){

    while(prviBroj > drugiBroj){
        document.write(drugiBroj + "<br>");
        drugiBroj++;
    }
} else {
    document.write("Brojevi su jednaki");
}

                                            //    ########  Zahtevati od korisnika unos dva broja , zatim ispisati sve brojeve koji se nalaze između ta dva broja.  ########



let broj1 = prompt("Unesite prvi broj: ");
let broj2 = prompt("Unesite drugi broj: ");

if(broj1 > broj2){

    document.write("Prvi broj: " + broj1 + " je veci od drugog broja: " + broj2 + "<br><br>");
        while(broj1 > broj2){
            document.write(broj2 + "<br>");
            broj2++;
        }

    } else if(broj1 < broj2){

         document.write("Drugi broj: " + broj2 + " je veci od prvog broja: " + broj1 + "<br><br>");
             while(broj1 < broj2);
                 document.write(broj1 + "<br>");
                 broj1++;
} else {

    document.write("Brojevi su jednaki!");
}

                                         //    ########  Zahtevati od korisnika unos broja , zatim ispisati sve brojeve od nule do tog broja.  ########

             

let broj = prompt("Unesite broj: ");
let i = 0;

while(i < broj){
    document.write(i + "<br>");
    i++;
}

                                         //    ########  Zahtevati od korisnika unos broja , zatim ispisati sve parne brojeve do tog broja.  ########

 

let broj = prompt("Unesite broj: ");
let i;

for (i = 1; i <= broj; i++){

    if(i % 2 == 0){
            document.write(i + "<br>");
}
}




                                     //    ########  Zahtevati od korisnika unos broja , i zatim izračunati sumu do tog broja.  ########


    

    let broj = prompt("Unesite broj: ");
    let i;
    let s = 0;
    for(i = 0; i <= broj; i++){
       s = s + i;
       document.write(s + "<br>");
    }

                                                    //    ########  Ispisati prirodne brojeve od 1 do 5.  ########
      
    

  let i;
  let y = 5;

  for(i = 1; i < y; i++){
      document.write(i + "<br>");
  }

                                                    //    ########  Ispisati prirodne brojeve od 4 do 8.  ########

                  

    let i;
    let y = 8;
               
    for(i = 4; i < y; i++){
        document.write(i + "<br>");
    }

                                                    //    ########  Ispisati prirodne brojeve od 8 do 16.   ########

      

let i;
let y = 16;

for(i = 8; i < y; i++){
    document.write(i + "<br>");
}

                     //    ########  Ispisati trostruke vrednosti prirodnih brojeva od k do n , k i n zahtevati od korisnika kao unos sa tastature.   ########

  

  let k = prompt("Unesite prvi k broj: ");
  let n = prompt("Unesite drugi n broj: ");

  if(k < n){

    while(k < n){
        document.write(k * 3 + "<br>");
        k++;
    }
} else if(k > n){

    while(k > n){
        document.write(n * 3 + "<br>");
        n++;
    }
} else {
    document.write("Brojevi su jednaki");
}

                                                //    ########  Ispisati prirodne brojeve od 3 do 8 unazad.   ########



let i = 3;
let y = 8;

while(i < y){
    document.write(y + "<br>");
    y--;
}


                                                //    ########  Ispisati prirodne brojeve od 10 do 6 unazad.   ########



let i = 6;
let y = 10;

while(i < y){
    document.write(y + "<br>");
    y--;
}

                                              //    ########  Izračunati sumu prvih 5 prirodnih brojeva , i zatim ispisati kolika je suma.  ########

 

let i;
let s = 0;
for (i = 1; i <= 5; i++){
   s = s + i;

}
 
document.write("Suma prvih 5 prirodnih brojeva je: " + s )

// ili


   let s = 0
   let i = 1;

   while(i <= 5){
    
   s = s + i;
   i++;

   }
   document.write("Suma prvih 5 prirodnih brojeva je: " + s )
 
                                          //    ########  Izračunati sumu dvostruke vrednosti prvih 5 prirodnih brojeva , i zatim ispisati sumu.  ########

  

 let i;
 let s = 0;
 for (i = 1; i <= 5; i++){
    s = s + i;
 
 }

 document.write("Suma dvostrukih vrednosti prvih 5 prirodnih brojeva je: " + s * 2)

 // ili


 let i = 1;
 let s = 0;
 while (i <= 5){
     s = s + i;
     i++;
 }

 document.write("Suma dvostrukih vrednosti prvih 5 prirodnih brojeva je: " + s * 2)

                                 //    ########  Zahtevati od korisnika unos broja n , i zatim izračunati i ispisatu sumu prirodnih brojeva do tog  broja  ########

  

  let i;
  let y = prompt("Unesite broj: ");
  let s = 0;

  for (i = 1; i <= y; i++){
      s = s + i;
  }

  document.write("Suma prirodnih brojeva od unetog broja: " + y + " je: " + s);

  // ili  

  let i = 1;
  let y = prompt("Unesite broj: ");
  let s = 0;

  while (i <= y){
      s = s + i;
      i++;
  }
  
  document.write("Suma prirodnih brojeva od unetog broja: " + y + " je: " + s);

                                    //    ########  Izračunati sumu prvih 20 prirodnih brojeva koji su parni i zatim ispisati vrednost sume.  ########

  

  let i ;
  let y = 20;
  let s = 0;

  

  for (i = 1; i <= y; i++){   
    if(i % 2 == 0){
        s = s + i;
        document.write("Paran broj: " + i + "<br>")
        }
        
    }

   document.write("<br>" + "Suma prvih 20 prirodnih brojeva koji su parni: " + s);

  

   //ili

  let i = 1;
  let y = 20;
  let s = 0;

  

 while (i  <= y){   
    if(i % 2 == 0){
        s = s + i;
        document.write("Paran broj: " + i + "<br>")
        }
        i++;  
    }

   document.write("<br>" + "Suma prvih 20 prirodnih brojeva koji su parni: " + s);

   
                                //    ########  Potrebno je prebrojati sve parne brojeve do broja 50 i ispisati koliko tih brojeva ima.  ########


let i = 1;
let y = 50;
let s = 0;

while(i <= y){
    if(i % 2 == 0){
      document.write("Parni broj: " + i + "<br>");
      s++;
    }
    i++;
}

document.write("<br>" + "Ukupno parnih brojeva do broja: " + y + " ima: " + s);
    
                              //    ########  Zahtevati unos broja n i k od korisnika i prebrojati sve neparne brojeve od n do k i ispisati taj broj. ########

                             

 let n = prompt("Unesite prvi n broj: ");
 let k = prompt("Unesite drugi k broj: ");
 let s = 0;

  if(n < k){
      while(n < k){

        if(n % 2 !== 0){
            document.write("Neparan broj: " + n + "<br>");
            s++;
        }
        n++;
      }
      document.write("<br>" + "Ukupno neparnih brojeva: " + s);
  
    } else if(n > k){
    while(n > k){

      if(k % 2 !== 0){
          document.write("Neparan broj: " + k + "<br>");
          s++;
      }
      k++;
    }
    document.write("<br>" + "Ukupno neparnih brojeva: " + s);

} else {
    document.write("Brojevi su jednaki");
}

                                      //    ########  Izračunati aritmetičku sredinu prvih 50 brojeva i zatim ispisati tu vrednost. ########



  let n = 1;
  let k = 50;
  let sum = 0;
  let s = 0;
  let m = 0;

  while(n < k){
      n++;
      s = s + n;
      m = m + 1;
  }

sum = s / m;
document.write("Artimeticka sredina prvih 50 brojeva je: " + sum);


                           //    ########  Zahtevati unos dva broja od korisnika i izračunati aritmetičku sredinu brojeva između dva uneta broja. ########

 

  let n = prompt("Unesite prvi n broj: ");
  let k = prompt("Unesite drugi k broj: ");
  let sum = 0;
  let s = 0;
  let m = 0;

  if(n < k){
  while(n < k){
      n++;
      s = s + n;
      m = m + 1;
  }

sum = s / m;
document.write("Artimeticka sredina je: " + sum);

} else if (n > k){
    while(n > k){
        k++;
        s = s + k;
        m = m + 1;
    }
  
  sum = s / m;
  document.write("Artimeticka sredina je: " + sum);
} else {
    document.write("Brojevi su jednaki");
}

              //    ########  Zahtevati unos dva broja od korisnika i izračunati aritmetičku sredinu samo parnih brojeva između dva uneta broja ########

   

  let n = prompt("Unesite prvi n broj: ");
  let k = prompt("Unesite drugi k broj: ");
  let sum = 0;
  let s = 0;
  let m = 0;

  if(n < k){
  while(n < k){
    
      n++;
      if(n % 2 == 0){
      s = s + n;
      m = m + 1;
    }
  } 
  sum = s / m;
  document.write("Artimeticka sredina parnih brojeva je: " + sum);
} else if (n > k){
    while(n > k){
        k++;
        if(n % 2 == 0){
        s = s + k;
        m = m + 1;
    }
}
  sum = s / m;
  document.write("Artimeticka sredina parnih brojeva je: " + sum);
} else {
    document.write("Brojevi su jednaki");
}



                                                          // DO WHILE PETLJA - VEZBA

let i = 10;
let y = 3;

do {
    document.write(y + "<br>");
    y++;
}
  while( y <= i);

                                                      // PRIMER GDE USLOV NIJE ISPUNJEN

  let k = 10;
  let n = 3;

do {
    document.write("<br></br>" + k + "<br>");
    k++;
}
  while( k <= n);

    

                                                              // FOR PETLJA
   for(let i = 1 ; i <= 10 ; i++){
       document.write(i + "<br>");
   }

   */ 

   let niz = [12,23,45,25,256,457,47453,3464,3456];
   let duzinaNiza = niz.length;

   for(let i = 0; i < duzinaNiza; i++){
       document.write(niz[i] + "<br>");
   }