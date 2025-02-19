const btnAdder = () =>{
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then(res => res.json())
    .then(data =>btnShower(data.categories))
}
const btnShower = (id) => {
    const btnContainer = document.getElementById('btn-container');
    id.forEach(btn => {

        const div = document.createElement('div');
        div.className = ""
        div.innerHTML = `
        <button class="btn px-3 flex justify-center items-center md:px-14 border-borderCl py-1 md:py-3 h-auto">
            <img class="w-10 md:w-auto" src="${btn.category_icon}" alt="">
            <p class="font-semibold md:text-4 text-sm">${btn.category}</p>

        </button>
        `;
        btnContainer.append(div);
        
    });
}
btnAdder()