export function rounding(rounding: string): string | null {
	const corners = ["tl", "tr", "bl", "br"];
	return corners.includes(rounding) ? `rounding-${rounding}` : null;
}

export function alignment(
	alignment: string,
	grid?: boolean
): string | null {
	if (grid === true) {
		return alignment === "flipped" ? "order-1" : null;
	} else {
		return alignment === "flipped" ? "reverse" : null;
	}
}

export function background(
	background: string,
	dropshadow: boolean
): string | null {
	if (background === "none") return null;
	if (dropshadow)
		return background
			? `bg-${background} ${
					background === "black" ? "text-white" : ""
			  } drop-shadow-2xl`
			: "";
	return background
		? `bg-${background} ${background === "black" ? "text-white" : ""}`
		: null;
}
