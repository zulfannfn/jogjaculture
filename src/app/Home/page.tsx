import Header from "@/components/fragments/Header";
import SectionOne from "@/components/fragments/SectionOne";
import SectionTwo from "@/components/fragments/SectionTwo";
import { Fragment } from "react";

export default function HomePage() {
  return (
    <Fragment>
      <Header />
      <SectionOne />
      <SectionTwo />
    </Fragment>
  );
}
