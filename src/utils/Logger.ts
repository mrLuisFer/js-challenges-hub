type LogValue = string | number | object | ((...args: unknown[]) => unknown);

class Logger {
	private formatKey(value: LogValue): string {
		if (value && typeof value === 'object') {
			return `${value.constructor.name}:`;
		}

		if (typeof value === 'function') {
			return `${value.name}:`;
		}

		return `${String(value)}:`;
	}

	public log(value: LogValue): void {
		console.log(this.formatKey(value), value);
	}

	public error(value: LogValue): void {
		console.error(this.formatKey(value), value);
	}

	public info(value: LogValue): void {
		console.info(this.formatKey(value), value);
	}
}

export const logger = new Logger();

// // Usando la clase Logger con diferentes tipos de valores
// logger.log('event'); // "event: event"
// logger.error({ message: 'This is an error' }); // "Object: { message: 'This is an error' }"
// logger.info(function testFunction() {
// }); // "testFunction: function testFunction() {}"
// logger.log(123); // "123: 123"
