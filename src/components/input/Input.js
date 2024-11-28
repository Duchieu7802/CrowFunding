import PropTypes from "prop-types";
import React from "react";
import { useController } from "react-hook-form";

const Input = (props) => {
	const { control, name, type = "text", error, children, ...rest } = props;

	const { field } = useController({
		control,
		name,
		defaultValue: "",
	});
	return (
		<div className="relative">
			<input
				id={name}
				type={type}
				className={`w-full px-6 py-4 text-sm  font-medium border dark:bg-transparent  dark:text-white rounded-xl text-text1 placeholder:text-text4 dark:placeholder:text-text2 ${
					error?.length > 0
						? "border-error"
						: "border-strock dark:border-darkStroke "
				} 
				${children ? "pr-16" : ""}`}
				{...field}
				{...rest}
			></input>
			{error?.length > 0 && (
				<span className="absolute text-sm font-medium left-6 text-error top-2/4 -translate-y-2/4 error-input">
					{error}
				</span>
			)}
			{children && (
				<span className="absolute cursor-pointer select-none top-2/4 -translate-y-2/4 right-6">
					{children}
				</span>
			)}
		</div>
	);
};
Input.propTypes = {
	name: PropTypes.string,
	type: PropTypes.string,
	error: PropTypes.string,
	control: PropTypes.any.isRequired,
};
export default Input;
