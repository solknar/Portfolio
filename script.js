var currentDate = new Date();
var cookieName = 'clientName';
var currentName = "";



function setNameCookie(){
    var expireDate = new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDate());
    currentName = document.getElementById('clientname').value;
    var cookieValue = currentName;
    var setCookie = cookieName + '=' + cookieValue;
    setCookie += ';expires=' + expireDate.toUTCString();
    document.cookie = setCookie;
    $(function(){$("#ifNoCookie").hide();});
    var greetings1 = "<h1>Hello "+currentName+". Welcome to my portfolio where I hope you will get to know a bit about myself and my work.</h1>";
    return greetings1;
}

function setName(){
    writeToPage(setNameCookie());
    $(function(){
        $("#futureGreeting").fadeIn(1000);
});
}

function writeToPage(option){
    document.getElementById("futureGreeting").innerHTML=option;
    }

    function getCookie() {
        var ca = document.cookie.split('=');
        return ca[1];
      }

