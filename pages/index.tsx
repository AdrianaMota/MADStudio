import {
	Stack,
	Button,
	Text,
	VStack,
	Image,
	Flex,
	Heading,
	Box,
	HStack,
} from "@chakra-ui/react";
import ReactFullpage from "@fullpage/react-fullpage";
import { EffectCube, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import Cube from "../components/Cube";
import Form from "../components/Form";
import Testimonial from "../components/Testimonial";
import Navbar from "../components/navbar/Navbar";

export default function Home() {
	const pageMargin = "2rem";
	const sectionMargin = `6rem`;

	return (
		<Stack spacing={0}>
			<ReactFullpage
				anchors={["hero", "what-we-do", "design", "draft", "filing", "contact"]}
				menu="#menu"
				scrollingSpeed={1000}
				autoScrolling={true}
				render={({}) => {
					return (
						<ReactFullpage.Wrapper>
							<div className={"section"}>
								<Stack
									bgGradient="radial-gradient(50% 50% at 50% 50%, #F7E7E0 0%, #F4D7C9 100%);"
									h="100vh"
									justifyContent={"space-between"}
								>
									<Navbar margin={pageMargin} />
									<Box pt={{ base: "10rem", md: "5rem" }} textAlign={"center"}>
										<Heading
											variant="heading"
											fontSize={{ base: "md", sm: "xl", md: "xxl" }}
										>
											Architecture
										</Heading>
										<Heading
											variant="subheading"
											fontSize={{ base: "md", sm: "lg", md: "xl" }}
										>
											mad perfect
										</Heading>
									</Box>
									<Image src="/hero.png" objectFit={"cover"} />
								</Stack>
							</div>
							<div className="section">
								<Flex
									h="100vh"
									bgColor={"yellow.300"}
									alignItems="center"
									justifyContent={"space-between"}
									direction={{ base: "column", md: "row" }}
								>
									<Stack
										maxW={{ base: "100vw", md: "50vw" }}
										gap="2rem"
										ml={{ base: "2rem", md: sectionMargin }}
										mr={{ base: sectionMargin, md: 0 }}
										my={{ base: "4rem", md: 0 }}
									>
										<Heading fontSize={{ base: "md", md: "lg" }}>
											What we do
										</Heading>
										<Text fontSize={{ base: "xs", md: "sm" }}>
											We put together the perfect team of professional to
											understand the client’s vision and goals to provide the
											best possible service and help grow their business. We
											find the best talents for every role and care for their
											well being and career. This sets us apart from other
											companies since{" "}
											<strong>our people is our best asset.</strong>
										</Text>
										<Stack
											gap="1.5rem"
											direction={{ base: "column", md: "row" }}
										>
											<Box as="a" href="#design" data-menuanchor="design">
												<Button variant="yellow">Designing</Button>
											</Box>
											<Box as="a" href="#draft" data-menuanchor="draft">
												<Button variant="yellow">Drafting</Button>
											</Box>
											<Box as="a" href="#filing" data-menuanchor="filing">
												<Button variant="yellow">Filing</Button>
											</Box>
										</Stack>
									</Stack>
									<Image
										h="100vh"
										src="./building.png"
										w={{ base: "100hw", md: "" }}
									/>
								</Flex>
							</div>
							<div className="section" style={{ position: "relative" }}>
								<Image
									bgColor={"pink.200"}
									src="./dots.png"
									top="0"
									left="0"
									position="absolute"
									zIndex={"-1"}
									objectFit="cover"
									h="100vh"
								/>
								<Flex
									h="100vh"
									alignItems="center"
									justifyContent={"space-between"}
									mx={{ base: 0, md: sectionMargin }}
									py={{ base: "4rem", md: 0 }}
									direction={{ base: "column", md: "row" }}
								>
									<Stack
										maxW={{ base: "100vw", md: "50vw" }}
										gap="2rem"
										mx={{ base: "2rem", md: 0 }}
									>
										<Heading fontSize={{ base: "md", md: "lg" }}>
											Designing
										</Heading>
										<Text fontSize={{ base: "xs", md: "sm" }}>
											Our architectural services include modeling, rendering and
											designing. We will provide you with a hands-on creative
											team that will bring value to your company from day one.
											We will see to your idea from beginning to end
											concentrating not only on the design, but also in its
											functionality and graphic representation.
										</Text>
										<Box as="a" href="/design">
											<Button>View More</Button>
										</Box>
									</Stack>
									<Image src="/design.png" w="50rem" mt="4rem" />
								</Flex>
							</div>
							<div className="section" style={{ position: "relative" }}>
								<Image
									bgColor={"yellow.300"}
									src="./fibonacci.png"
									top="0"
									left="0"
									position="absolute"
									zIndex={"-1"}
									objectFit="cover"
									h="100vh"
								/>
								<Flex
									pt={{ base: "6rem", md: 0 }}
									h="100vh"
									alignItems="center"
									justifyContent={"space-between"}
									mx={{ base: 0, md: sectionMargin }}
									direction={{ base: "column-reverse", md: "row" }}
								>
									<Image src="/draft.png" w="50rem" />
									<Stack
										maxW={{ base: "100vw", md: "50vw" }}
										gap="2rem"
										mx={{ base: "2rem", md: 0 }}
									>
										<Heading fontSize={{ base: "md", md: "lg" }}>
											Drafting
										</Heading>
										<Text fontSize={{ base: "xs", md: "sm" }}>
											Our architectural services include drafting and detailing.
											We will draft whatever you need and deliver high-quality,
											clean work in a timely manner.
										</Text>
										<Box as="a" href="/draft">
											<Button variant="yellow">View More</Button>
										</Box>
									</Stack>
								</Flex>
							</div>
							<div className="section">
								<Flex
									h="100vh"
									justifyContent={"space-between"}
									alignItems="center"
									direction={{ base: "column", md: "row" }}
									px={{ base: 0, md: sectionMargin }}
									bgGradient="conic-gradient(from 180deg at 50% 50%, #E2BDBD -82.5deg, #FDE8DE 136.88deg, #E2BDBD 277.5deg, #FDE8DE 496.88deg)"
								>
									<Stack
										maxW={{ base: "100vw", md: "50vw" }}
										gap="2rem"
										py={{ base: "4rem", md: 0 }}
										px={{ base: "2rem", md: 0 }}
									>
										<Heading fontSize={{ base: "md", md: "lg" }}>
											Filing
										</Heading>
										<Text fontSize={{ base: "xs", md: "sm" }}>
											We go wall the way. Our team of experts will not only
											draft or design your pojects, they’ll put together any
											kind of legal document required for the prject to be filed
											and aproved. These services include DOB, Street Tree Plan,
											Construction Fence Plan, Site Safety Plan, etc.
										</Text>
									</Stack>
									<Image
										src="./filing.png"
										w={{ base: "100vw", md: "35rem" }}
									/>
								</Flex>
							</div>
							<div className="section">
								<Flex
									px={{ base: "2rem", md: sectionMargin }}
									pt={{ base: "4rem", md: 0 }}
									h="100vh"
									bgColor={"beige.300"}
									alignItems={"center"}
									justifyContent="space-between"
									direction={{ base: "column", md: "row" }}
									objectFit="cover"
								>
									<Stack mb="4rem">
										<Heading mb="3rem">Let's get in touch</Heading>
										<Form />
									</Stack>
									<Stack gap="4rem" bgColor={"beige.300"}>
										<Testimonial
											margin={{ sectionMargin }}
											name="Raphael"
											profession="Business Owner"
											text="“Their commitment and punctuality are on point. The designs are very elegant.”"
										/>
										<Testimonial
											margin={sectionMargin}
											name="Tommy"
											profession="Civil Engineer"
											text="“Customer service is perfect and their results are beyond professional. Always my go to architects.”"
										/>
									</Stack>
								</Flex>
							</div>
						</ReactFullpage.Wrapper>
					);
				}}
			/>
		</Stack>
	);
}
