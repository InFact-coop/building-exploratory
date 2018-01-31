const app = require('./app');

app.listen(process.env.PORT || 4000, '0.0.0.0', () => console.log('listening on localhost:4000'));
