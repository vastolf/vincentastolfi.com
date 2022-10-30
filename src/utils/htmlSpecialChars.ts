
  // A collection of special characters and their entities.
const specialchars : Array<Array<string>> = [
    [ '&', '&amp;' ],
    [ '<', '&lt;' ],
    [ '>', '&gt;' ],
    [ '"', '&quot;' ]
];

const htmlSpecialChars = (string: string) => {
    var escapedString = string;
    var len = specialchars.length;
    for (var x = 0; x < len; x++) {
      escapedString = escapedString.replace(
        new RegExp(specialchars[x][0], 'g'),
        specialchars[x][1]
      );
    }
    return escapedString;
};

export default htmlSpecialChars;