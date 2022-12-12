import React from 'react';
import './Drawer.scss';

const Drawer = ({ onMouseLeave, id }) => (
  <div onMouseLeave={onMouseLeave} className="drawer">
    {CONTENT.map(category => {
      return (
        <>
          <div>{category.id === id && category.title}</div>
          <ul>
            <li>
              {category.id === id &&
                category.subCategory.map(element => (
                  <div key={element.id}>
                    {element.list.map(el => (
                      <div
                        key={'' + element.id + el.id}
                        className={el.id === 1 && 'title'}
                      >
                        {el.menu}
                      </div>
                    ))}
                  </div>
                ))}
            </li>
          </ul>
        </>
      );
    })}
  </div>
);

export default Drawer;

export const CONTENT = [
  {
    id: 1,
    title: '제품',
    className: 'firstNavbarAlign',
    subCategory: [
      {
        id: 1,
        list: [
          {
            id: 1,
            link: '/',
            menu: '베스트',
          },
          {
            id: 2,
            link: '/',
            menu: '위클리 베스트',
          },
          {
            id: 3,
            link: '/',
            menu: '베스트',
          },
        ],
      },
      {
        id: 2,
        list: [
          {
            id: 1,
            link: '/',
            menu: '티 제품',
          },
          {
            id: 2,
            link: '/',
            menu: '티 세트',
          },
          {
            id: 3,
            link: '/',
            menu: '명차',
          },
          {
            id: 4,
            link: '/',
            menu: '녹차/말차',
          },
          {
            id: 5,
            link: '/',
            menu: '발효차/홍차',
          },
        ],
      },
      {
        id: 3,
        list: [
          {
            id: 1,
            link: '/',
            menu: '티푸드',
          },
          {
            id: 2,
            link: '/',
            menu: '과자/초콜릿',
          },
          {
            id: 3,
            link: '/',
            menu: '베이커리',
          },
          {
            id: 4,
            link: '/',
            menu: '아이스크림',
          },
        ],
      },
      {
        id: 4,
        list: [
          {
            id: 1,
            link: '/',
            menu: '티웨어',
          },
          {
            id: 2,
            link: '/',
            menu: '용도별',
          },
          {
            id: 3,
            link: '/',
            menu: '브랜드별',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: '선물 추천',
    className: 'secondNavbarAlign',
    subCategory: [
      {
        id: 1,
        list: [
          {
            id: 1,
            link: '/',
            menu: '준비중입니다.',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: '다다일상',
    className: 'thirdNavbarAlign',
    subCategory: [
      {
        id: 1,
        list: [
          {
            id: 1,
            link: '/',
            menu: '준비중입니다.',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: '브랜드',
    className: 'fourNavbarAlign',
    subCategory: [
      {
        id: 1,
        list: [
          {
            id: 1,
            link: '/',
            menu: '준비중입니다.',
          },
        ],
      },
    ],
  },
];
