export function smb_time_format(millis: number): string {
  let seconds = parseInt(millis / 1000);
  millis = parseInt(millis % 1000);
  let hours = parseInt(seconds / 3600);
  seconds = seconds % 3600;
  let minutes = parseInt(seconds / 60);
  seconds = seconds % 60;

  if (hours) {
    minutes = ("00" + minutes).slice(-2);
  }

  seconds = ("00" + seconds).slice(-2);
  millis = ("000" + millis).slice(-3);

  let str = minutes + ":" + seconds + "." + millis;
  if (hours) {
    str = hours + ":" + str;
  }

  return str;
}

export function smb_result_code_str(result_code: number): string {
  if (result_code == 0) {
    return "FIN";
  } else if (result_code == 1) {
    return "WLK";
  } else if (result_code == 2) {
    return "DNF";
  } else {
    return "DNS";
  }
}
