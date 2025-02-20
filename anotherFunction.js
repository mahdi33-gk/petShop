const allBtn = document.getElementsById(`btn-${btn.category}`);
const allbtn = document.querySelectorAll('.categoryBtn');

const activeBtn = () => {
    for( let item of allbtn){
        item.classList.remove('active');
    }
}
activeBtn.addEventListener('click', function (){
    
})