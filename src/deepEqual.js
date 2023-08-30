const deepEqual = (a, b) => {
  if (a === b) {
    return true;
  }
  else if (typeof(a) == 'object' && typeof(b) == 'object'){
    if(JSON.stringify(a) === JSON.stringify(b)){
    return true;
    }
    else {
      const keys1 = Object.keys(a);
      const keys2 = Object.keys(b);
      if (keys1.length !== keys2.length) {
        for (let key of keys1) {
          if ((a[key] !== b[key]) && a[key] !== 'undefind' && b[key] !== 'undefind') {
            return false;
          }
          else {
            return true;
          }
        }
      }
    }
  }
  else {
    return false;
  }
  
}

module.exports = deepEqual;