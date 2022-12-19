const express = require("express");
const app = express();
const cors = require("cors");

app.use(
	cors({
		origin: "*",
	})
);

app.get("/api", (req, res) => {
	fetch("https://api.flickr.com/services/feeds/photos_public.gne?format=json")
		.then((response) => response.text()) // the .json() method parses the JSON response into a JS object literal
		.then((data) => {
			let asd = data.substring(15);
			let qwe = asd.substring(0, asd.length - 1);
			// console.log(qwe)
			var res = JSON.parse(qwe);
			let imageObjs = res.items;
			return imageObjs;
		})
		.then((dataFinal) => {
			// res.render('index.ejs', { dataFinal });
			res.send(dataFinal);
		});
});

// app.post(imageObjs)

module.exports = app.listen(5000, () => console.log("Server started on port 5000"));
