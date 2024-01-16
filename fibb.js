function fibs(num) {
    let result = [0, 1];
    for (let i = 2; i < num; i++) {
      result[i] = result[i - 1] + result[i - 2];
    }
    return result;
  }

function fibsRec(num) {
    if (num <= 2) {
        return num > 1 ? [0, 1] : [0];
    } else {
        let s = fibsRec(num - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
}