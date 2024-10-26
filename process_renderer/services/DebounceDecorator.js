export default function DebounceDecorator(func, timerId, setTimerId, ms) {
    const decorator = function() {
        clearTimeout(timerId);
        setTimerId(setTimeout(() => func.apply(this, arguments), ms));
    };

    Object.setPrototypeOf(decorator, DebounceDecorator.prototype);
    return decorator;
};
