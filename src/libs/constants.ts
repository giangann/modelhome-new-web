export const companyName = 'Modelhome';
export const boxShadowHeader =
  '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)';
export const generateImage = (width: number, height: number) => {
  const randId = Math.floor(Math.random() * 900) + 10;
  const resultPicksumURL = `https://picsum.photos/id/${randId}/${width}/${height}`;
  return resultPicksumURL;
};

export const generateRandomSizeImage = () => {
  const randId = Math.floor(Math.random() * 900) + 10;

  const randWidth = Math.floor(Math.random() * 200) + 200;
  const randHeight = Math.floor(Math.random() * 200) + 200;

  const basePicsumUrl = 'https://picsum.photos/id/';

  return `${basePicsumUrl}/${randId}/${randWidth}/${randHeight}`;
};

export const getImageArrayFromAssets = (length: number) => {
  const arrImage = [];
  const prefixPath = '/src/assets/images/';

  for (let i = 0; i < length; i++) {
    arrImage.push(`${prefixPath}project_${i + 1}.jpg`);
  }

  return arrImage;
};

export const generateRandomArrayImage = (length: number) => {
  // const randId =
  const arrImage = [];
  for (let i = 0; i < length; i++) {
    arrImage.push(generateRandomSizeImage());
  }

  return arrImage;
};

export const ALL_IMAGE = generateRandomArrayImage(50);
export const HEADER_ITEMS = [
  // {
  //   name: 'Về chúng tôi',
  //   link: '#',
  // },
  {
    name: 'Trang chủ',
    link: '/',
  },
  {
    name: 'Các dự án',
    link: '/projects',
  },
  // {
  //   name: 'Kiến trúc',
  //   link: '#',
  // },
  // {
  //   name: 'Nội thất',
  //   link: '#',
  // },
  {
    name: 'Thư viện ảnh',
    link: '/images-library',
  },
  {
    name: 'Tin tức',
    link: '/posts',
  },
  {
    name: 'Liên hệ',
    link: '/contact',
  },
];

