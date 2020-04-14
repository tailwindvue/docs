export function scrollBehavior() {
    return function (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }

        if (to.hash) {
            return { selector: to.hash, offset: { x: 0, y: 70 } };
        }

        return { x: 0, y: 0 };
    };
}
