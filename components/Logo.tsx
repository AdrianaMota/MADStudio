import { Image } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

const Logo = () => {
	const router = useRouter();

	console.log(router.pathname);

	if (router.pathname === "/") {
		return (
			<a data-menuanchor="hero" href="#hero">
				<Image src="/Logo.png" w="13rem" _hover={{ cursor: "pointer" }} />
			</a>
		);
	}

	return (
		<NextLink href="/">
			<Image src="/Logo.png" w="13rem" _hover={{ cursor: "pointer" }} />
		</NextLink>
	);
};
export default Logo;
