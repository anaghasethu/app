export const APIService = {
	insertData
};

function insertData(data) {
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(data),
	};
	return fetch('http://localhost:5000/insert', requestOptions).then(
		handleResponse
	)
	.catch((err) => {
		if (err.message.includes(401)) {
		  console.log("Something went wrong! Please try again later");
		} else {
		  console.log(err.message);
		}
	  });

}
function handleResponse(response)  {
	return response.text().then((text) => {
		const data = text && JSON.parse(text);
		return data;
	});
}