export const LIST_POST = [
  {
    id: 1,
    title: 'Kiến trúc tuyệt đẹp của Tony de villa',
    author: 'Tác giả',
    created_at: '06/01/2023',
    thumbnail: generateImage(400, 300),
    is_newest: true,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu fringilla nunc. In sed enim ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas quis tellus commodo, vulputate purus eu, ornare justo. Curabitur pharetra, risus a imperdiet porta, urna libero gravida dui, ut finibus dolor nibh ut ipsum. Maecenas sed euismod risus. Duis tempus luctus ornare. Cras a leo tellus. Donec tempor ultrices sapien, in malesuada orci consequat non. Nulla fermentum, mauris quis volutpat mattis, tellus nisl lacinia tellus, quis tristique tellus elit scelerisque sapien. Curabitur bibendum eros tellus, non placerat lacus lobortis elementum. Maecenas vehicula eros a lacus volutpat, sed vulputate tellus dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu fringilla nunc. In sed enim ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas quis tellus commodo, vulputate purus eu, ornare justo. Curabitur pharetra, risus a imperdiet porta, urna libero gravida dui, ut finibus dolor nibh ut ipsum. Maecenas sed euismod risus. Duis tempus luctus ornare. Cras a leo tellus. Donec tempor ultrices sapien, in malesuada orci consequat non. Nulla fermentum, mauris quis volutpat mattis, tellus nisl lacinia tellus, quis tristique tellus elit scelerisque sapien. Curabitur bibendum eros tellus, non placerat lacus lobortis elementum. Maecenas vehicula eros a lacus volutpat, sed vulputate tellus dignissim. quis tristique tellus elit scelerisque sapien. Curabitur bibendum eros tellus, non placerat lacus lobortis elementum. Maecenas vehicula eros a lacus volutpat, sed vulputate tellus dignissim.',
  },
  {
    id: 2,
    title: 'Kiến trúc tuyệt đẹp của Tony de villa',
    author: 'Tác giả',
    thumbnail: generateImage(400, 300),
    created_at: '06/01/2023',
    is_newest: false,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu fringilla nunc. In sed enim ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas quis tellus commodo, vulputate purus eu, ornare justo. Curabitur pharetra, risus a imperdiet porta, urna libero gravida dui, ut finibus dolor nibh ut ipsum. Maecenas sed euismod risus. Duis tempus luctus ornare. Cras a leo tellus. Donec tempor ultrices sapien, in malesuada orci consequat non. Nulla fermentum, mauris quis volutpat mattis, tellus nisl lacinia tellus, quis tristique tellus elit scelerisque sapien. Curabitur bibendum eros tellus, non placerat lacus lobortis elementum. Maecenas vehicula eros a lacus volutpat, sed vulputate tellus dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu fringilla nunc. In sed enim ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas quis tellus commodo, vulputate purus eu, ornare justo. Curabitur pharetra, risus a imperdiet porta, urna libero gravida dui, ut finibus dolor nibh ut ipsum. Maecenas sed euismod risus. Duis tempus luctus ornare. Cras a leo tellus. Donec tempor ultrices sapien, in malesuada orci consequat non. Nulla fermentum, mauris quis volutpat mattis, tellus nisl lacinia tellus, quis tristique tellus elit scelerisque sapien. Curabitur bibendum eros tellus, non placerat lacus lobortis elementum. Maecenas vehicula eros a lacus volutpat, sed vulputate tellus dignissim. quis tristique tellus elit scelerisque sapien. Curabitur bibendum eros tellus, non placerat lacus lobortis elementum. Maecenas vehicula eros a lacus volutpat, sed vulputate tellus dignissim.',
  },
  {
    id: 3,
    title: 'Kiến trúc tuyệt đẹp của Tony de villa',
    author: 'Tác giả',
    thumbnail: generateImage(400, 300),
    created_at: '06/01/2023',
    is_newest: false,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu fringilla nunc. In sed enim ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas quis tellus commodo, vulputate purus eu, ornare justo. Curabitur pharetra, risus a imperdiet porta, urna libero gravida dui, ut finibus dolor nibh ut ipsum. Maecenas sed euismod risus. Duis tempus luctus ornare. Cras a leo tellus. Donec tempor ultrices sapien, in malesuada orci consequat non. Nulla fermentum, mauris quis volutpat mattis, tellus nisl lacinia tellus, quis tristique tellus elit scelerisque sapien. Curabitur bibendum eros tellus, non placerat lacus lobortis elementum. Maecenas vehicula eros a lacus volutpat, sed vulputate tellus dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu fringilla nunc. In sed enim ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas quis tellus commodo, vulputate purus eu, ornare justo. Curabitur pharetra, risus a imperdiet porta, urna libero gravida dui, ut finibus dolor nibh ut ipsum. Maecenas sed euismod risus. Duis tempus luctus ornare. Cras a leo tellus. Donec tempor ultrices sapien, in malesuada orci consequat non. Nulla fermentum, mauris quis volutpat mattis, tellus nisl lacinia tellus, quis tristique tellus elit scelerisque sapien. Curabitur bibendum eros tellus, non placerat lacus lobortis elementum. Maecenas vehicula eros a lacus volutpat, sed vulputate tellus dignissim. quis tristique tellus elit scelerisque sapien. Curabitur bibendum eros tellus, non placerat lacus lobortis elementum. Maecenas vehicula eros a lacus volutpat, sed vulputate tellus dignissim.',
  },
  {
    id: 4,
    title: 'Kiến trúc tuyệt đẹp của Tony de villa',
    author: 'Tác giả',
    thumbnail: generateImage(400, 300),
    created_at: '06/01/2023',
    is_newest: false,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu fringilla nunc. In sed enim ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas quis tellus commodo, vulputate purus eu, ornare justo. Curabitur pharetra, risus a imperdiet porta, urna libero gravida dui, ut finibus dolor nibh ut ipsum. Maecenas sed euismod risus. Duis tempus luctus ornare. Cras a leo tellus. Donec tempor ultrices sapien, in malesuada orci consequat non. Nulla fermentum, mauris quis volutpat mattis, tellus nisl lacinia tellus, quis tristique tellus elit scelerisque sapien. Curabitur bibendum eros tellus, non placerat lacus lobortis elementum. Maecenas vehicula eros a lacus volutpat, sed vulputate tellus dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu fringilla nunc. In sed enim ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas quis tellus commodo, vulputate purus eu, ornare justo. Curabitur pharetra, risus a imperdiet porta, urna libero gravida dui, ut finibus dolor nibh ut ipsum. Maecenas sed euismod risus. Duis tempus luctus ornare. Cras a leo tellus. Donec tempor ultrices sapien, in malesuada orci consequat non. Nulla fermentum, mauris quis volutpat mattis, tellus nisl lacinia tellus, quis tristique tellus elit scelerisque sapien. Curabitur bibendum eros tellus, non placerat lacus lobortis elementum. Maecenas vehicula eros a lacus volutpat, sed vulputate tellus dignissim. quis tristique tellus elit scelerisque sapien. Curabitur bibendum eros tellus, non placerat lacus lobortis elementum. Maecenas vehicula eros a lacus volutpat, sed vulputate tellus dignissim.',
  },
  {
    id: 5,
    title: 'Kiến trúc tuyệt đẹp của Tony de villa',
    author: 'Tác giả',
    thumbnail: generateImage(400, 300),
    created_at: '06/01/2023',
    is_newest: false,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu fringilla nunc. In sed enim ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas quis tellus commodo, vulputate purus eu, ornare justo. Curabitur pharetra, risus a imperdiet porta, urna libero gravida dui, ut finibus dolor nibh ut ipsum. Maecenas sed euismod risus. Duis tempus luctus ornare. Cras a leo tellus. Donec tempor ultrices sapien, in malesuada orci consequat non. Nulla fermentum, mauris quis volutpat mattis, tellus nisl lacinia tellus, quis tristique tellus elit scelerisque sapien. Curabitur bibendum eros tellus, non placerat lacus lobortis elementum. Maecenas vehicula eros a lacus volutpat, sed vulputate tellus dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu fringilla nunc. In sed enim ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas quis tellus commodo, vulputate purus eu, ornare justo. Curabitur pharetra, risus a imperdiet porta, urna libero gravida dui, ut finibus dolor nibh ut ipsum. Maecenas sed euismod risus. Duis tempus luctus ornare. Cras a leo tellus. Donec tempor ultrices sapien, in malesuada orci consequat non. Nulla fermentum, mauris quis volutpat mattis, tellus nisl lacinia tellus, quis tristique tellus elit scelerisque sapien. Curabitur bibendum eros tellus, non placerat lacus lobortis elementum. Maecenas vehicula eros a lacus volutpat, sed vulputate tellus dignissim. quis tristique tellus elit scelerisque sapien. Curabitur bibendum eros tellus, non placerat lacus lobortis elementum. Maecenas vehicula eros a lacus volutpat, sed vulputate tellus dignissim.',
  },
  {
    id: 6,
    title: 'Kiến trúc tuyệt đẹp của Tony de villa',
    author: 'Tác giả',
    thumbnail: generateImage(400, 300),
    created_at: '06/01/2023',
    is_newest: false,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu fringilla nunc. In sed enim ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas quis tellus commodo, vulputate purus eu, ornare justo. Curabitur pharetra, risus a imperdiet porta, urna libero gravida dui, ut finibus dolor nibh ut ipsum. Maecenas sed euismod risus. Duis tempus luctus ornare. Cras a leo tellus. Donec tempor ultrices sapien, in malesuada orci consequat non. Nulla fermentum, mauris quis volutpat mattis, tellus nisl lacinia tellus, quis tristique tellus elit scelerisque sapien. Curabitur bibendum eros tellus, non placerat lacus lobortis elementum. Maecenas vehicula eros a lacus volutpat, sed vulputate tellus dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu fringilla nunc. In sed enim ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas quis tellus commodo, vulputate purus eu, ornare justo. Curabitur pharetra, risus a imperdiet porta, urna libero gravida dui, ut finibus dolor nibh ut ipsum. Maecenas sed euismod risus. Duis tempus luctus ornare. Cras a leo tellus. Donec tempor ultrices sapien, in malesuada orci consequat non. Nulla fermentum, mauris quis volutpat mattis, tellus nisl lacinia tellus, quis tristique tellus elit scelerisque sapien. Curabitur bibendum eros tellus, non placerat lacus lobortis elementum. Maecenas vehicula eros a lacus volutpat, sed vulputate tellus dignissim. quis tristique tellus elit scelerisque sapien. Curabitur bibendum eros tellus, non placerat lacus lobortis elementum. Maecenas vehicula eros a lacus volutpat, sed vulputate tellus dignissim.',
  },
];

