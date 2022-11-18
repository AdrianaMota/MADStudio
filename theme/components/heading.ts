import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const heading = defineStyle({
	color: "brown.500",
	fontFamily: "heading",
	fontSize: "xxl",
	fontWeight: "400",
});

const subheading = defineStyle({
	color: "beige.500",
	fontFamily: "subheading",
	fontSize: "xl",
	fontWeight: "400",
	lineHeight: "0.5",
});

const section = defineStyle({
	color: "brown.500",
	fontFamily: "heading",
	fontWeight: "400",
	fontSize: "lg",
});

export const headingTheme = defineStyleConfig({
	variants: {
		heading: heading,
		subheading: subheading,
		section: section,
	},
	defaultProps: {
		variant: "section",
	},
});
