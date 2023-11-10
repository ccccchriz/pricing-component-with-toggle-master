const prices = {
  basic: { monthly: 19.99, annually: 199.99 },
  professional: { monthly: 24.99, annually: 249.99 },
  master: { monthly: 39.99, annually: 399.99 },
};

document.getElementById("timeframe").addEventListener("change", (event) => {
  const isMonthly = event.currentTarget.checked;
  Object.keys(prices).forEach((key) => {
    document.getElementById(`price__${key}`).innerHTML = `&dollar;${
      isMonthly ? prices[key].monthly : prices[key].annually
    }`;
  });
});
