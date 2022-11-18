import { extendTheme } from "@chakra-ui/react";
import { components } from "./components";
import { foundations } from "./foundations";
import styles from "./styles";

export const theme = extendTheme({
	...foundations,
	components,
	styles,
});

export type Theme = typeof theme;

export default theme;
