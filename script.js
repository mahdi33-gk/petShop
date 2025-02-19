const btnAdder = () =>{
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then(res => res.json())
    .then(data =>btnShower(data.categories))
}
const btnShower = (id) => {
    const btnContainer = document.getElementById('btn-container');
    for(let btn of id){
        const div = document.createElement('a');
        div.innerHTML = `
        <a class="inline-flex border-borderCl border-2 md:text-center gap-2 btn px-7 p-2 justify-center">
            <img class="md:w-8 w-4 h-4 md:h-8" src="${btn.category_icon}" alt="">
            <span class="font-semibold md:text-4 text-sm">${btn.category}</span>

        </a>
        `;
        btnContainer.append(div);
    }
}
btnAdder()