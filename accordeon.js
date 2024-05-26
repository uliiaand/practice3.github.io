document.addEventListener('DOMContentLoaded', function() {
    class ItcAccordeon {
        constructor(target, config) {
            this._el = typeof target === 'string' ? document.querySelector(target) : target;
            const defaultConfig = {
            alwaysOpen: true
            };
            this._config = Object.assign(defaultConfig, config);
            this.addEventListener();
        }
        addEventListener() {
            this._el.addEventListener('click', (e) => {
            const elHeader = e.target.closest('.holidays__header');
            if (!elHeader) {
                return;
            }
            if (!this._config.alwaysOpen) {
                const elOpenItem = this._el.querySelector('.holidays__item_show');
                if (elOpenItem) {
                elOpenItem !== elHeader.parentElement ? elOpenItem.classList.toggle('holidays__item_show') : null;
                }
            }
            elHeader.parentElement.classList.toggle('holidays__item_show');
            });
        }
    }

    new ItcAccordeon('#accordeon-1');
    new ItcAccordeon('#accordeon-2');
    new ItcAccordeon('#accordeon-3');
});