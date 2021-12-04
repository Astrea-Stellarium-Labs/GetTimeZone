// note that i'm not really a javascript programmer
// so what's here might not be amazing
// but it should be fine

let date = Date.now();
const dtFormat = new Intl.DateTimeFormat([], {"timeZoneName": "short"});

const offsetNameFormat = dtFormat
    .formatToParts(date)
    .find((m) => m.type.toLowerCase() === "timezonename");

const offsetName = offsetNameFormat.value;
const zoneName = dtFormat.resolvedOptions().timeZone;

document.getElementById("timezone_text").innerText = "Your time zone is: " + offsetName
document.getElementById("othername_text").innerText = "Otherwise known as: " + zoneName