import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer, { CONTENT } from '../Drawer/Drawer';
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

  return (
    <div className="nav">
      <div className="leftBox">
        <div className="navLogo">
          <img className="logoImage" src="images/Logo.png" alt="로고" />
        </div>
        <ul className="navCategory">
          {CONTENT.map(({ id, title }) => (
            <>
              <div className="navWrapper">
                <li
                  className="navItem"
                  onMouseEnter={() => onMouseEnterMenu(id)}
                >
                  <Link href="/">{title}</Link>
                </li>
              </div>
              <div>
                {isDrawerOpen && menuId === id && (
                  <Drawer onMouseLeave={onMouseLeaveMenu} id={id} />
                )}
              </div>
            </>
          ))}
        </ul>
      </div>

      <div className="rightBox">
        <Link href="#" type="button">
          로그인
        </Link>
        <Link href="#" type="button">
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default Nav;
