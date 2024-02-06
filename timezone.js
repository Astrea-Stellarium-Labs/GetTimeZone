// note that i'm not really a javascript programmer
// so what's here might not be amazing
// but it should be fine

const tz = (type) => {
    const DTFormat = new Intl.DateTimeFormat([], { "timeZoneName": type });
    const tzName = DTFormat
        .formatToParts(Date.now())
        .find((m) => m.type === "timeZoneName");
    return tzName.value;
}
const elem = (id) => {
    return document.getElementById(id);
}

elem("timezone").innerText = "Your time zone is: " + tz("short")
elem("fullname").innerText = "Full name: " + tz("long")
elem("iananame").innerHTML = "IANA name: " + (new Intl.DateTimeFormat().resolvedOptions().timeZone);