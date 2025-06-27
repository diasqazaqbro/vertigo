import type { GetServerSideProps } from "next";
import { HomePage } from "@pagesComponents/HomePage";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      locale: null,
    },
  };
};

export default HomePage;
