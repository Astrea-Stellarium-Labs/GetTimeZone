// ultimately, using a library to parse time zones
// is much safer than using regex to do so
// since libraries are not dependent on how the individual
// device will format the timezone

dt = luxon.DateTime.now();
var timezone = dt.offsetNameShort
document.getElementById("timezone_text").innerText = "Your time zone is: " + timezone
