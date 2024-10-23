// React
import { Outlet } from "react-router-dom";
// Manatine UI
import { AppShell, useMantineTheme } from "@mantine/core";
// header
import Footer from "src/components/Footer";
import HeaderResponsive from "./header/HeaderResponsive";
import { DEFAULT_BASE_URL } from "src/config";

//-----------------------------------------------------------------------------

const links = [
  {
    label: "Landing",
    link: DEFAULT_BASE_URL + "/",
  },
  {
    label: "About",
    link: DEFAULT_BASE_URL + "/about",
  },
  {
    label: "Experience",
    link: DEFAULT_BASE_URL + "/experience",
  },
  {
    label: "Skills",
    link: DEFAULT_BASE_URL + "/skills",
  },
  {
    label: "Education",
    link: DEFAULT_BASE_URL + "/education",
  },
  {
    label: "Contact",
    link: DEFAULT_BASE_URL + "/contact",
  },
];

export default function MainLayout(): JSX.Element {
  const theme = useMantineTheme();
  return (
    <>
      <AppShell
        navbarOffsetBreakpoint={theme.breakpoints.md}
        fixed
        header={<HeaderResponsive links={links} />}
      >
        <Outlet />
      </AppShell>
      <Footer />
    </>
  );
}
