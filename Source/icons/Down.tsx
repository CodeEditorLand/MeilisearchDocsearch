import { Component } from "solid-js";

export const DownIcon: Component<{ class?: string; "aria-label"?: string }> = (
	props,
) => {
	return (
		<svg
			class={props.class}
			aria-label={props["aria-label"]}
			xmlns="http://www.w3.org/2000/svg"
			width="15"
			height="15"
			viewBox="0 0 24 24">
			<path
				fill="currentColor"
				d="M12 4a1 1 0 0 1 1 1v11.586l4.293-4.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 1 1 1.414-1.414L11 16.586V5a1 1 0 0 1 1-1z"
			/>
		</svg>
	);
};
