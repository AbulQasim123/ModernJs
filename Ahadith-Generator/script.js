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
        if (Array.isArray(data)) {
            console.log('Length of data:', data.length);
        } else {
            // console.log('Data is not an array');
        }
        narratorElement.textContent = data.data.header !== null ? data.data.header : 'Unknown';
        bookElement.innerHTML = `<b>book :)</b> ${data.data.book}`;
        bookNameElement.innerHTML = `<b>bookName :)</b> ${data.data.bookName}`;
        chapterNameElement.innerHTML = `<b>chapterName :)</b> ${data.data.chapterName}`;
        refnoElement.innerHTML = `<b>Refno :)</b> ${data.data.refno}`;
        Object.keys(style).forEach(property => {
            bookInfoElement.style[property] = style[property];
        });
        hadithElement.textContent = data.data.hadith_english;
        newButtonElement.textContent = 'New Hadith';
    } catch (error) {
        console.log(`Something went wrong: ${error}`);
        newButtonElement.textContent = 'Try Again';
    }
}

newButtonElement.addEventListener('click', fetchRandomHadith)

let speech = null;
soundElement.addEventListener('click', () => {
    if (speech === null) {
        speech = new SpeechSynthesisUtterance(hadithElement.innerText);
        speech.onend = () => { speech = null; };
        speechSynthesis.speak(speech);
    } else {
        speechSynthesis.cancel();
        speech = null;
    }
});
