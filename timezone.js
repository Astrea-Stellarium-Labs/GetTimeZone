function seconds_with_leading_zeros(dt) 
{ 
  return /\((.*)\)/.exec(new Date().toString())[1];
}

dt = new Date(); 
var timezone = seconds_with_leading_zeros(dt);
document.getElementById("timezone_text").innerText = "Your time zone is: " + timezone
