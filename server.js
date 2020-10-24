const app = require('./src/app');

//  App running
app.listen(5000, process.env.IP, () => {
    console.log(`App running`);
});
