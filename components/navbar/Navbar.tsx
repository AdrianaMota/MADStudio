import { HStack, Text, Box, Button, Flex } from "@chakra-ui/react";
import Logo from "../Logo";
import NavItem from "./Navitem";

const Navbar = ({ ...props }) => {
	const { margin } = props;
	return (
		<HStack justifyContent={"space-between"} mx={margin} mt={margin}>
			<Logo />
			<Flex
				gap="3rem"
				alignItems={"center"}
				display={{ base: "none", md: "flex" }}
			>
				<NavItem content="What we do" slug="what-we-do" />
				<Box as="a" href="./#contact" data-menuanchor="contact">
					<Button variant="brown">Contact us</Button>
				</Box>
			</Flex>
		</HStack>
	);
};
export default Navbar;
