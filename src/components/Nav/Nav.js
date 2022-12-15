import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Drawer from '../Drawer/Drawer';
import './Nav.scss';

const Nav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [menuId, setMenuId] = useState(0);

  const onMouseEnterMenu = id => {
    setIsDrawerOpen(true);
    setMenuId(id);
  };

  const onMouseLeaveMenu = () => {
    setIsDrawerOpen(false);
  };

  const navigate = useNavigate();

  const moveMain = e => {
    navigate('/products');
  };

  return (
    <div className="nav">
      <div className="leftBox">
        <div className="navLogo">
          <img className="logoImage" src="images/Logo.png" alt="로고" />
        </div>
        <ul className="navCategory">
          {CONTENT.map(({ id, title, subCategory }) => (
            <>
              <div className="navWrapper">
                <li
                  className="navItem"
                  onMouseEnter={() => onMouseEnterMenu(id)}
                  onClick={() => id === 1 && moveMain()}
                >
                  {title}
                </li>
              </div>
              <div>
                {isDrawerOpen && menuId === id && (
                  <Drawer
                    subCategory={subCategory}
                    onMouseLeave={onMouseLeaveMenu}
                    id={id}
                  />
                )}
              </div>
            </>
          ))}
        </ul>
      </div>

      <div className="rightBox">
        <Link to="/login" type="button">
          로그인
        </Link>
        <Link to="/signup" type="button">
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default Nav;

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
            menu: '준비중입니다',
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
            menu: '준비중입니다',
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
            menu: '준비중입니다',
          },
        ],
      },
    ],
  },
];
