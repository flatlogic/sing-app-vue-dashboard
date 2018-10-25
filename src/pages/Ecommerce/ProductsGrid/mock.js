// Products photos
import img1 from '@/assets/products/img1.jpg';
import img2 from '@/assets/products/img2.jpg';
import img3 from '@/assets/products/img3.jpg';
import img4 from '@/assets/products/img4.jpg';
import img5 from '@/assets/products/img5.jpeg';
import img6 from '@/assets/products/img6.jpg';
// import img7 from '../../images/products/img7.jpg';
// import img8 from '../../images/products/img8.jpg';

export default [
  {
    id: 0,
    img: img1,
    title: 'trainers',
    description: 'Trainers In White',
    price: 76,
    favourite: true,
    label: false,
  },
  {
    id: 1,
    img: img2,
    title: 'boots',
    description: 'Trainers In Blue',
    price: {
      old: 56,
      new: 45,
      percents: 20,
    },
    favourite: false,
    label: 'Sale',
  },
  {
    id: 2,
    img: img3,
    title: 'flat sandals',
    description: 'Trainers In White',
    price: 55,
    favourite: false,
    label: 'New',
  },
  {
    id: 3,
    img: img4,
    title: 'trainers',
    description: 'Trainers In White',
    price: 76,
    favourite: true,
    label: false,
  },
  {
    id: 4,
    img: img5,
    title: 'boots',
    description: 'Trainers In Blue',
    price: {
      old: 56,
      new: 45,
      percents: 20,
    },
    favourite: false,
    label: 'Sale',
  },
  {
    id: 5,
    img: img6,
    title: 'flat sandals',
    description: 'Trainers In White',
    price: 55,
    favourite: false,
    label: 'New',
  },
];
