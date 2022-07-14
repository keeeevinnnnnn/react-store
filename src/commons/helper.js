// 轉換人民幣樣式 zh=中文, currency=貨幣, CNY=貨幣來源國家
export const formatPrice = (cents) => {
  return (cents / 100).toLocaleString("zh", {
    style: "currency",
    currency: "CNY",
  });
};
