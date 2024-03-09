export function rounding(rounding: string): string | null {
	const corners = ["tl", "tr", "bl", "br"];
	return corners.includes(rounding) ? `rounding-${rounding}` : null;
}

export function alignment(alignment: string): string | null {
	return alignment === "right" ? "order-1" : null;
}

export function background(
	background: string,
	dropshadow: boolean
): string | null {
	if (dropshadow)
		return background ? `bg-${background} drop-shadow-2xl` : "";
	return background ? `bg-${background}` : null;
}
