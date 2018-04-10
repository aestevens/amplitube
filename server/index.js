const express = require('express');
const app = express();

require('./routes/mediaRoutes')(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT);