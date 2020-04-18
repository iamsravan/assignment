let i = 1;
const intervalArray = [1, 5, 15];

const promiseMethod = (interval) => {
  return new Promise((resolve, reject) => {
    if (intervalArray.includes(interval)) {
      resolve();
    }
    reject();
  });
};

const myInterval = setInterval(() => {
  promiseMethod(i)
    .then(() => {
      console.log(`Hi Sravan at ${i} second.`);
      i++;
    })
    .catch(() => {
      i++;
    });
}, 1000);

setTimeout(() => clearInterval(myInterval), 16000);
