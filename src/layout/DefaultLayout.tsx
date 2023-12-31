import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components';
import { SidebarShowContextProvider } from '../context/SidebarShow.context';

const DefaultLayout = () => {
  return (
    <SidebarShowContextProvider>
      <div>
        <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <AppHeader />
          <div className="body flex-grow-1 px-3">
            <AppContent />
          </div>
          <AppFooter />
        </div>
      </div>
    </SidebarShowContextProvider>
  );
};

export default DefaultLayout;
