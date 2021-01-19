module.exports = function fn(param) {
    if (Array.isArray(param) || typeof param == 'string') {
        if (Array.isArray(param)) {
            return param.map((item) => {
                if (typeof item === 'string') {
                    return item.split('').reduce((total, char) => char + total);
                } else {
                    return (item = null);
                }
            });
        } else if (typeof param == 'string') {
            return param.split('').reduce((total, char) => char + total);
        }
    } else {
        return null;
    }
};
