import React from 'react';
import { Layout, SEO } from 'components/common';
import About from 'components/about/About';
import OnlineUsers from "../components/OnlineUsers";
import {ToastContainer} from "react-toastify";
import {receivedSocketMessages} from "../services/socket";

export default () => (
  <Layout>
  <ToastContainer>{receivedSocketMessages()}</ToastContainer>
    <SEO title="About - Jordan Muthemba" type="Organization" location="/about" />
    <OnlineUsers/>
    <About/>
  </Layout>
)
