export const decodeApiData = data => {
    const newData = [...data];
    newData.forEach(dataObj => {
        for (let key in dataObj) {
            // decode value if string 
            if (!Array.isArray(dataObj[key])) {
                dataObj[key] = decodeURIComponent(dataObj[key])
            } else {
                dataObj[key] = dataObj[key].map(value => decodeURIComponent(value))
            }
        }
    });
    return newData;
};

export function randomizeArray(initialAry) {
    let randomized = [];

    for (var i = 0; i < initialAry.length; i++) {
        if (Math.random() >= 0.5) {
            randomized.push(initialAry[i])
        } else {
            randomized.unshift(initialAry[i])
        }
    }
    return randomized;
}