export const LIST_PROJECT = [
  {
    id: 1,
    name: 'Nội thất căn hộ The Park Home',
    investor: 'Chị Ngọc',
    location: 'Cầu Giấy, Hà Nội',
    square: 168,
    year: 2021,
    thumbnail: '/src/assets/images/project_1.jpg',
    all_image: getImageArrayFromAssets(9),
  },
  {
    id: 2,
    name: 'Thiết kế nội thất chung cư Golden Plaza',
    investor: 'Chị Hương',
    location: 'Mễ Trì, Hà Nội',
    square: 200,
    year: 2019,
    thumbnail: '/src/assets/images/project_2.jpg',
    all_image: getImageArrayFromAssets(9),
  },
  {
    id: 3,
    name: 'Nội thát căn hộ chung cư Eco Green',
    investor: 'Chị Lan',
    location: 'Nguyễn Xiển, Hà Nội',
    square: 115,
    year: 2020,
    thumbnail: '/src/assets/images/project_3.jpg',
    all_image: getImageArrayFromAssets(9),
  },
  {
    id: 4,
    name: 'Thiết kế cho căn hộ chung cư GoldSilk Complex',
    investor: 'Anh Chính',
    location: 'Hà Đông, Hà Nội',
    square: 194,
    year: 2021,
    thumbnail: '/src/assets/images/project_4.jpg',
    all_image: getImageArrayFromAssets(9),
  },
  {
    id: 5,
    name: 'Nội thất căn hộ Bea Sky',
    investor: 'Chị Thủy',
    location: 'Hoàng Mai, Hà Nội',
    square: 235,
    year: 2021,
    thumbnail: '/src/assets/images/project_5.jpg',
    all_image: getImageArrayFromAssets(9),
  },
  {
    id: 6,
    name: 'The Park Home',
    investor: 'Chị Ngọc',
    location: 'Long Biên, Hà Nội',
    square: 168,
    year: 2022,
    thumbnail: '/src/assets/images/project_6.jpg',
    all_image: getImageArrayFromAssets(9),
  },
  {
    id: 7,
    name: 'The Park Home',
    investor: 'Chị Ngọc',
    location: 'Long Biên, Hà Nội',
    square: 168,
    year: 2022,
    thumbnail: '/src/assets/images/project_6.jpg',
    all_image: getImageArrayFromAssets(9),
  },
  {
    id: 8,
    name: 'The Park Home',
    investor: 'Chị Ngọc',
    location: 'Long Biên, Hà Nội',
    square: 168,
    year: 2022,
    thumbnail: '/src/assets/images/project_6.jpg',
    all_image: getImageArrayFromAssets(9),
  },
  {
    id: 9,
    name: 'The Park Home',
    investor: 'Chị Ngọc',
    location: 'Long Biên, Hà Nội',
    square: 168,
    year: 2022,
    thumbnail: '/src/assets/images/project_6.jpg',
    all_image: getImageArrayFromAssets(9),
  },
];
