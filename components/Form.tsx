import {
	Input,
	Button,
	Flex,
	Text,
	Textarea,
	FormControl,
	FormErrorMessage,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

const Result = () => {
	return <Text>Thanks for your message! I'll get back to you soon</Text>;
};

const Form = () => {
	const form = useRef<HTMLFormElement>(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const [result, showResult] = useState(false);

	const onSubmit: SubmitHandler<Record<string, any>> = (data, e) => {
		console.log(data);

		e?.preventDefault();

		emailjs
			.sendForm(
				"service_kpof14c",
				"template_7a6gp4p",
				form.current!,
				"asXjdB51_ujUVnJra"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e?.target.reset();
		showResult(true);

		setTimeout(() => {
			showResult(false);
		}, 5000);

		reset();
	};
	console.log(errors);

	const inputStyle = {
		type: "text",
		focusBorderColor: "brown.500",
		backgroundColor: "beige.200",
		sx: {
			color: "brown.500",
			borderColor: "brown.500",
			borderRadius: "0",
			padding: "2rem",
			minHeight: "4rem",
			fontSize: "sm",
			_placeholder: {
				color: "brown.400",
			},
			_hover: {
				borderColor: "brown.700",
			},
		},
	};
	return (
		<>
			{result ? (
				<Result />
			) : (
				<form onSubmit={handleSubmit(onSubmit)} ref={form}>
					<Flex
						gap={"5"}
						mb="2rem"
						flexDirection={{ base: "column", md: "row" }}
					>
						<FormControl isInvalid={Boolean(errors?.firstName?.message)}>
							<Input
								{...inputStyle}
								id="firstName"
								type={"text"}
								marginBottom={"0"}
								placeholder="Name"
								{...register("firstName", {
									required: "This field is required",
									maxLength: {
										message: "You can't use more than 100 characters",
										value: 100,
									},
								})}
							/>
							<FormErrorMessage>
								{errors?.firstName?.message?.toString()}
							</FormErrorMessage>
						</FormControl>
						<FormControl isInvalid={Boolean(errors?.email?.message)}>
							<Input
								{...inputStyle}
								id="email"
								type="email"
								placeholder="Email"
								{...register("email", {
									required: "This field is required",
									pattern: {
										message: "Please enter a valid email address",
										value: /^\S+@\S+$/i,
									},
								})}
								marginBottom={"0"}
							/>
							<FormErrorMessage>
								{errors?.email?.message?.toString()}
							</FormErrorMessage>
						</FormControl>
					</Flex>
					<FormControl isInvalid={Boolean(errors?.message?.message)} mb="2rem">
						<Textarea
							id="message"
							maxHeight={"30rem"}
							{...inputStyle}
							placeholder="Message"
							rows={4}
							{...register("message", {
								required: "This field is required",
								maxLength: {
									message: "You can't use more than 2000 characters",
									value: 2000,
								},
							})}
						/>
						<FormErrorMessage>
							{errors?.message?.message?.toString()}
						</FormErrorMessage>
					</FormControl>
					<Button
						type="submit"
						bgColor="brown.500"
						color="white"
						isLoading={false}
					>
						Submit
					</Button>
				</form>
			)}
		</>
	);
};
export default Form;
