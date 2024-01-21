// 날짜 데이터 포맷
// yyyy-MM-dd
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const [year, month, day] = new Date(dateString)
    .toLocaleDateString('ko-KR', options)
    .split('.')
    .map((part) => part.trim());

  return `${year}-${month}-${day}`;
};

// 시간 데이터 포맷
// (오전/오후) 00:00
export const formatTime = (timeString) => {
  const options = { hour: 'numeric', minute: 'numeric', hour12: true };

  const formattedTime = new Date(`2022-01-01 ${timeString}`).toLocaleTimeString(
    'ko-KR',
    options
  );

  return formattedTime;
};
