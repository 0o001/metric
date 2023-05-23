const convertMetric = (value, oldMetric, newMetric) => {
    const getOldMetric = getMetricValue(oldMetric);
    const getNewMetric = getMetricValue(newMetric);
    
    const difference = getOldMetric - getNewMetric;

    return value * +`1e${difference}`;

    function getMetricValue(metric) {
        const metrics = ['Y', 'Z', 'E', 'P', 'T', 'G', 'M', 'k', 'h', 'da', '-', 'd', 'c', 'm', 'u', 'n', 'p', 'f', 'a', 'z', 'y'];
        const select = metrics.indexOf('-') - metrics.indexOf(metric);

        if(Math.abs(select) > 3) {
            const multiplier = select > 0 ? -2 : +2;
            
            return (select + multiplier) * 3;
        }
        
        return select;
    }
}

console.log(convertMetric(100, 'd', '-'))
