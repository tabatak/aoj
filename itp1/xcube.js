process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (chunk)
{
    var x = parseInt(chunk.trim(), 10);
    console.log(Math.pow(x, 3));
});