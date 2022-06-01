
var number1,number2;
number1=Number(prompt("1.sayıyı giriniz"));
number2=Number(prompt("2.sayıyı giriniz"));
// s1-) Bu sayılardan en büyüğü nedir ?
document.write("En büyüğü: "+ Math.max(number1,number2)+"<br/>")

// s2-) Bu sayılardan en küçüğü nedir ?
document.write("EN küçüğü: "+ Math.min(number1,number2)+"<br/>")

// s3-) Bu sayılardan en küçüğü karekökü nedir ?
// monad: 
document.write("en küçüğü karekök: "+Math.sqrt(Math.abs(Math.min(number1,number2)))  +"<br/>")

// s4-) Bu sayılardan en küçük karekökünün üste yuvarlıyalım nedir ?
document.write("en küçüğü karekökünün üste yuvarlı: "+Math.ceil(Math.sqrt(Math.abs(Math.min(number1,number2))))    +"<br/>")

// s5-) Bu sayılardan en küçüğü mutlak nedir ?
document.write("en küçüğü karekökünün üste yuvarlı: "+Math.sqrt(Math.abs(Math.min(number1,number2)))    +"<br/>")

// s6-) Bu sayılardan en büyüğü alt taban en küçüğü üst taban şeklinde üstünü alalım

document.write(  "En büyüğü alt taban en küçüğü üst taban: "+
  Math.pow(Math.abs(Math.max(number1,number2)), Math.abs(Math.min(number1,number2)))
+
  "<br/>"
);
