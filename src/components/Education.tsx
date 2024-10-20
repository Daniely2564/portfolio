import {
  Avatar,
  Box,
  Container,
  createStyles,
  Group,
  List,
  Text,
  Title,
} from "@mantine/core";
import BoxWrapper from "./BoxWrapper";
import { education } from "../_mock/aboutme";

// ----------------------------------------------------------------------------

const useStyles = createStyles((theme) => ({
  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

export default function Education() {
  return (
    <Container px="xl" size="lg" style={{ width: "100%" }}>
      <BoxWrapper withBackground={false}>
        <Title
          order={1}
          sx={(theme) => ({
            marginBottom: 25,
            color:
              theme.colorScheme === "dark"
                ? theme.colors.yellow[5]
                : theme.colors.orange[5],
          })}
        >
          {education.title}
        </Title>
        {education.schools.map((school) => (
          <SchoolDetails school={school} key={school.name} />
        ))}
      </BoxWrapper>
    </Container>
  );
}

function SchoolDetails({ school }: { school: typeof education.schools[0] }) {
  const { classes } = useStyles();
  return (
    <Box
      mb={25}
      sx={(theme: any) => ({
        display: "block",
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        border: `1px solid ${
          theme.colorScheme === "dark"
            ? theme.colors.dark[4]
            : theme.colors.gray[3]
        }`,
        textDecoration: "none",
        boxShadow: `0 0 10px ${
          theme.colorScheme === "dark"
            ? theme.colors.white[3]
            : theme.colors.white[6]
        } !important`,

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[5]
              : theme.colors.gray[1],
        },
        minWidth: "630px",
      })}
    >
      <Group noWrap align="start">
        <Box>
          <Avatar src={school.img} size={125} radius="md" alt="Github Avatar" />
        </Box>
        <Box style={{ flex: "1" }}>
          <Group position="apart">
            <Text size="lg" weight={700} className={classes.name}>
              {school.name}
            </Text>
            <Text c="blue" weight={500}>
              {school.duration}
            </Text>
          </Group>
          <Group position="apart">
            <Text size="sm" weight={500} c="grey" className={classes.name}>
              {school.degree}
            </Text>
            <Text
              weight={700}
              sx={(theme: any) => ({
                color: theme.colorScheme === "dark" ? theme.white : theme.black,
                fontStyle: "italic",
              })}
            >
              GPA {school.gpa}
            </Text>
          </Group>
          <Group noWrap spacing={10} mt={3}>
            <List>
              {school.items.map((item) => (
                <List.Item key={item}>{item}</List.Item>
              ))}
            </List>
          </Group>
        </Box>
      </Group>
    </Box>
  );
}
