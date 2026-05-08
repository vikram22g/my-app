const app = require('./src/app')
const connectdb = require('./src/db/db') 
const dns = require('dns') // ye ek erro ko hatane ke liye hai jo ki database ko connect kate time ata hai line 3 to 7
dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])

connectdb() // ye function database ko connect karata hai

const PORT = process.env.PORT || 3000

app.listen(PORT)