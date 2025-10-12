export const customScrollbar = [
    // Basic sizing - thin but not too thin
    "[&::-webkit-scrollbar]:w-1.5",
    "[&::-webkit-scrollbar]:h-1.5",

    // The draggable thumb
    "[&::-webkit-scrollbar-thumb]:bg-orange-200",
    "[&::-webkit-scrollbar-thumb]:rounded-md",

    // Smooth interactions feel professional
    "[&::-webkit-scrollbar-thumb]:transition-colors",
    "[&::-webkit-scrollbar-thumb]:duration-200",
    "[&::-webkit-scrollbar-thumb:hover]:bg-sky-200",
    "[&::-webkit-scrollbar-thumb:hover]:cursor-pointer",

    // Clean track and hidden buttons
    "[&::-webkit-scrollbar-track]:bg-transparent",
    "[&::-webkit-scrollbar-button]:hidden"
].join(" ");