import React from "react";

const Checkbox = ({ checked, name, children, onClick = () => {} }) => {
	return (
		<div className="flex items-start mb-5 gap-x-5">
			<div
				className={`inline-flex items-center justify-center w-5 h-5 border-2 text-white rounded cursor-pointer  ${
					checked ? "border-primary bg-primary" : "border-strock"
				}`}
				onClick={onClick}
			>
				<input
					type="checkbox"
					id={name}
					className="hidden"
					onChange={() => {}}
				/>
				<span className={`${checked ? "" : "opacity-0 invisible"}`}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="w-5 h-5"
					>
						<path
							fillRule="evenodd"
							d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
							clipRule="evenodd"
						/>
					</svg>
				</span>
			</div>
			{children && (
				<label htmlFor={name} className="cursor-pointer">
					{children}
				</label>
			)}
		</div>
	);
};

export default Checkbox;
