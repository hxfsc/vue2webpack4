const express = require("express");
const app = new express();
app.get("*", (req, res) => {
	//res.setHeader("Content-type", "charset=utf-8;text/html;");
	res.send(`
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Hello, VUE SSR!</title>
    </head>
    <body>
        <h1>VUE SSR</h1>
    </body>
    </html>
    `);
});

app.listen(8001, () => {
	console.log("app run port 8001");
});
