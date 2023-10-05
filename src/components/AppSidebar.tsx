import React, { useContext } from 'react';

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { AppSidebarNav } from './AppSidebarNav';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

// sidebar nav config
import navigation from '../_nav';
import { sygnet } from '../assets/brand/sygnet';
import { logoNegative } from '../assets/brand/logo-negative';
import { SidebarShowContext } from '../context/SidebarShow.context';

export default React.memo(function AppSidebar() {
  const { sidebarShow, sidebarToggle } = useContext(SidebarShowContext);

  return (
    <CSidebar
      position="fixed"
      unfoldable={true}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        //
      }}
    >
      <CSidebarBrand className="d-none d-md-flex">
        <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} />
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler className="d-none d-lg-flex" onClick={sidebarToggle} />
    </CSidebar>
  );
});
