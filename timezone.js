// ultimately, using a library to parse time zones
// is much safer than using regex to do so
// since libraries are not dependent on how the individual
// device will format the timezone

dt = luxon.DateTime.now();
let timezone = dt.offsetNameShort
let other_timezone = dt.zoneName
document.getElementById("timezone_text").innerText = "Your time zone is: " + timezone
document.getElementById("othername_text").innerText = "Otherwise known as: " + other_timezone