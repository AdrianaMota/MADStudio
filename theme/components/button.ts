import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const variantBase = defineStyle(() => {
	return {
		bg: "pink.500",
		color: "brown.500",
		fontFamily: "heading",
		fontSize: "sm",
		fontWeight: "400",
		_hover: {
			bg: "pink.600",
		},
	};
});

const variantYellow = defineStyle(() => {
	return {
		bg: "yellow.500",
		color: "brown.500",
		fontFamily: "heading",
		fontSize: "sm",
		fontWeight: "400",
		_hover: {
			bg: "yellow.600",
		},
	};
});

const variantBrown = defineStyle(() => {
	return {
		bg: "brown.500",
		color: "pink.300",
		fontFamily: "heading",
		fontSize: "sm",
		fontWeight: "400",
		_hover: {
			bg: "brown.600",
		},
	};
});

const variants = {
	base: variantBase,
	yellow: variantYellow,
	brown: variantBrown,
};

const sizes = {
	md: defineStyle({
		h: "4rem",
		px: "2rem",
		borderRadius: "0",
	}),
};

export const buttonTheme = defineStyleConfig({
	variants,
	sizes,
	defaultProps: {
		variant: "base",
	},
});
