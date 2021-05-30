export let { ListFormat } = Intl;

// Simple polyfill for Intl.ListFormat for en-US.
//
// Remove once more browsers support it:
// https://caniuse.com/mdn-javascript_builtins_intl_listformat
if (!ListFormat) {
	ListFormat = class ListFormat { // eslint-disable-line no-shadow
		format(list) {
			switch (list.length) {
			case 0:
				return '';
			case 1:
				return list[0];
			case 2:
				return list.join(' and ');
			default:
				return [...list.slice(0, -1), `and ${list[list.length - 1]}`].join(', ');
			}
		}
	};
}
