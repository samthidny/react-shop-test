const GBPFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'GBP',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

const formatCurrency = (n) => {
  return GBPFormatter.format(n / 100);
}

const renderTime = () => {
  return new Date().getTime();
}

export { formatCurrency, renderTime };