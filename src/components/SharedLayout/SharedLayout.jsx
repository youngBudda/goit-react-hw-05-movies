import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
const { Suspense } = require('react');
const { default: Header } = require('components/Header/Header');
const { StyledSharedLayout } = require('./SharedLayout.styled');

const SharedLayout = () => {
  return (
    <StyledSharedLayout>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </StyledSharedLayout>
  );
};
export default SharedLayout;
