import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem(key)) || defaultValue;
        } catch (error) {
            console.error("Error parsing local storage:", error);
            return defaultValue;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorage;
