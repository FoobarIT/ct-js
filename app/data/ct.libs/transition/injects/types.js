(function () {
    const devourer = () => {void 0;};
    ct.types.templates.CTTRANSITION_FADE = {
        onStep() {
            void 0;
        },
        onDraw() {
            void 0;
        },
        onDestroy() {
            ct.rooms.remove(this.room);
        },
        onCreate() {
            this.tex = -1;
            this.overlay = new PIXI.Graphics();
            this.overlay.beginFill(this.color);
            this.overlay.drawRect(0, 0, ct.camera.width, ct.camera.height);
            this.overlay.endFill();
            this.overlay.alpha = this.in? 1 : 0;
            this.addChild(this.overlay);
            this.promise = ct.tween.add({
                obj: this.overlay,
                fields: {
                    alpha: this.in? 0 : 1
                },
                duration: this.duration
            }).then(() => {
                this.kill = true;
            });
        }
    };
    ct.types.templates.CTTRANSITION_SLIDE = {
        onStep() {
            void 0;
        },
        onDraw() {
            void 0;
        },
        onDestroy() {
            ct.rooms.remove(this.room);
        },
        onCreate() {
            this.tex = -1;
            this.overlay = new PIXI.Graphics();
            this.overlay.beginFill(this.color);
            this.overlay.drawRect(0, 0, ct.camera.width, ct.camera.height);
            this.overlay.endFill();

            if (this.endAt === 'left' || this.endAt === 'right') {
                this.scale.x = this.in? 1 : 0;
                this.promise = ct.tween.add({
                    obj: this.scale,
                    fields: {
                        x: this.in? 0 : 1
                    },
                    duration: this.duration,
                    curve: ct.tween.easeOutQuart
                }).then(() => {
                    this.kill = true;
                });
            } else {
                this.scale.y = this.in? 1 : 0;
                this.promise = ct.tween.add({
                    obj: this.scale,
                    fields: {
                        y: this.in? 0 : 1
                    },
                    duration: this.duration,
                    curve: ct.tween.easeOutQuart
                }).then(() => {
                    this.kill = true;
                });
            }
            if (!this.in && this.endAt === 'left') {
                this.x = ct.camera.width;
                ct.tween.add({
                    obj: this,
                    fields: {
                        x: 0
                    },
                    duration: this.duration,
                    curve: ct.tween.easeOutQuart
                })
                .catch(devourer);
            }
            if (!this.in && this.endAt === 'top') {
                this.y = ct.camera.height;
                ct.tween.add({
                    obj: this,
                    fields: {
                        y: 0
                    },
                    duration: this.duration,
                    curve: ct.tween.easeOutQuart
                })
                .catch(devourer);
            }
            if (this.in && this.endAt === 'right') {
                ct.tween.add({
                    obj: this,
                    fields: {
                        x: ct.camera.width
                    },
                    duration: this.duration,
                    curve: ct.tween.easeOutQuart
                })
                .catch(devourer);
            }
            if (this.in && this.endAt === 'bottom') {
                ct.tween.add({
                    obj: this,
                    fields: {
                        y: ct.camera.height
                    },
                    duration: this.duration,
                    curve: ct.tween.easeOutQuart
                })
                .catch(devourer);
            }

            this.addChild(this.overlay);
        }
    };
})();
