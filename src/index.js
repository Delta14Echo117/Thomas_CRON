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

    $("#inscription").submit(function(e){
        e.preventDefault();
        if($("#password_inscri").val() == $("#password_verif").val()){
            alert('Inscription réussie !');
        }else{
            $(".incorrect").addClass("erreur");
        }
    });

    $('#password_verif').keyup(function(e){
        checkPassword($('#password_verif').val());
    })
    function checkPassword(password2){
        if(password2 == $("#password_inscri").val()){
            $('#unverif').removeClass();
            $('#verif').addClass("display");
            $('#password_verif').removeClass()
            $('#password_verif').addClass('input_strong')
        }else{
            $('#verif').removeClass();
            $('#unverif').addClass("display");
            $('#password_verif').removeClass()
            $('#password_verif').addClass('input_short')
        }
    }


    $('#password_inscri').keyup(function() {
        $('#unsecure').html(checkStrength($('#password_inscri').val()))
        })
        function checkStrength(password) {
        var strength = 0
        if (password.length < 6) {
        $('#unsecure').removeClass()
        $('#unsecure').addClass('short')
        $('#password_inscri').removeClass()
        $('#password_inscri').addClass('input_short')
        return 'Votre mot de passe est trop court. Utilisez au moins 7 caractères.'
        }
        if (password.length > 7) {
            strength += 1
            $('#unsecure').removeClass()
            $('#password_inscri').removeClass()

        }
        if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1
        if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1
        if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
      
        if (strength < 3) {
        $('#unsecure').removeClass()
        $('#unsecure').addClass('weak')
        $('#password_inscri').removeClass()
        $('#password_inscri').addClass('input_weak')
        return "Votre mot de passe n'est pas sécurisé, utilisez au moins, une majuscule, une minuscule, un chiffre et un symbole."
        } else if (strength == 3) {
        $('#unsecure').removeClass()
        $('#unsecure').addClass('good')
        $('#password_inscri').removeClass()
        $('#password_inscri').addClass('input_good')
        return "Votre mot de passe est correct mais peut être encore meilleur, utilisez au moins, une majuscule, une minuscule, un chiffre et un symbole."
        } else {
        $('#unsecure').removeClass()
        $('#unsecure').addClass('strong')
        $('#password_inscri').removeClass()
        $('#password_inscri').addClass('input_strong')
        return 'Parfait ! Votre mot de passe est sécurisé.'
        }
        }

});