
const addGlobalEventListener = (type, selector, callback, options) => {
    document.addEventListener(type, event => {
        if (event.target.matches(selector)) callback(event);
    }, options);
};

export default addGlobalEventListener;