import './style.css';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('./img', false, /.(png|jpe?g|svg)$/));

$(document).ready(function() {

    document.forms["connexion"].addEventListener("submit", function(e) {
        const username = 'google@gmail.com';
        const password = 'motdepasse';
        e.preventDefault();
    
        if ($("input#email").val() != username || $("input#password").val() != password) {
            console.log($("input#email").val());
            $(".form > div:nth-child(1)").addClass("erreur");
        }
        else{
            alert('Connexion réussie !');
        }
    });

    

});