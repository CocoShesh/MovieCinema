import React from "react";
import Header from "./header/Header";
import Schedule from "./schedule/Schedule";
import CommingSoon from "./ComingSoon/CommingSoon";
import Blog from "./blog/Blog";
import Footer from "./Footer/Footer";
import { FloatButton, Tooltip } from "antd";
const Home = () => {
  return (
    <>
      <Header />
      <Schedule />
      <CommingSoon />
      <Blog />
      <Footer />
      <Tooltip title="Back to top">
        <FloatButton.BackTop />
      </Tooltip>
    </>
  );
};

export default Home;
