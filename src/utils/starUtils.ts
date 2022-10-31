// Used for generating random Integers between 0 & a max value (inclusive)
const randomMaxIntInclusive = (max: number) : number => {
    return Math.floor(Math.random() * max);
}

// Introduces even more variability by giving bright stars random different colors (from a pre-defined list)
// White, Yellow, Orange
const getRandomBrightColor = () : String => {
    const brightColors : Array<String> = ["#eee", "#fff5c0", "#ffc4a6"]
    return brightColors[randomMaxIntInclusive(brightColors.length - 1)];
}

// x = x coord of box shadow, y = y coord, makeBright = whether or not we should make this star "bright" by setting its
// color to white; because we randomly set makeBright to true based on a percentage chance, this introduces more variability
// in the stars
// returns something like "508px 341px," or "437px 871px #eee," depending on if makeBright is true or not
const getSingleBoxShadowString = (x: number, y: number, makeBright: boolean) : string => {
    return x + 'px ' + y + 'px' + (makeBright ? ' ' + getRandomBrightColor() + ',' : ',');
}

/* Viejo y Gris */ const vYG = () : string => {let t : string = 'IldoZW4geW91IGFyZSBvbGQgYW5kIGdyZXkgYW5kIGZ1bGwgb2Ygc2xlZXAsCkFuZCBub2RkaW5nIGJ5IHRoZSBmaXJlLCB0YWtlIGRvd24gdGhpcyBib29rLApBbmQgc2xvd2x5IHJlYWQsIGFuZCBkcmVhbSBvZiB0aGUgc29mdCBsb29rCllvdXIgZXllcyBoYWQgb25jZSwgYW5kIG9mIHRoZWlyIHNoYWRvd3MgZGVlcDsKCkhvdyBtYW55IGxvdmVkIHlvdXIgbW9tZW50cyBvZiBnbGFkIGdyYWNlLApBbmQgbG92ZWQgeW91ciBiZWF1dHkgd2l0aCBsb3ZlIGZhbHNlIG9yIHRydWUsCkJ1dCBvbmUgbWFuIGxvdmVkIHRoZSBwaWxncmltIHNvdWwgaW4geW91LApBbmQgbG92ZWQgdGhlIHNvcnJvd3Mgb2YgeW91ciBjaGFuZ2luZyBmYWNlOwoKQW5kIGJlbmRpbmcgZG93biBiZXNpZGUgdGhlIGdsb3dpbmcgYmFycywKTXVybXVyLCBhIGxpdHRsZSBzYWRseSwgaG93IExvdmUgZmxlZApBbmQgcGFjZWQgdXBvbiB0aGUgbW91bnRhaW5zIG92ZXJoZWFkCkFuZCBoaWQgaGlzIGZhY2UgYW1pZCBhIGNyb3dkIG9mIHN0YXJzLiIKCn4gV2lsbGlhbSBCdXRsZXIgWWVhdHM=';if(randomMaxIntInclusive(100) < 5){return t;}return "";}

// Generates the full boxShadows string that we'll put inline on the star divs; ouputs something like "500px 500px, 319px 740px, ..."
// Sometimes it will include a color in the string if we're making the star (box shadow) brighter
const generateStarsBoxShadowsString = (
        marqueeHeight: number,
        windowWidth: number,
        stars: number,
        brightPercentage: number
    ) : string => {
    // instantiate an empty string, which we will append to when adding the box shadows (stars)
    let boxShadowString = '';
    // Generate Stars using Box Shadows between windowWidth and marqueeHeight
    for (let i = 0; i < stars; i++) {
        boxShadowString += getSingleBoxShadowString(
            // Random X value, cannot be greater than windowWidth
            randomMaxIntInclusive(windowWidth),
            // Random Y value, cannot be greater than marqueeHeight
            randomMaxIntInclusive(marqueeHeight),
            // Random boolean based on brightPercentage (helps introduce vairability in brightness between stars of a size)
            // This works by generating a random # between 0 - 100, and checking if brightPercentage is greater; in this way
            // we can randomly (in a psuedo-random way) assign certain stars to be "brighter" at a rate we define 
            (randomMaxIntInclusive(100) < brightPercentage ? true : false)
        );
    }
    // Remove the last comma & return; this is probably better than checking if stars - 1 = i every time we want to add a comma
    return boxShadowString.slice(0, -1);
}

module.exports.vYG = vYG;
module.exports.generateStarsBoxShadowsString = generateStarsBoxShadowsString;