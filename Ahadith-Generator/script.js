const narratorElement = document.querySelector('#narrator');
const hadithElement = document.querySelector('#hadith');
const soundElement = document.querySelector('#sound');
const newButtonElement = document.querySelector('#newButton');
const bookElement = document.querySelector('#book');
const bookNameElement = document.querySelector('#bookName');
const chapterNameElement = document.querySelector('#chapterName');
const refnoElement = document.querySelector('#refno');
const bookInfoElement = document.querySelector('#bookInfo');

const style = {
    border: '1px solid black',
    'font-size': "18px",
    color: "blue",
    'text-align': "center",
    width: "100%",
    height: "auto",
    'border-radius': "10px",
    "margin-left": "-12px",
    padding: "10px",
};

const fetchRandomHadith = async () => {
    try {
        newButtonElement.textContent = 'Please wait...';
        const res = await fetch('https://random-hadith-generator.vercel.app/bukhari/');
        const data = await res.json();

        if (data && data.data) {
            narratorElement.innerHTML = `<span>Narrator:</span> <em>${data.data.header || 'Unknown'}</em>`;
            bookElement.innerHTML = `<span>Book:</span> ${data.data.book || 'Unknown'}`;
            bookNameElement.innerHTML = `<span>Book Name:</span> ${data.data.bookName || 'Unknown'}`;
            chapterNameElement.innerHTML = `<span>Chapter:</span> ${data.data.chapterName || 'Unknown'}`;
            refnoElement.innerHTML = `<span>Reference No:</span> ${data.data.refno || 'Unknown'}`;

            Object.keys(style).forEach(property => {
                bookInfoElement.style[property] = style[property];
            });

            // Display the Hadith
            hadithElement.textContent = data.data.hadith_english || 'No Hadith found.';
            newButtonElement.textContent = 'New Hadith';
        } else {
            throw new Error('Invalid data structure');
        }
    } catch (error) {
        console.log(`Something went wrong: ${error}`);
        newButtonElement.textContent = 'Try Again';
    }
};

newButtonElement.addEventListener('click', fetchRandomHadith);

let speech = null;

soundElement.addEventListener('click', () => {
    if (speech === null && hadithElement.innerText !== 'Click on the "New Hadith" Button') {
        speech = new SpeechSynthesisUtterance(hadithElement.innerText);
        speech.onend = () => { speech = null; };
        speechSynthesis.speak(speech);
    } else {
        speechSynthesis.cancel();
        speech = null;
    }
});

fetchRandomHadith();
