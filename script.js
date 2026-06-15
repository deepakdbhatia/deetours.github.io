function setLanguage(lang){

    alert(
        "German language version will be connected in the next phase."
    );

}

function acceptCookies(){

    localStorage.setItem(
        "cookieConsent",
        "accepted"
    );

    document.getElementById(
        "cookie-banner"
    ).style.display="none";

}

function declineCookies(){

    localStorage.setItem(
        "cookieConsent",
        "declined"
    );

    document.getElementById(
        "cookie-banner"
    ).style.display="none";

}

window.onload = function(){

    if(
        localStorage.getItem(
            "cookieConsent"
        )
    ){

        document.getElementById(
            "cookie-banner"
        ).style.display="none";

    }

};
