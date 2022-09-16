//Type: type of event listener: click, keydown, etc.
//Selector: selector of the element(s) to add the event listener to.
//Callback: function that will be called when the event happens to the element(s).
//Options: capture or bubbling (if left blank capture is false by default).
const addGlobalEventListener = (type, selector, callback, options) => {
    document.addEventListener(type, event => {
        if (event.target.matches(selector)) callback(event);
    }, options);
};

export default addGlobalEventListener;