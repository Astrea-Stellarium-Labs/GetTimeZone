// note that i'm not really a javascript programmer
// so what's here might not be amazing
// but it should be fine

const tzName = (type) => {
    const DTFormat = new Intl.DateTimeFormat([], { "timeZoneName": type });
    const tzName = DTFormat
        .formatToParts(Date.now())
        .find((m) => m.type === "timeZoneName");
    return tzName.value;
}

document.getElementById("timezone").innerText = "Your time zone is: " + tzName("short")
document.getElementById("fullname").innerText = "Full name: " + tzName("long")
document.getElementById("iananame").innerHTML = "IANA name: " + (new Intl.DateTimeFormat().resolvedOptions().timeZone);