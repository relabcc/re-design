import addDays from 'date-fns/add_days';

const tags = [
  { key: 'tag1', label: '標籤一' },
  { key: 'tag2', label: '標籤二' },
  { key: 'tag3', label: '標籤三' },
];

const smaple = {
  title: '文章一',
  short: '敘述內容敘述內容敘述內容敘述內容敘述內容敘述內容',
  cover: '//via.placeholder.com/800x600',
};

export default Array(3).fill(smaple).map((project, index) => ({
  ...project,
  tags,
  date: addDays(new Date(), index),
  slug: `article${index + 1}`,
}));
