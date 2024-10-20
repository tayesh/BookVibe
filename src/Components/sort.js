
const descendingSortByProperty = (property) => {
    return (a, b) => {
        if (a[property] !== b[property]) {
            return b[property] - a[property]; // Sort by the specified property in descending order
        }
        // If the specified property is equal, maintain the original order
        return 0;
    };
};
export {descendingSortByProperty};

