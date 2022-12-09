// import React, { useState } from 'react';
// import Drawer from '../../Drawer/Drawer';

// const Category = props => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   // hover에 따른 GNB 열림과 닫힘
//   const onMouseEnterMenu = () => {
//     setIsDrawerOpen(true);
//   };
//   const onMouseLeaveMenu = () => {
//     setIsDrawerOpen(false);
//   };

//   return (
//     <div
//       className="loop"
//       onMouseEnter={onMouseEnterMenu}
//       onMouseLeave={onMouseLeaveMenu}
//     >
//       <li className="navItem" key={props.key}>
//         {props.title}
//       </li>
//       {isDrawerOpen && <Drawer />}
//     </div>
//   );
// };

// export default Category;
