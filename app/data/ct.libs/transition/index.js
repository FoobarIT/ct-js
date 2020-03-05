(function () {
    const makeGenericTransition = function(name, exts) {
        ct.rooms.templates.CTTRANSITIONEMPTYROOM.width = ct.camera.width;
        ct.rooms.templates.CTTRANSITIONEMPTYROOM.height = ct.camera.height;
        const room = ct.rooms.append('CTTRANSITIONEMPTYROOM', {
            isUi: true
        });
        const transition = ct.types.copy(
            name, 0, 0,
            Object.assign({
                room
            }, exts), room);
        return transition.promise;
    };
    ct.transition = {
        fadeOut(duration, color) {
            duration = duration || 500;
            color = color || 0x000000; // Defaults to a black color
            return makeGenericTransition('CTTRANSITION_FADE', {
                duration,
                color,
                in: false
            });
        },
        fadeIn(duration, color) {
            duration = duration || 500;
            color = color || 0x000000; // Defaults to a black color
            return makeGenericTransition('CTTRANSITION_FADE', {
                duration,
                color,
                in: true
            });
        },
        slideOut(duration, direction, color) {
            duration = duration || 500;
            direction = direction || 'right';
            color = color || 0x000000; // Defaults to a black color
            return makeGenericTransition('CTTRANSITION_SLIDE', {
                duration,
                color,
                endAt: direction,
                in: false
            });
        },
        slideIn(duration, direction, color) {
            duration = duration || 500;
            direction = direction || 'right';
            color = color || 0x000000; // Defaults to a black color
            return makeGenericTransition('CTTRANSITION_SLIDE', {
                duration,
                color,
                endAt: direction,
                in: true
            });
        }
    };
})();

