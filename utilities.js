const loadingSpinner = (display) => {
    const spinner = document.getElementById('loader');
    if(display){
        spinner.classList.remove('hidden');
    }
    else{
        spinner.classList.add('hidden');
    }
}