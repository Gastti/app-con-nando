const express = require('express');
const app = express()

app.use(express.json())

app.use('/', (req, res) => {
    res.send({
        ok: true
    })
})

app.listen(5000, () => {
    console.log('[SERVER]: Ready')
})
