import { format } from "date-fns";
export const formatDate = date => format(date, 'yyyy-MM-dd');
export const formatDateLarge = date => format(date, 'yyyy-MM-dd HH:mm a');
export const formatHour = (hour, minutes) => `${hour<10?'0'+hour:hour}:${minutes<10?'0'+minutes:minutes}`;
export const formatFlightTime = (hour, minutes) => `${hour}h ${minutes}m`;
export const formatPlural = num => num === 1 ? '' : 's';