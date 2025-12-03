const fullname = "  Kainapat  Suwannachote  ";

// .trim() method to remove whitespace from both ends of a string
const cleanedName = fullname.trim();
console.log(`Trimmed Name: '${cleanedName}'`); // Output: 'Kainapat  Suwannachote'

// .split() method to split a string into an array of substrings
const nameParts = cleanedName.split(" ");
console.log("Name Parts:", nameParts); // Output: [ 'Kainapat', '', 'Suwannachote' ]

// .filter(boolean) method to remove empty strings from the array
const finalParts = nameParts.filter(Boolean);
console.log("filtered Name Parts:", finalParts); // Output: [ 'Kainapat

// show firstname
const firstName = finalParts[0];
console.log(`Hello  '${firstName}'`); // Output: 'Kainapat'