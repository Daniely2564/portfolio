// Mantine
import {
  Button,
  createStyles,
  Group,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
// components
import BoxWrapper from "./BoxWrapper";
import { ContactIconsList } from "./ContactIcons";
import { FormEventHandler } from "react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    minWidth: 600,
    boxSizing: "border-box",
    backgroundImage: `linear-gradient(-60deg, ${theme.colors.orange[4]} 0%, ${theme.colors.white[7]} 100%)`,
    borderRadius: theme.radius.md,
    padding: theme.spacing.xl,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.xl,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
  },

  description: {
    maxWidth: 300,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  form: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  social: {
    // color: theme.white,

    "&:hover": {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  control: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.yellow[5]
        : theme.colors.orange[4],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.yellow[6]
          : theme.colors.green[4],
    },
  },
}));

export function Contact() {
  const { classes } = useStyles();

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    alert("Not implemented");
  };

  return (
    <BoxWrapper>
      <SimpleGrid
        cols={2}
        spacing={50}
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        <div>
          <Title className={classes.title}>Contact me</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave your email and we will get back to you within 24 hours
          </Text>

          <ContactIconsList />
        </div>
        <form onSubmit={onSubmit} className={classes.form}>
          <TextInput label="Email" placeholder="your@email.com" />
          <TextInput label="Name" placeholder="John Doe" mt="md" />
          <Textarea
            label="Your message"
            placeholder="I want to order your goods"
            minRows={4}
            mt="md"
          />

          <Group position="right" mt="md">
            <Button type="submit" className={classes.control}>
              Send message
            </Button>
          </Group>
        </form>
      </SimpleGrid>
    </BoxWrapper>
  );
}
