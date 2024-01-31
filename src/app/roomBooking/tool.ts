export function getDay(date: string): string {
  const days = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  const num = new Date(date).getDay();
  return days[num];
}

export function timeFormat(checkDate: string): string {
  const month = checkDate.split('/')[1];
  const day = checkDate.split('/')[2];
  const date = checkDate;
  return `${month} 月 ${day} 號${getDay(date)}`;
}

export function calcDays(checkInDate: string, checkOutDate: string): number {
  const day1: any = new Date(checkInDate);
  const day2: any = new Date(checkOutDate); //由於 Date 會轉 number 故使用 any
  const difference = Math.abs(day2 - day1);
  const days = difference / (1000 * 3600 * 24);
  return days;
}
