function get_timezone(dt) 
{ 
  // honestly, i'm not a javascript developer, but i can somewhat explain this
  // so the first part is regex - all it does is get anything thats enclosed in parenthesis
  // then we execute the regex statement on a javascript date object thats been convert to string
  // date objects look like this: Thu Mar 11 2021 00:00:00 GMT-0500 (Eastern Standard Time)
  // and our timezone is conveniently enclosed in parenthesis
  // so the regex gets that out, and the [1] part is needed otherwise our output
  // would still have the parenthesis
  return /\((.*)\)/.exec(dt.toString())[1];
}

dt = new Date(); 
var timezone = get_timezone(dt);
document.getElementById("timezone_text").innerText = "Your time zone is: " + timezone
