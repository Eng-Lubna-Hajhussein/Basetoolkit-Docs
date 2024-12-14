export const source = `
const trigger = useScrollTrigger({
disableHysteresis: false, // Optional: Whether to trigger immediately after the threshold is crossed
threshold: 100, // Optional: Number of pixels scrolled before the trigger activates
target: window, // Optional: The target element for scroll detection (default is window)
});
`;
