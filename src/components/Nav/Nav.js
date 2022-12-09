import React, { useState } from 'react';
import Category from './Category/Category';
import Drawer from '../Drawer/Drawer';
import './Nav.scss';

const Nav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isValue, setIsValue] = useState(0);

  const onMouseEnterMenu = id => {
    setIsDrawerOpen(true);
    setIsValue(id);
  };

  const onMouseLeaveMenu = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="nav">
      <div className="leftBox">
        <div className="navLogo">
          <img className="logoImage" src="images/garden.png" alt="로고" />
        </div>
        <div className="navCategory">
          <ul className="navList">
            {MENU.map(({ id, title }) => (
              <>
                <li
                  className="navItem"
                  onMouseEnter={() => onMouseEnterMenu(id)}
                >
                  <a href="#">{title}</a>
                </li>
                <div>
                  {isDrawerOpen && isValue === id && (
                    <Drawer onMouseLeave={onMouseLeaveMenu} id={id} />
                  )}
                </div>
              </>
            ))}
          </ul>
        </div>
      </div>
      <div className="rightBox">
        <a href="#" type="button">
          로그인
        </a>
        <a href="#" type="button">
          회원가입
        </a>
      </div>
    </div>
  );
};

export default Nav;

const MENU = [
  {
    id: 1,
    title: '제품',
  },
  {
    id: 2,
    title: '선물추천',
  },
  {
    id: 3,
    title: '다다일상',
  },
  {
    id: 4,
    title: '브랜드',
  },
];
