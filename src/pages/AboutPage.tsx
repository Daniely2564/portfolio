// components
import About from "src/components/About";
import CustomHelmet from "src/components/CustomHelmet";
import Section from "src/components/Section";

// -------------------------------------------------

export default function AboutPage() {
  return (
    <>
      <CustomHelmet title="About Me" />
      <Section>
        <About />
      </Section>
    </>
  );
}
