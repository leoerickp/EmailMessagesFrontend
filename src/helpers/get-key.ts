export const getKey = (path: string): string => {
    const currentOption = path.replace("/email", "").replace("/", "");
    if (currentOption === "") return "inbox";
    return currentOption;
};