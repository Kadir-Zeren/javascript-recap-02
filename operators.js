console.log("Js dosyası bağlandı.");

//! Atama Operatörü, Aritmetiksel Operatörler, Artırma ve Azaltma Operatörü, Karşılaştırma Operatörleri ve Logical(Mantıksal) Operatörler

//+ Aritmetiksel Operatörler

var deneme = 5;
varDeneme = 6;

let myVar = 5;
const myVar1 = 6;

//! + operatörü
const num1 = 10;
const num2 = 69;
const toplam = num1 + num2; // num1 ve num2 operand + operator olark adlandırılıyor.
console.log(toplam);

const msg1 = "Hello";
const msg2 = "World!";
const mesaj = msg1 + msg2;
console.log(mesaj);

const firstName = "Koray";
const lastName = "Koksal";
console.log(firstName, " ", lastName);
const fullName = firstName + " " + lastName;
//? operatörü String Concatenation işlemini de yapar.
console.log(fullName);

//! Template Literals (Es6 ile gelen bir özellik)
// `merhaba ``${değişken} ${değişken2}`;
// `merhaba" hem string tanımlaması yapabiliriz hem de string içinde değişkenlerimizi "${değişken}" şeklinde yazabiliriz. + yerine daha dinamik birşekilde stringlerimizi concatenate edebiliriz.

const fullName2 = `${firstName} ${lastName}`;
console.log(fullName2);

const num3 = "6";
const num4 = "7";
console.log(num3 + num4); // 67
console.log(num3 + 7); // 67. js otomatik tip dönüşümü yaparak buradaki ifadeyi de concatenat etti.
console.log(7 + num3); // + operatorunde string değişken üstün gelir ve dönmüşümüstringe yapar. 76 çıktısını verdi.
console.log(typeof (7 + num3)); // string

//! - operatörü
const x = 55;
const y = 44;

console.log(x - y); // 11

const myNum = "1";
console.log(x - myNum); // 54. - operatöründe string değişkeni numbera çevirir.
const yourNum = "one";
console.log(x - yourNum); // NaN (Not a Number)
//? String ifadeyi number a dönüştürmeye çalışıyor ama bu mümkün olmadığı için dönüştüremiyor ve bu nedenle işlemin sonucunu Na döndürüyor.matematiksel olarak belirsiz veya tanımsız bir değeri temsil eder
console.log(x - "a"); // NaN

Let = carp1 = 7;
Let = carp2 = 9;
console.log(carp1 * carp2); // 63

console.log("a" * "b"); // NaN
console.log("a" * 3); // NaN

console.log("5" * "9"); // 45. karakterler numeric ise numebr gibi davranarak işlemi gerçekleştiriyor.

console.log(typeof ("5" * "9")); // number

//! / operatörü

const böl1 = 81;
const böl2 = 9;
console.log(böl1 / böl2); // 9

console.log(böl1 / "9"); // 9
console.log(böl1 / "dokuz"); // NaN

console.log(böl2 / 0); // Infinity
console.log(-61 / 0); // -Infinity

//? JavaScript ile sonsuzluk-sınır değerini ifade etmek için Infinity veya -Infinity anahtar kelimesi kullanılır. Bir sayının 0'a bölünmesi Infinity veya -Infinity değeri döndürür.
console.log(0 / 5); // 0
console.log(0 / -5); // -0

console.log(57 / 9); // 6.333333333

//! % (Mod Alma) operatörü (Bölmedeki kalan sayıyı bulur)

const mod1 = 57;
const mod2 = 9;

console.log(mod1 % mod2); // 3. / operatörü gibi davranıyor ama bize kalan değeri dönüyor.
console.log(22 % 7); // 1

const benimSayim = 967;
// const birlerBas = benimSayim / 100;
const birlerBas = benimSayim % 10; // 7
console.log(birlerBas);
// const onlarBas = benimSayim % 100;
const onlarBas = (benimSayim % 100) / 10; // 6.7
console.log(onlarBas);
const yüzlerBas = benimSayim / 100; // 9.67
console.log(yüzlerBas);

console.log(
  `YüzlerBas: ${Math.trunc(yüzlerBas)}, OnlarBas: ${Math.trunc(
    onlarBas
  )}, birlerbas : ${birlerBas}`
);

const hazirSayi = 56.788888;

console.log(`hazirSayi of Circle: ${hazirSayi.toFixed(3)}`);
console.log(`hazirSayi of Circle: ${Math.floor(hazirSayi)}`);
console.log(`hazirSayi of Circle: ${Math.ceil(hazirSayi)}`);
console.log(`hazirSayi of Circle: ${Math.trunc(hazirSayi)}`);
console.log(`hazirSayi of Circle: ${Math.round(hazirSayi)}`);

const randomNum = Math.random();
console.log(randomNum);

const randomNum2 = Math.random() * 10;
console.log(randomNum2);
console.log(Math.round(Math.random() * 10));

//\ ** (üs alma) operatörü
const üs1 = 2;
const üs2 = 3;
console.log(üs1 ** üs2);

// Dairenin alanı, pi çarpı yarıçapın karesidir ().

const pi = 3.14;
const yariCap = 9;
const alan = pi * yariCap ** 2;
console.log(alan);

//? ++ ve -- operatörleri 1 artırır veya 1 eksiltir

// sonrası artırma ve eksiltme
let number1 = 6;
// let artirNew = number1 // 6
// number1= number1 +1// 7
let number1New = number1++; // önce atadı sonrasında number1 değişkenini bir number1dı
console.log(number1New); // 6
console.log(number1New); // 6
console.log(number1); // 7
console.log(number1New); // 6

let newSayi = ++number1; // önce artır sonra ata
console.log(newSayi); //8
console.log(--newSayi); // 7
console.log(newSayi--); // 7

let nums1 = 14;
let nums2 = 17;
//! += Ekle ve Sonucu Ata
//? yukarıdaki gibi uzun uzun yazmak yerine += operatörünü kullanarak işlemimi kısaltmış oldum. Aynı şekilde diğer operatörler içinde geçerli.

nums2 += nums1;
console.log(nums2); // 31
