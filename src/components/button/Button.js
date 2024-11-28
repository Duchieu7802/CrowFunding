import PropTypes from "prop-types";
import React from "react";

const Button = ({
	type = "button",
	children,
	className = "",
	isLoading = false,
	...rest
}) => {
	const child = !!isLoading ? (
		<div className="w-6 h-6 border-4 border-white rounded-full border-t-transparent animate-spin"></div>
	) : (
		children
	);
	return (
		<button
			className={`flex items-center justify-center text-base font-semibold rounded-xl text-white p-4 min-h-[56px]	${
				!!isLoading ? "opacity-50 pointer-events-none" : ""
			} ${className}`}
			type={type}
			{...rest}
		>
			{child}
		</button>
	);
};
Button.propTypes = {
	type: PropTypes.string.isRequired,
	children: PropTypes.node,
	isLoading: PropTypes.bool,
};
export default Button;
