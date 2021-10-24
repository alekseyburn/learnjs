const isSimpleNumber = (n) => {
  for (let i = 1; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const showSimpleNumbers = (n) => {
  for (let i = 2; i <= n; i += 1) {
    if (isSimpleNumber(i)) {
      console.log(i);
    }
  }
};

showSimpleNumbers(2);
