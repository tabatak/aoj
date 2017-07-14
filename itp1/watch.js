process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (chunk)
{
    var x = parseInt(chunk.trim(), 10);
    var s = x%60;
    var m = Math.floor((x/60)%60);
    var h = Math.floor(x/60/60);
    console.log(h + ':' + m + ':' + s);
});