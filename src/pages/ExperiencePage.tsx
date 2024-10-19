// components
import Experience from "src/components/Experience";
import Page from "src/components/Page";

// -------------------------------------------------

export default function ExperiencePage() {
  return (
    <Page title="Experience" isFirst={true} withBackground={false}>
      <Experience />
    </Page>
  );
}
