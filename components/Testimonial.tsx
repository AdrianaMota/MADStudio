import { Box, Heading, Text } from "@chakra-ui/react";

function Testimonial({ ...props }) {
	const { name, text, profession } = props;
	return (
		<Box
			border={"1px solid"}
			borderColor="brown.500"
			bgColor="beige.200"
			w="40rem"
			p="4rem"
		>
			<Text mb="1rem">{text}</Text>
			<Heading fontSize={"sm"} mb="5px">
				{name}
			</Heading>
			<Heading
				variant="subheading"
				color="brown.500"
				fontSize={"2rem"}
				mb="1rem"
			>
				{profession}
			</Heading>
		</Box>
	);
}

export default Testimonial;
