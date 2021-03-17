const isDateToday = (timestamp: number) => {
  // Create date from input value
  const inputDate = new Date(timestamp);

  // Get today's date
  const todaysDate = new Date();

  // call setHours to take the time out of the comparison
  return (inputDate.setHours(0, 0, 0, 0) === todaysDate.setHours(0, 0, 0, 0));
};

export const formatDate = (timestamp: number) => {
  const dateObj = new Date(timestamp);
  const timeStr = dateObj.toLocaleTimeString('default', { hour: '2-digit', minute: '2-digit', hour12: false });

  const dateStr = isDateToday(timestamp) ? 'Today' : dateObj.toLocaleDateString('default', {
    month: 'short',
    year: 'numeric',
    day: 'numeric',
  });

  return `${dateStr}, ${timeStr}`;
};
