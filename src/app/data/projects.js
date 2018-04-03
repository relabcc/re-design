import addDays from 'date-fns/add_days';

const tags = [
  { key: 'tag1', label: '標籤一' },
  { key: 'tag2', label: '標籤二' },
  { key: 'tag3', label: '標籤三' },
];

const highlight = {
  icon: '//loremflickr.com/640/640/icon?random=',
  content: '石不個時往件，以利像巴基建；親對生學安作收元權國教，盡根明產雙大：都不不；月安說超天少火任草步就得少越的，可住通遊生！裡前戲連進。',
};

const participant = {
  avatar: '//loremflickr.com/640/640/people?random=',
  name: '王小明',
  positions: ['設計'],
};

const smaple = {
  title: '作品名稱',
  short: '站兩得水光了時了的子人很。中司離參告機選求適難發正如代中好給影。',
  long: '晚而到告，考式館還長病慢們，位有較服的習懷造中品響來取麼意謝親以都排事可球沒河實沒，身面地事定力，收不顯可回點身世保如遠思久來上過地小舉國麼時推有青連資公共又點幾圖題金買心，先去沒過解共部什天的樂，達的子畫？一氣古史。',
  preview: '//loremflickr.com/640/640?random=',
  images: [
    '//loremflickr.com/1080/1280?random=',
  ],
  highlights: Array(3).fill(highlight).map((p, index) => ({
    ...p,
    icon: p.icon + index,
  })),
  participants: Array(5).fill(participant).map((p, index) => ({
    ...p,
    avatar: p.avatar + index,
  })),
};

export default Array(3).fill(smaple).map((project, index) => ({
  ...project,
  slug: `project${index + 1}`,
  addedAt: addDays(new Date(), index),
  preview: project.preview + index,
  images: project.images.map((img) => img + index),
  tags,
}));
