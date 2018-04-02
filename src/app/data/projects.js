import addDays from 'date-fns/add_days';

const tags = [
  { key: 'tag1', label: '標籤一' },
  { key: 'tag2', label: '標籤二' },
  { key: 'tag3', label: '標籤三' },
];

const smaple = {
  title: '作品名稱',
  short: '敘述內容敘述內容敘述內容敘述內容敘述內容敘述內容',
  preview: '//via.placeholder.com/640x640',
};

export default Array(3).fill(smaple).map((project, index) => ({
  ...project,
  slug: `project${index + 1}`,
  addedAt: addDays(new Date(), index),
  tags,
}));
