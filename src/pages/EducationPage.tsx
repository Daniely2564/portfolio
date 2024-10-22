// components
import Education from "src/components/Education";
import CustomHelmet from "src/components/CustomHelmet";
import Section from "src/components/Section";

// -------------------------------------------------

export default function ProjectsPage() {
  return (
    <>
      <CustomHelmet title="Education" />
      <Section>
        <Education />
      </Section>
    </>
  );
}
