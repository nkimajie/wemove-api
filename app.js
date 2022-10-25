const app = require('express')();
const port = 3033;
app.get('/online', function(req, res) {
    res.json({ message: "Success! App is online omohhh" })
})



app.listen(port, () => {
    console.log(`app is running on port ${port}`);
})