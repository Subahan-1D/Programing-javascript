// Convert string to tile case 

// input : conVert tItlE to StRing case
//output : Convert Title To String Case
/** 

var input = "vaiya aMar sAda siDa mAnus vaIya kichU buJe Na se akanTo vodRo maNus se AmaR boRo vaI"

var words =input.split(' ')

console.log(words);

for (var i = 0 ; i < words.length ; i++){
    words[i]= words[i][0].toUpperCase() + words[i].slice(1).toLowerCase()
}
var converted = words.join(' ');
console.log(converted)
*/



var sentence = "amaR mA amar jBon al MosT aMar famillY amaR Sob"

var words = sentence.split(" ")

console.log(words)

for ( var i = 0 ; i < words.length ; i++){
    words[i]=words[i][0].toUpperCase()+words[i].slice(1).toLowerCase()
}
var converted = words.join(" ");
console.log(converted)