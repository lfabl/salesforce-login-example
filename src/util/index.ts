export const getKeyAndValuesFromURLString = (paramsString) => {
    let urlVariables = {
    };
    
    const keyAndValues = paramsString.split("&");
    keyAndValues.forEach(item => {
        const currentObject = item.split("=");
        urlVariables[currentObject[0]] = currentObject[1];
    });

    return urlVariables;
};
