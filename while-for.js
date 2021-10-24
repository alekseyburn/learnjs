const isSimpleNumber = (n) => {
  for (let i = 2; i <= n / 2; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
};

const showSimpleNumbers = (n) => {
  for (let i = 2; i <= n; i += 1) {
    if (isSimpleNumber(i)) {
      console.log(i);
    }
  }
};

showSimpleNumbers(10);
