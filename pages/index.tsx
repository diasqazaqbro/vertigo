import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { HomePage } from "@pagesComponents/HomePage";
import nextI18nextConfig from "next-i18next.config";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const host = ctx.req.headers.host || "";
  const domain = host.split(".").pop();

  const locale = domain === "ae" ? "ae" : "ru";

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], nextI18nextConfig)),
      locale,
    },
  };
};

export default HomePage;
