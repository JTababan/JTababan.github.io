const http = require('http');
const bcrypt = require('bcrypt');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    const saltRounds = 10;
    const myPlaintextPassword = 's0/\/\P4$$w0rD';
    const someOtherPlaintextPassword = 'not_bacon';
    
    bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // res.end(hash);
    });

    
    });

    bcrypt.compare(myPlaintextPassword, '$2b$10$iaQTBAfII0g3kqCAaDur5u7.OUYwN9RJzlWTuuEq/44Czkv.Bdl6W', function(err, result) {
        console.log(result);
    
    });


});

server.listen(port, hostname, ()=>{
    console.log(`Server running at port ${hostname}:${port}`);
});

