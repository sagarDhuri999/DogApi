console.log('om');


const a = document.getElementById('#img');
const p = document.getElementById('#p');



async function fetchData() {
    const response = await fetch(`https://dog.ceo/api/breeds/list/all`)

    const data = await response.json()
    BreedList(data.message)
}

fetchData()

function BreedList(breedName) {
    document.getElementById("line").innerHTML = `
<select onchange="yo(this.value)">
           <option>choose breed</option>
           ${Object.keys(breedName).map((pets, i) => {
        return `<option keys=${++i}>${pets}</option>`
    }).join("")}
       </select>

`
}

async function yo(names) {
    // alert(names)
    if (names != "choose breed") {

        const response = await fetch(`https://dog.ceo/api/breed/${names}/images`
        )
        const data = await response.json()
        fetchImg(data.message);
        console.log(data.message);

    }

}



function fetchImg(breedImg) {
    document.getElementById("photos").innerHTML = breedImg.map((petImg) => {

        return `<img id="img"src=${petImg}>`
    }).join("")

}







// const imgBox = document.querySelector('.imgBox');
// const whiteBoxes = document.getElementsByClassName('whiteBox');

// imgBox.addEventListener('dragstart', (e) => {
//     // console.log('DragStart has been triggered');
//     setTimeout(() => {
//         e.target.className = 'hide';
//     }, 0);

// })
// imgBox.addEventListener('dragend', (e) => {
//     // console.log('DragEnd has been triggered');
//     e.target.className = " imgBox";

// })
// for (whiteBox of whiteBoxes) {
//     whiteBox.addEventListener('dragover', (e) => {
//         // console.log('DragOver method  triggered');
//         e.preventDefault();


//     })
//     whiteBox.addEventListener('dragenter', (e) => {
//         // console.log('DragEnter method triggered');

//     })
//     whiteBox.addEventListener('dragleave', (e) => {
//         // console.log('Dragleave method  triggered');

//     })
//     whiteBox.addEventListener('drop', (e) => {
//         // console.log('Drop method drop ');
//         e.target.append(imgBox);

//     })


// let btn = document.getElementById('btn');
// function getData() {
//     console.log('str Data')
//     url = 'hi.txt';
//     fetch(url).then((response) => {
//         console.log('inside fetch');
//         return response.text();
//     }).then((data) => {
//         console.log('Inside second')
//         console.log(data);
//     })
// }
// console.log("Before");
// getData();
// console.log('after Data');