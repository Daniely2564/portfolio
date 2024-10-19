import { useState } from "react";
// Mantine
import { Prism } from "@mantine/prism";
import { useMediaQuery } from "@mantine/hooks";
import {
  Container,
  Group,
  List,
  Switch,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
//
import github from "prism-react-renderer/themes/github";
import vsDark from "prism-react-renderer/themes/vsDark";
// Components
import BoxWrapper from "./BoxWrapper";
// _mock
import { aboutMe } from "src/_mock/aboutme";
// icons
import { Code, CodeOff } from "tabler-icons-react";

// ----------------------------------------------------------------------------

const aboutMeCode = `import Daniel from "@daniel/experiences"

// -----------------------------------------------------------------------------

type Experience = {
  title: string;
  since: string;
  company: string;
  bullets: string[];
}

export default function AboutMe({ experiences }: { experiences: Experience[]}) {
  return (
    <Daniel 
      experiences={${JSON.stringify(aboutMe.experiences, null, 2).replace(
        /\n/g,
        "\n\t"
      )}}
    />
  );
}`;

export default function Experience() {
  const theme = useMantineTheme();
  const match = useMediaQuery("(max-width: 1000px)");
  const [isTechPersonal, setIsTechPersonal] = useState(false);
  const NonTechContent = () => (
    <>
      {aboutMe.experiences.map((experience, index) => (
        <div key={index}>
          <Group position="apart" mb={11} mt={13}>
            <Title
              order={4}
              sx={(theme) => ({
                color:
                  theme.colorScheme === "dark"
                    ? theme.colors.yellow[2]
                    : theme.colors.orange[3],
              })}
              mb={6}
            >
              {experience.title}, {experience.company}
            </Title>
            <Text
              size="md"
              fw={900}
              variant="gradient"
              gradient={{ from: "blue", to: "cyan", deg: 90 }}
            >
              {experience.since}
            </Text>
          </Group>
          <List>
            {experience.bullets.map((bullet, i) => (
              <List.Item key={i}>{bullet}</List.Item>
            ))}
          </List>
        </div>
      ))}
    </>
  );

  return (
    <Container px="xl" size="lg">
      <BoxWrapper withBackground={false}>
        <Group position="apart" mb={30}>
          <Title
            order={1}
            sx={(theme) => ({
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.yellow[5]
                  : theme.colors.orange[5],
            })}
          >
            {aboutMe.title}
          </Title>
          {!match && (
            <Switch
              label={isTechPersonal ? "Dev view" : "Non tech view"}
              checked={isTechPersonal}
              onChange={() => setIsTechPersonal(!isTechPersonal)}
              onLabel={
                <Code
                  size={16}
                  strokeWidth={2.5}
                  color={theme.colors.gray[4]}
                />
              }
              offLabel={
                <CodeOff
                  size={16}
                  strokeWidth={2.5}
                  color={theme.colors.yellow[4]}
                />
              }
              color="orange"
              size="lg"
            />
          )}
        </Group>
        {!match ? (
          isTechPersonal ? (
            <Prism
              noCopy
              language="tsx"
              getPrismTheme={(_theme, colorScheme) =>
                colorScheme === "dark" ? vsDark : github
              }
            >
              {aboutMeCode}
            </Prism>
          ) : (
            <NonTechContent />
          )
        ) : (
          <NonTechContent />
        )}
      </BoxWrapper>
    </Container>
  );
}
