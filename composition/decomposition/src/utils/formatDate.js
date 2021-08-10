export default function formatDate(date) {
  const day = date.getDate();
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];
  const weekDays = [
    'воскресенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
  ];
  const month = months[date.getMonth()];
  const weekDay = weekDays[date.getDay()];
  // const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formatTime = (x) => (x < 10 ? `0${x}` : x);

  return `${day} ${month}, ${weekDay} ${formatTime(hours)}:${formatTime(
    minutes
  )}`;
}
