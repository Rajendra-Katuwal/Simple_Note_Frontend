import React, { useDeferredValue, useEffect, useState } from 'react'

const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        let currValue;

        try {
            var storedValue = localStorage.getItem(key);
            currValue = storedValue ? JSON.parse(storedValue) : defaultValue;
        }
        catch (error) {
            console.error("Error setting localStorage value", error);
            currValue = defaultValue;
        }
        return currValue;
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error("Error setting localStorage value", error);
        }
    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorage;