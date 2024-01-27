export function formatPhoneNumber(phoneNumber: string | number) {
  // 移除所有非數字字符
  const cleaned = ('' + phoneNumber).replace(/\D/g, '');

  // 分割數字並加入連字符
  const match = cleaned.match(/(\d{1,3})(\d{1,3})?(\d{1,4})?/);
  const formatted = match && match.slice(1).filter(Boolean).join('-');

  return formatted;
}

export function calculateStayDays(checkInDate: string, checkOutDate: string) {
  if (!checkInDate || !checkOutDate) return;
  const checkIn = new Date(checkInDate).getTime();
  const checkOut = new Date(checkOutDate).getTime();
  return (checkOut - checkIn) / (1000 * 60 * 60 * 24); // 將毫秒轉換為天
}

export function formatDate(dateStr: string, timeStr?: string) {
  if (!dateStr) return;
  const days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  const date = new Date(dateStr);
  return `${date.getMonth() + 1} 月 ${date.getDate()} 日 ${days[date.getDay()]}${timeStr ? `，${timeStr}` : ''}`;
}

export function formatNTD(num: number) {
  if (!num) return;
  return num.toLocaleString('zh-TW', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
}
