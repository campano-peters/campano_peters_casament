function loadTranslations(lang) {
    fetch(`assets/lang/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('title').textContent = data.title;
            document.getElementById('under-construction').textContent = data.underConstruction;
        })
        .catch(error => console.error('Error loading translations:', error));
}

function changeLanguage(lang) {
    loadTranslations(lang);
}