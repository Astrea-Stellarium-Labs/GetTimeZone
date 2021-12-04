// note that i'm not really a javascript programmer
// so what's here might not be amazing
// but it should be fine

let date = Date.now();

const shortDTFormat = new Intl.DateTimeFormat([], { "timeZoneName": "short" });
const offsetNameFormat = shortDTFormat
    .formatToParts(date)
    .find((m) => m.type.toLowerCase() === "timezonename");
const offsetName = offsetNameFormat.value;
document.getElementById("timezone_text").innerText = "Your time zone is: " + offsetName

const longDTFormat = new Intl.DateTimeFormat([], { "timeZoneName": "long" });
const longOffsetNameFormat = longDTFormat
    .formatToParts(date)
    .find((m) => m.type.toLowerCase() === "timezonename");
const longOffsetName = longOffsetNameFormat.value;
document.getElementById("fullname_text").innerText = "Full name: " + longOffsetName

const zoneName = shortDTFormat.resolvedOptions().timeZone;
var temp_link = document.createElement("a");
temp_link.href = "https://www.iana.org/time-zones";
temp_link.target = '_blank';
temp_link.innerHTML = "IANA";

document.getElementById("othername_text").innerHTML = temp_link.outerHTML + " name: " + zoneName;