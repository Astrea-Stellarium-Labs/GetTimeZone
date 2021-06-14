// note that i'm not really a javascript programmer
// so what's here might not be amazing
// but it should be fine

dt = luxon.DateTime.now();
document.getElementById("timezone_text").innerText = "Your time zone is: " + dt.offsetNameShort
document.getElementById("othername_text").innerText = "Otherwise known as: " + dt.zoneName