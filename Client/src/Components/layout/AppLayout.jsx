import React from 'react'
import Header from './Header';
import Title from '../shared/Title';
import { Grid } from '@mui/material';


const AppLayout = () => (WrappedComponent) => {
    return (props) => {
        return (
            <>
                <Header />
                <Grid container height={"calc(100vh - 4rem)"}/>
                <WrappedComponent {...props} />
                <div>Footer</div>
            </>
        );
    };
};

export default AppLayout