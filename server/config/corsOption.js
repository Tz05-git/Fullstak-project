const allowedOrigins = [
'http://localhost:3000','http://localhost:5500','http://localhost:2025','http://localhost:2000','http://localhost:3001'] 
const corsOption = {
origin: (origin, callback) => {
if (allowedOrigins.indexOf(origin) !== -1 ||
!origin) {
callback(null, true) 
} else {
callback(new Error('Not allowed by CORS'))
}
},
credentials: true, 
optionsSuccessStatus: 200
}
module.exports = corsOption