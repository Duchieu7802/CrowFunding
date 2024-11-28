import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent";
const LayoutAuthentication = (props) => {
	const { children, heading } = props;
	return (
		<div className="relative w-full min-h-screen p-10 bg-lite dark:bg-darkbg isolate">
			<img
				src="/ellipse.png"
				alt="bg"
				className="hidden lg:block absolute bottom-0 left-0 right-0 pointer-events-none z-[-1]"
			/>
			<Link to="/" className="inline-block mb-5 lg:mb-16">
				<img srcSet="logo.png 2x" alt="Crowfunding" />
			</Link>
			<div className="max-w-[556px] w-full bg-white rounded-xl px-5 py-8 lg:px-16 dark:bg-darkSecondary lg:py-12 mx-auto">
				<h1 className="mb-1 text-lg font-semibold text-center lg:text-xl dark:text-white lg:mb-3 text-text1">
					{heading}
				</h1>
				{children}
			</div>
		</div>
	);
};
LayoutAuthentication.propTypes = {
	heading: PropTypes.string,
	children: PropTypes.node,
};
export default withErrorBoundary(LayoutAuthentication, {
	FallbackComponent: ErrorComponent,
});
