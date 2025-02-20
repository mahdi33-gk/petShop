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
        <button onclick="loadcategoryData('${btn.category}')" class="btn categoryBtn px-3 flex justify-center items-center md:px-14 border-borderCl py-1 md:py-3 h-auto">
            <img class="w-10 md:w-auto" src="${btn.category_icon}" alt="">
            <p class="font-semibold md:text-4 text-sm">${btn.category}</p>

        </button>
        `;
        btnContainer.append(div);
        
    });
}
btnAdder();
// load data by category
const loadcategoryData = (category) => {
    const cardContainer = document.getElementById('cards-container');
    cardContainer.innerHTML = ''
    loadingSpinner(true);
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    .then(res => res.json())
    .then(data => {
        setTimeout(() => {
            showsPets(data.data);
            loadingSpinner(false)
        },2000)
    })
}




// display all pets
const displayPets = () => {
    loadingSpinner(true);
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then(res => res.json())
    .then(data => {
        setTimeout(() => {
            showsPets(data.pets);
            loadingSpinner(false)
        },2000)
    })

   
}

const showsPets = (id) => {
    const cardContainer = document.getElementById('cards-container');
    cardContainer.innerHTML = ''
    
    for( let item of id){
        const div = document.createElement('div');
        div.className = 'card card-compact col-span-3 md:col-span-1 px-5 py-3 border-borderCard border-2';
        div.innerHTML =` 
        <figure>
          <img class="p-2"
            src="${item.image}" />
        </figure>
        <div class="card-body">
           <div class="border-b-2 border-borderCard pb-3">
                <h2 class="font-bold text-[20px] mb-1">${item.pet_name}</h2>
                <p><i class="fa-solid mr-1 fa-credit-card"></i> Breed: ${item.breed}</p>
                <p><i class="fa-solid mr-2 fa-calendar-days"></i>   Birth: ${item.date_of_birth}</p>
                <p><i class="fa-solid mr-1 fa-venus-mars"></i> Gender: ${item.gender}</p>
                <p><i class="mr-3 fa-solid fa-dollar-sign"></i> Price: ${item.price}</p>
           </div>
           <div>

           </div>
          
            <div class="flex gap-3 px-2 justify-between max-w-screen-sm">
                <a class="border-2 cursor-pointer border-borderCl px-3 py-1 rounded-md w-auto h-auto"><i class="fa-solid fa-thumbs-up"></i></a>
                <a class="font-bold cursor-pointer border-2 border-borderCl px-3 py-1 rounded-md text-primaryBg w-auto h-auto">Adopt</a>
                <a class="font-bold cursor-pointer border-2 border-borderCl px-3 py-1 rounded-md text-primaryBg w-auto h-auto">Details</a>
            </div>
            
          
        </div>
        `;
        cardContainer.append(div);
    }
}
displayPets();