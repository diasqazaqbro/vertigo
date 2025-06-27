import { useToggle } from "@shared/lib/hooks";
import { ContactsModal } from "@widgets/ContactsModal";
import { Layout } from "@widgets/Layout";
import {
  AboutUs,
  Contacts,
  Projects,
  Service,
  Stages,
  Welcome,
} from "@widgets/Sections";
import React from "react";

const HomePage = () => {
  return (
    <Layout>
      <div className="wrapper">
        <Welcome />
        <AboutUs />
        <Projects />
        <Service />
        {/* <Stages /> */}
        <Contacts />
      </div>
    </Layout>
  );
};

export default HomePage;
