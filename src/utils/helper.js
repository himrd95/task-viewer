const validation = (value, entity) => {
	if (value === '') {
		console.log([value]);
		alert(`Oops! by mistakenly you have missed the ${entity}`);
		return false;
	}
	return true;
};

const compareDate = (date, time) => {
	const curr_date = new Date();

	const [year, month, day] = date.split('-').map(Number);
	const [hr, min] = time.split(':').map(Number);
	const old_date = new Date(year, month - 1, day, hr, min, 100);
	if (old_date <= curr_date) return false;
	return true;
};

const setItem = (key, payload) => {
	return localStorage.setItem(key, JSON.stringify(payload));
};

const getItem = (key) => {
	return JSON.parse(localStorage.getItem(key));
};

export { validation, setItem, getItem, compareDate };
