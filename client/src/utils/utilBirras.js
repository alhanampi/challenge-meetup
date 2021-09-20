export const beerAmountCount = (temp, guests) => {
  let quantity;
  let total;

  if (temp < 20) {
    quantity = (guests * 0.75) / 6;
    console.log(quantity);
  } else if (temp >= 20 && temp < 24) {
    quantity = guests / 6;
    console.log(quantity);
  } else {
    quantity = (guests * 3) / 6;
    console.log(quantity);
  }

  total = Math.ceil(quantity);
  console.log(total);
};
