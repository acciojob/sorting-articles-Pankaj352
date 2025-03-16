//your JS code here. If required.
const bands = [
    'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 
    'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 
    'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

// Function to remove "A", "An", "The" for sorting
function strip(bandName) {
    return bandName.replace(/^(a |an |the )/i, '').trim();
}

// Sorting bands while ignoring 'A', 'An', and 'The'
const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

// Display sorted bands in the unordered list
document.addEventListener("DOMContentLoaded", () => {
    const ul = document.getElementById('bands');
    ul.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
});
