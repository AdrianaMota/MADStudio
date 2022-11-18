import { Text, Box } from "@chakra-ui/react";

const NavItem = ({ ...props }) => {
	const { content, slug } = props;
	return (
		<Box
			as="a"
			href={"./#" + slug}
			data-menuanchor={slug}
			position={"relative"}
			_after={{
				transition: "all 0.7s ease-in-out",
				content: "' '",
				height: "1px",
				width: "0",
				backgroundColor: "brown.500",
				position: "absolute",
				bottom: 0,
				left: 0,
			}}
			_hover={{
				_after: {
					width: "100%",
				},
				cursor: "pointer",
			}}
		>
			<Text>{content}</Text>
		</Box>
	);
};
export default NavItem;
