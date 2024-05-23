// function generateCat() {
//     let image = document.createElement('img');
//     let div = document.getElementById('flex-cat-gen');
//     // image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
//     image.src = "http://thecatapi.com/api/images/get?format=src&type=gif";
//     div.appendChild(image);
// }

const generateCat = () => {
    const image = new Image();
    image.src = "http://thedogapi.com/api/images/get?format=src&type=gif";
    document.getElementById('flex-cat-gen').appendChild(image);
};