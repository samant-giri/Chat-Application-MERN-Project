import React from 'react';
import { Helmet } from "react-helmet-async";


const Title = ({ title = "Chat App", description = "this is chat App called chattu" }) => {
    return (
        <Helmet>
            <tittle>{title}</tittle>
            <meta name="description" content={description} />
        </Helmet>
    );
};

export default Title