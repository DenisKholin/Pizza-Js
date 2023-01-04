const service = async () => {
	const res = await fetch('db.json');

	if (!res.ok) {
		throw new Error(`Could not fetch db.json, received ${res.status}`);
	}

	return await res.json();

}

export default service;