!function(e){var s={};function r(n){if(s[n])return s[n].exports;var t=s[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=s,r.d=function(e,s,n){r.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,s){if(1&s&&(e=r(e)),8&s)return e;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var t in e)r.d(n,t,function(s){return e[s]}.bind(null,t));return n},r.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(s,"a",s),s},r.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},r.p="",r(r.s=0)}([function(e,s,r){"use strict";r.r(s);r(1);!function(e){let s={};e.keys().map((r,n)=>{s[r.replace("./","")]=e(r)})}(r(2));$(document).ready((function(){$("#connexion").submit((function(e){e.preventDefault();"google@gmail.com"!=$("input#email").val()||"motdepasse"!=$("input#password").val()?$(".form > div:nth-child(1)").addClass("erreur"):alert("Connexion réussie !")})),$("#forget").submit((function(e){e.preventDefault();"google@gmail.com"!=$("input#email").val()?$(".form > div:nth-child(1)").addClass("erreur"):$(".sucess").addClass("send")})),$("#inscription").submit((function(e){e.preventDefault(),alert("Inscription réussie !")})),$("#password_verif").keyup((function(e){$("#password_verif").val()==$("#password_inscri").val()?($("#unverif").removeClass(),$("#verif").addClass("display"),$("#password_verif").removeClass(),$("#password_verif").addClass("input_strong")):($("#verif").removeClass(),$("#unverif").addClass("display"),$("#password_verif").removeClass(),$("#password_verif").addClass("input_short"))})),$("#password_inscri").keyup((function(){$("#unsecure").html(function(e){var s=0;if(e.length<6)return $("#unsecure").removeClass(),$("#unsecure").addClass("short"),$("#password_inscri").removeClass(),$("#password_inscri").addClass("input_short"),"Votre mot de passe est trop court. Utilisez au moins 7 caractères.";e.length>7&&(s+=1,$("#unsecure").removeClass(),$("#password_inscri").removeClass());e.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)&&(s+=1);e.match(/([a-zA-Z])/)&&e.match(/([0-9])/)&&(s+=1);e.match(/([!,%,&,@,#,$,^,*,?,_,~])/)&&(s+=1);return s<3?($("#unsecure").removeClass(),$("#unsecure").addClass("weak"),$("#password_inscri").removeClass(),$("#password_inscri").addClass("input_weak"),"Votre mot de passe n'est pas sécurisé, utilisez au moins, une majuscule, une minuscule, un chiffre et un symbole."):3==s?($("#unsecure").removeClass(),$("#unsecure").addClass("good"),$("#password_inscri").removeClass(),$("#password_inscri").addClass("input_good"),"Votre mot de passe est correct mais peut être encore meilleur, utilisez au moins, une majuscule, une minuscule, un chiffre et un symbole."):($("#unsecure").removeClass(),$("#unsecure").addClass("strong"),$("#password_inscri").removeClass(),$("#password_inscri").addClass("input_strong"),"Parfait ! Votre mot de passe est sécurisé.")}($("#password_inscri").val()))}))}))},function(e,s,r){},function(e,s,r){var n={"./Guardians.png":3,"./background.jpg":4};function t(e){var s=o(e);return r(s)}function o(e){if(!r.o(n,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return n[e]}t.keys=function(){return Object.keys(n)},t.resolve=o,e.exports=t,t.id=2},function(e,s,r){"use strict";r.r(s),s.default=r.p+"img/Guardians.png"},function(e,s,r){"use strict";r.r(s),s.default=r.p+"img/background.jpg"}]);