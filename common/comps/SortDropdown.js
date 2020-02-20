import React, { useEffect, useState } from 'react';
import { Menu, Dropdown, Icon } from 'antd';

function SortDropdown({ menuOptions, onSort }) {
  const [currentPathTitle, setCurrentPathTitle] = useState('');

  useEffect(() => {
    setCurrentPathTitle(menuOptions[0].title);
  }, []);

  useEffect(() => {
    onSort({
      path: menuOptions[0].path,
      order: menuOptions[0].order
    });
  }, []);

  const sortHandler = ({title, path, order}) => {
    onSort({path, order});
    setCurrentPathTitle(title);
  };

  const menu = (
    <Menu>
      {menuOptions.map(option =>
        <Menu.Item key={option.key} onClick={() => sortHandler(option)}>
          {option.title}
        </Menu.Item>
      )}
    </Menu>
  );

  return (
    <div id="components-dropdown-demo-dropdown-button">
      <Dropdown.Button overlay={menu} icon={<Icon type="down"/>} trigger={['click']}>
        {currentPathTitle}
      </Dropdown.Button>
    </div>
  );
}

export default SortDropdown;