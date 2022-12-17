import React, { ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useKeycloak } from 'phenom-auth-react-adapter';
import { Helmet } from 'react-helmet';
import WBRHomePage from './pages/WBRHome/WBRHomePage';
import { getUserInfo } from './utils';

const LandingPage: React.FC = (): ReactElement => {
    const navigate = useNavigate();
    const { email, name } = getUserInfo(useKeycloak());

    useEffect(() => {
        sessionStorage.setItem('userDetails', JSON.stringify({
            email,
            name
        }));

        navigate('/reports/cx');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Helmet>
                <title>Reports</title>
            </Helmet>
            <WBRHomePage />
        </>
    );
};

export default LandingPage;
