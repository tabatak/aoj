process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (chunk)
{
    var a = parseInt(chunk.trim().split(' ')[0], 10);
    var b = parseInt(chunk.trim().split(' ')[1], 10);
    var s = a * b;
    var l = a * 2 + b * 2;

    console.log(s + ' ' + l);
});