const select = document.querySelector('select');
const allLang = ['en','ua'];

select.addEventListener('change', changeURLLanguage);
function changeURLLanguage() {

    let lang = select.value;
    location.href = window.location.pathname + '#'+ lang;
    location.reload();
}
    
    function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
    location.href = window.location.pathname + '#en';
    location.reload();
    
    }
    select.value = hash;
    document. querySelector ('p').innerHTML = langArr['device-notification--message' ][hash];

    for (let key in langArr) {
    let elem = document.querySelector('.lng-' + key);
    if (elem) {
    elem.innerHTML = langArr[key][hash];
    
    }
}
 }
    
    changeLanguage ();