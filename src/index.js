import './style.css';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('./img', false, /.(png|jpe?g|svg)$/));

$(document).ready(function() {

    $("#connexion").submit(function(e){
        e.preventDefault();
        const email = 'google@gmail.com';
        const password = 'motdepasse';
        
       if ($("input#email").val() != email || $("input#password").val() != password) {
            $(".form > div:nth-child(1)").addClass("erreur");
        }
        else{
            alert('Connexion réussie !');
        }
    });

    $("#forget").submit(function(e){
        e.preventDefault();
       const email_forget = 'google@gmail.com';
        if ($("input#email").val() != email_forget) {
            $(".form > div:nth-child(1)").addClass("erreur");
        }
        else{
            $(".sucess").addClass("send");
        }
    });

});