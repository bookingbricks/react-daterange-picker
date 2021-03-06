import moment from '../moment';

export default function calendar(momentDate) {
  const start = moment(momentDate.startOf('month')).startOf('week');
  const end = moment(momentDate.endOf('month')).endOf('week');

  const range = moment.range(
    start,
    end
  );
  const array = [];
  let week = [];
  for (const day of range.by('day')) {
    week.push(day);
    if (week.length === 7) {
      array.push(week);
      week = [];
    }
  }
  return array;
}
