import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { CBadge } from '@coreui/react';
import { INav } from '../_nav';

export const AppSidebarNav = ({ items }: { items: INav[] }) => {
  const location = useLocation();
  const navLink = (name: string, icon: React.ReactNode, badge?: { color: string; text: string }) => {
    return (
      <>
        {icon && icon}
        {name && name}
        {badge && (
          <CBadge color={badge.color} className="ms-auto">
            {badge.text}
          </CBadge>
        )}
      </>
    );
  };

  const navItem = (item: INav, index: number) => {
    const { component, name, badge, icon, ...rest } = item;
    const Component = component;
    return (
      <Component
        {...(rest.to &&
          !rest.items && {
            component: NavLink,
          })}
        key={index}
        {...rest}
      >
        {navLink(name, icon, badge)}
      </Component>
    );
  };
  const navGroup = (item: INav, index: number) => {
    const { component, name, icon, to, ...rest } = item;
    const Component = component;
    return (
      <Component
        idx={String(index)}
        key={index}
        toggler={navLink(name, icon)}
        visible={to ? location.pathname.startsWith(to) : false}
        {...rest}
      >
        {item.items?.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index)))}
      </Component>
    );
  };

  return (
    <React.Fragment>
      {items && items.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index)))}
    </React.Fragment>
  );
};

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};
