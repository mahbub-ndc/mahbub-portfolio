import About from "@/components/About";
import Banner from "@/components/Banner";
import CopyrightSecrion from "@/components/copyrightSecrion";
import EmailSection from "@/components/EmailSection";
import MyProjects from "@/components/MyProjects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-12 ">
        <Banner />
        <About />
        <Skills />
        <MyProjects />
        <EmailSection />
        <CopyrightSecrion />
      </div>
    </>
  );
}
