// note that i'm not really a javascript programmer
// so what's here might not be amazing
// but it should be fine

function getTZName(type) {
    const DTFormat = new Intl.DateTimeFormat([], { "timeZoneName": type });
    const tzName = DTFormat
        .formatToParts(Date.now())
        .find((m) => m.type === "timeZoneName");
    return tzName.value;
}

document.getElementById("timezone").innerText = "Your time zone is: " + getTZName("short")
document.getElementById("fullname").innerText = "Full name: " + getTZName("long")

const ianaName = new Intl.DateTimeFormat().resolvedOptions().timeZone;
var temp_link = document.createElement("a");
temp_link.href = "https://www.iana.org/time-zones";
temp_link.innerHTML = "IANA";

document.getElementById("iananame").innerHTML = temp_link.outerHTML + " name: " + ianaName;