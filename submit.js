const form = document.querySelector('form');



let showList = [];

form.addEventListener('submit', (e) => {
    if(localStorage.getItem('shows')) {
        let localStorageJson = localStorage.getItem('shows');
        showList = JSON.parse(localStorageJson);
    }

    e.preventDefault();
    const formData = new FormData(form);
    const obj = Object.fromEntries(formData);
    showList.push(obj);
    

    const json = JSON.stringify(showList);
    localStorage.setItem('shows', json);
});