let Digital = new Date();
let hours = Digital.getHours();
let hello_time = "";
if (hours >= 5 && hours <= 11){
    hello_time = "Доброе утро";
}
else if (hours >= 12 && hours <= 17){
    hello_time = "Добрый день";
}
else {
    hello_time = "Добрый вечер";
}
document.getElementById("hello-time").innerHTML = hello_time;