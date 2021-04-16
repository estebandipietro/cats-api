const getAverageWeight = (cats) => {

    const totalWeight = cats.reduce((counter, cat) => {
        const weight = cat.weight.metric.replace(/\s/g, '').split('-');
        const weightAverage = (Number(weight[0]) + Number(weight[1]))/2;

        return counter + weightAverage;
    }, 0);

    return (totalWeight / cats.length).toFixed(2);
}

const getAverageLifeSpan = (cats) => {

    const totalLifeSpan = cats.reduce((counter, cat) => {
        const lifeSpan = cat.life_span.replace(/\s/g, '').split('-');
        const lifeSpanAverage = (Number(lifeSpan[0]) + Number(lifeSpan[1]))/2;

        return counter + lifeSpanAverage;
    }, 0);

    return (totalLifeSpan / cats.length).toFixed(2);
}

const getCountries = (cats) => {

    return cats.reduce((counter, cat) => {
        if (counter[cat.origin]) {
            counter[cat.origin]++;
        } else {
            counter[cat.origin] = 1;
        }
        return counter;
    }, {All: ''});
}

export { getAverageLifeSpan, getAverageWeight, getCountries };