import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import PageLayout from '../components/layout/PageLayout';
import route from '../shared/constants/route_list';
import styled from '@emotion/styled';


const HomePage = lazy(() => import('../pages/home/'));


const PageWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content:center;
  align-items:center;
`;

const Loading = () => {
    return (
        <PageWrapper>
            <ContentWrapper>
                <CircularProgress size={100} disableShrink />
            </ContentWrapper>
        </PageWrapper>
    );
};

const AppRouter = () => {
    return (
        <PageLayout>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path={route.HOME} element={<HomePage />} />
                </Routes>
            </Suspense>
        </PageLayout>
    )
}

export default AppRouter;
