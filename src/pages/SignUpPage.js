import React, { useState } from "react";
import LayoutAuthentication from "layout/LayoutAuthentication";
import { Link } from "react-router-dom";
import { Label } from "components/label";
import { Input } from "components/input";
import { useForm } from "react-hook-form";
import FormGroup from "components/common/FormGroup";
import { Button, ButtonGoogle } from "components/button";
import { Checkbox } from "components/checkbox";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IconEyeToggle } from "components/icons";
import useToggleValue from "hooks/useToggleValue";
const schema = yup.object({
	name: yup.string().required("This field is required"),
	email: yup.string("Invalid email address").required("This field is required"),
	password: yup
		.string()
		.min(8, "Password must be 8 character")
		.required("This field is required"),
});

const SignUpPage = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		mode: "onSubmit",
	});
	const handleSignUp = (values) => {
		// console.log("🚀 ~ handleSignUp ~ values:", values);
	};
	const { value: acceptTerm, handleToggleValue: handleAcceptTerm } =
		useToggleValue(false);
	const { value: showPassword, handleToggleValue: handleShowPassword } =
		useToggleValue(false);

	return (
		<LayoutAuthentication heading="Sign Up">
			<p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
				Already have an account?{" "}
				<Link to="/sign-in" className="font-medium underline text-primary">
					Sign in
				</Link>
			</p>
			<ButtonGoogle text="Sign up with google"></ButtonGoogle>
			<p className="mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 dark:text-white text-text2">
				Or sign up with email
			</p>
			<form onSubmit={handleSubmit(handleSignUp)}>
				<FormGroup>
					<Label htmlFor="name">Full Name *</Label>
					<Input
						control={control}
						name="name"
						placeholder={errors.name?.message.length > 0 ? "" : "John Doe"}
						error={errors.name?.message}
					></Input>
				</FormGroup>
				<FormGroup>
					<Label htmlFor="email">Email *</Label>
					<Input
						type="email"
						control={control}
						name="email"
						placeholder={
							errors.email?.message.length > 0 ? "" : "example@gmail.com"
						}
						error={errors.email?.message}
					></Input>
				</FormGroup>
				<FormGroup>
					<Label htmlFor="password">Password *</Label>
					<Input
						type={showPassword ? "text" : "password"}
						control={control}
						name="password"
						placeholder={
							errors.password?.message.length > 0 ? "" : "Create a password"
						}
						error={errors.password?.message}
					>
						<IconEyeToggle
							open={showPassword}
							onClick={handleShowPassword}
						></IconEyeToggle>
					</Input>
				</FormGroup>
				<Checkbox name="term" checked={acceptTerm} onClick={handleAcceptTerm}>
					{" "}
					<p className="flex-1 text-xs leading-6 lg:text-sm lg:leading-6 text-text2">
						I agree to the{" "}
						<span className="underline cursor-pointer text-secondary hover">
							Tearms of Use
						</span>{" "}
						and have read and understand the{" "}
						<span className="underline cursor-pointer text-secondary">
							Privacy policy
						</span>
					</p>
				</Checkbox>
				<Button className="w-full bg-primary" type="submit">
					Create my account
				</Button>
			</form>
		</LayoutAuthentication>
	);
};

export default SignUpPage;
