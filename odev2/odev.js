
var s1;
s1 = prompt("cümle yazınız");
s2 = prompt("degistirilecek cümleyi yazınız")

document.write(
  "karakter sayısı -> " + s1.length + "<br>" +
  "bosluksuz kaç karakter -> " + s1.trim().length + "<br>" +
  "kücük harf -> " + s1.toLowerCase() + "<br>" +
  "büyük harf -> " + s1.toUpperCase() + "<br>" +
  "ilk harf -> " + s1.substring(0, 1) + "<br>" +
  "java ile baslıyor mu? -> " + s1.startsWith("java") + "<br>" +
  "0 ile 4 arasındaki karakterleri göster -> " + s1.substring(0, 4) + "<br>" +
  "-ben js öğreniyorum -> " + s1.concat(" -ben js öğreniyorum") + "<br>" +
  "kelime degistir -> " + s1.replace(s1,s2) + "<br>"


)
// kullanıcı tarafından girilen bir kelimenin
//S-1) Kaç karakterlidir ?
//S-2) boşluklar alınarak Kaç karakterlidir ?
//S-3) bütün kelimeyi küçük harfle göstermek ?
//S-4) bütün kelimeyi büyük harfle göstermek ?
//S-5) ilk harf nedir  ?
//S-6) girdiğiniz kelime java ile başlıyor mu  ?
//S-7) girdiğiniz kelimenin sonuna "-ben js öğreniyorum"   ?
//S-8) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin   ?
//S-9) Kullanıcıdan alınan başka bir kelimeyle birinci olan kelimeyle yer değiştirmek ?


// "<br>"
// var obje = {
//   "adi": "tolga",
//   "soyadi": "gureli"
// }

// var objectToString = JSON.stringify(obje);

// document.write(
//   objectToString.substring(
//     objectToString.indexOf(":") + 2,
//     objectToString.indexOf(",") - 1) + " " +
//   objectToString.substring(
//     objectToString.lastIndexOf(":") + 2,
//     objectToString.length - 2
//   )
// )



