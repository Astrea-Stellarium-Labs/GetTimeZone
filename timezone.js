// note that i'm not really a javascript programmer
// so what's here might not be amazing
// but it should be fine

let date = Date.now();

function getTimeZoneName(type) {
    const DTFormat = new Intl.DateTimeFormat([], { "timeZoneName": type });
    const offsetNameFormat = DTFormat
        .formatToParts(date)
        .find((m) => m.type === "timeZoneName");
    return offsetNameFormat.value;
}

document.getElementById("timezone_text").innerText = "Your time zone is: " + getTimeZoneName("short")
document.getElementById("fullname_text").innerText = "Full name: " + getTimeZoneName("long")

const zoneName = new Intl.DateTimeFormat().resolvedOptions().timeZone;
var temp_link = document.createElement("a");
temp_link.href = "https://www.iana.org/time-zones";
temp_link.innerHTML = "IANA";

document.getElementById("othername_text").innerHTML = temp_link.outerHTML + " name: " + zoneName;
