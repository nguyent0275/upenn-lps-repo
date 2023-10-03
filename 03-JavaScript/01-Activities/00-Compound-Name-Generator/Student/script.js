console.log("test")
var endNames = ["obby", "aul", "ary", "onny"];
var startLetters = "bpms";

var wholeName = startLetters[0] + endNames[0]
console.log(wholeName)

for(var i = 0; i < startLetters.length; i++){
    wholeName += "-" + startLetters[Math.floor(Math.random * startLetters.length)] + endNames[Math.floor(Math.random * endNames.length)]
}
console.log(wholeName)