
// src/utils/dateFormatter.js
import { parseISO, format } from 'date-fns';

export const formatDate = (date) => {
  if (date instanceof Date && !isNaN(date.getTime())) {
    return format(date, 'yyyy-MM-dd');
  } else if (typeof date === 'string') {
      try{
          const parsedDate = parseISO(date);
          return format(parsedDate, 'yyyy-MM-dd');
      }catch(e){
          console.error("Invalid date string:", date);
          return null; // Or throw an error; handle invalid dates appropriately
      }
  }
  
  return null; // Or throw an error for invalid input
};


export const formatDateTime = (date) => {
  if (date instanceof Date && !isNaN(date.getTime())) {
      return format(date, 'yyyy-MM-dd HH:mm:ss'); // Format as YYYY-MM-DD HH:mm:ss
  }
    
    else if (typeof date === 'string') {
      try {
          const parsedDate = parseISO(date);
          return format(parsedDate, 'yyyy-MM-dd HH:mm:ss'); // Format as YYYY-MM-DD HH:mm:ss
      } catch (e) {
          console.error("Invalid date string:", date);
          return null; // Or throw an error; handle invalid dates appropriately
      }
  }
  return null; // Or throw an error for invalid input

};