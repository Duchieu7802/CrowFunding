import { ButtonGoogle } from "components/button";
import FormGroup from "components/common/FormGroup";
import { IconEyeToggle } from "components/icons";
import { Label } from "components/label";
import useToggleValue from "hooks/useToggleValue";
import LayoutAuthentication from "layout/LayoutAuthentication";

import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "components/input";
import Button from "components/button/Button";
const schema = yup.object({
	email: yup.string().required("This field is required"),
	password: yup
		.string()
		.min(8, "Password must be 8 character ")
		.required("This field is required"),
});
const SignInPage = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		mode: "onSubmit",
	});
	const handleSignIn = () => {};
	const { value: showPassword, handleToggleValue: handleShowPassword } =
		useToggleValue(false);
	return (
		<LayoutAuthentication heading="Welcome Back!">
			<p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
				Don’t have an account? {""}
				<Link to="/sign-up" className="font-medium underline text-primary">
					Sign up
				</Link>
			</p>
			<form onSubmit={handleSubmit(handleSignIn)}>
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
							errors.password?.message.length > 0 ? "" : "Enter password"
						}
						error={errors.password?.message}
					>
						<IconEyeToggle
							open={showPassword}
							onClick={handleShowPassword}
						></IconEyeToggle>
					</Input>
				</FormGroup>
				<div className="mb-5 text-right">
					<span className="inline-block text-sm font-medium cursor-pointer text-primary">
						Forgot password
					</span>
				</div>
				<Button className="w-full bg-primary" type="submit">
					Create my account
				</Button>
			</form>
		</LayoutAuthentication>
	);
};

export default SignInPage;
