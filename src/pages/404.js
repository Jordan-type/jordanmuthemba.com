import React from 'react';
import {Layout, SEO} from 'components/common';
import NotFound from 'components/404/NotFound';

export default () => (
        <Layout>
            <SEO
            title="404: Not found"
            location="/404"
            type="Organization"
            description="404 page not found"/>
            <NotFound/>
        </Layout>
);
