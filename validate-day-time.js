function  validateDate(value) {
  // tslint:disable-next-line:max-line-length
  var dayRegex = /((^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(10|12|0?[13578])([-\/\._])(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(11|0?[469])([-\/\._])(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(0?2)([-\/\._])(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([3579][26]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][13579][26])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][13579][26])([-\/\._])(0?2)([-\/\._])(29)$))/ig;
  
  if (!dayRegex.test(value)) {
    return false;
  }
  return true;
}

function validateTime(value) {
  // tslint:disable-next-line:max-line-length
  var timeRegex = /^[1-9]\d{3}([-\/\._])(0[1-9]|1[0-2])([-\/\._])(0[1-9]|[1-2][0-9]|3[0-1])\s+(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/;
  
  if (!timeRegex.test(value)) {
    return false;
  }
  return true;
}

const validateDayFormat = (value) => {
    // tslint:disable-next-line:max-line-length
    const dayRegex = /(^[Y|y]{4}([-\/\._])M{2}([-\/\._])[D|d]{2})|(^M{2}([-\/\._])[D|d]{2}([-\/\._])[Y|y]{4})$/;
    if (!dayRegex.test(value)) {
      return false;
    }
    return true;
}

const validateTimeFormat = (value) => {
    // tslint:disable-next-line:max-line-length
    const timeRegex = /(^[Y|y]{4}([-\/\._])M{2}([-\/\._])[D|d]{2})|(^M{2}([-\/\._])[D|d]{2}([-\/\._])[Y|y]{4})\s+[H|h]{2}:m{2}:[S|s]{2}$/;
    if (!timeRegex.test(value)) {
      return false;
    }
    return true;
}
console.log(validateDate('2018-02-28'))
console.log(validateDate('2018-02-31'))
console.log(validateTime('2018-01-28 12:20:21'))
console.log(validateTime('2018-01-29 32:20:21'))
