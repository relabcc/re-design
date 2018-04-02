const smaple = {
  title: '作品名稱',
  short: '敘述內容敘述內容敘述內容敘述內容敘述內容敘述內容',
  preview: '//via.placeholder.com/640x640',
};

export default Array(3).fill(smaple).map((project, index) => ({
  ...project,
  slug: `project${index + 1}`,
}));
