class Timer {
	static debounce(fn: Function, delay: number) {
		let timer = undefined;

		return function (...args) {
			if (timer !== undefined) {
				clearTimeout(timer);
				timer = undefined;
			}

			timer = setTimeout(() => {
				fn.apply(this, args);
				clearTimeout(timer);
				timer = undefined;
			}, delay);
		};
	}

	static throttle(fn: Function, wait: number) {
		let timer = undefined;

		return function (...args) {
			if (timer !== undefined) {
				return;
			}

			timer = setTimeout(() => {
				fn.apply(this, args);
				clearTimeout(timer);
				timer = undefined;
			}, wait);
		};
	}
}

export { Timer };
