function* generateMessage() {
  yield "Hi Sravan 1st Second";

  yield "Hi Sravan 5th Second";

  yield "Hi Sravan 15th Second";
}

const iterator = generateMessage();
const intervalArray = [1, 5, 15];

for (interval of intervalArray) {
  setTimeout(() => {
    const next = iterator.next();
    console.log(next.value);
  }, interval * 1000);
}
