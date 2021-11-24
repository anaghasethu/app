const Pool = require('pg').Pool;
let instance = null;
const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "welcome",
    database: "formls"
})

module.exports = pool
pool.connect((err) => {
	if (err) {
		console.log(err.message);
	}
	//console.log('db ' + pool.state);
});

class DbService {
        static getDbServiceInstance() {
		return instance ? instance : new DbService();
	 }

	

	 async insertDetails(data) {
		console.log(data);
		const response = await new Promise((resolve, reject) => {
		  const query = `INSERT INTO candidate_details(pname,gender,dob,email,phone,linkedin,github,time) values ('${data.name}','${data.gender}','${data.dob}',
		  '${data.email}','${data.phone}','${data.linkedin}','${data.github}',now());`;
	
		  pool.query(query, (err, result) => {
			console.log(result);
			if (err) reject(new Error(err.message));
			resolve(result);
		  });
		});
		return response !== 0 ? true : false;
	  }
	
}

module.exports = DbService;
