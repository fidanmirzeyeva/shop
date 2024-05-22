import React from "react";
import Sect4 from "../../components/Sect4/Sect4";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Sect1 from "../../components/Sect1/Sect1";
import Sect2 from "../../components/Sect2/Sect2";
import Sect3 from "../../components/Sect3/Sect3";

function Home() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Home</title>
        </Helmet>
      </HelmetProvider>


      <Sect1></Sect1>
      <Sect2></Sect2>
      <Sect3></Sect3>
      <Sect4></Sect4>
    </div>
  );
}

export default Home;
