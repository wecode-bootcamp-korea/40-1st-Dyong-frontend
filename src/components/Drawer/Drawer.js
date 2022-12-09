import React from 'react';
import './Drawer.scss';

const Drawer = ({ onMouseLeave, id }) => (
  <h1 onMouseLeave={onMouseLeave} className="drawer">
    {CONTENT.map(item => (
      <>
        <div>{item.id === id && item.title}</div>
        <ul>
          <li>
            {item.id === id &&
              item.content.map(element => <div>{element}</div>)}
          </li>
        </ul>
      </>
    ))}
  </h1>
);

export default Drawer;

const CONTENT = [
  {
    id: 1,
    title: '티 제품',
    content: ['티 세트', '명차', '녹차/말차'],
  },
  {
    id: 2,
    title: '선물추천',
    content: ['준비중입니다'],
  },
  {
    id: 3,
    title: '다다일상',
    content: ['준비중입니다'],
  },
  {
    id: 4,
    title: '브랜드',
    content: ['준비중입니다'],
  },
];
