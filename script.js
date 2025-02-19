const btnAdder = () =>{
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then(res => res.json())
    .then(data =>btnShower(data.categories))
}
const btnShower = (id) => {
    const btnContainer = document.getElementById('btn-container');
    for(let btn of id){
        const div = document.createElement('div');
        div.innerHTML = `
        <a class="inline-flex text-center gap-2 btn px-7 py-4">
            <img class="w-10" src="${btn.category_icon}" alt="">
            <span>${btn.category}</span>

        </a>
        `;
        btnContainer.append(div);
    }
}
btnAdder()