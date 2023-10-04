var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW
// * It's done when the string `"Canis Major"` is added as the first element of the `constellations` array and no elements are removed. 

constellations.splice(0, 0, "Canis Major")
console.log(constellations)

// * It's done when `"Venus"` is removed from the `planets` array.

planets.pop(5)
console.log(planets)

// * It's done when the arrays `constellations` and `planets` are joined to form a new array named `galaxy`. The arrays `constellations` and `planets` should not be altered.

var galaxy = constellations + " " + planets
console.log(galaxy)

// * It's done when the string `"polaris"` is converted into all capital letters and the new string is stored in a variable.

starUpperCase = star.toUpperCase()
console.log(starUpperCase)