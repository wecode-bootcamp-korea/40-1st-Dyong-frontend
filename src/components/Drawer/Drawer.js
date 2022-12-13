import React from 'react';
import './Drawer.scss';
import { CONTENT } from '../Nav/Nav';

const Drawer = ({ subCategory, onMouseLeave, id }) => (
  <div onMouseLeave={onMouseLeave} className="drawer">
    {CONTENT.map(category => {
      return (
        <ul key={category.id} className="categoryList">
          {category.id === id &&
            category.subCategory.map(subCategory => (
              <ul key={subCategory.id} className="subCate">
                {subCategory.list.map(menu => (
                  <li key={menu.id} className="menuCate">
                    {menu.menu}
                  </li>
                ))}
              </ul>
            ))}
        </ul>
      );
    })}
  </div>
);

export default Drawer;
