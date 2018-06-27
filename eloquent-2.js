drawTriangle();
fizzBuzz();
chessBoard(8);
chessBoard(24);
//chessBoard(9001); I would leave those two slashes alone

function writeTitle(title)
{
    console.log("\n\n****\n"+title+"\n****\n\n")
}

function drawTriangle()
{
    writeTitle("LOOPING A TRIANGLE");
    var output = "#"

    for (let i = 0; i < 7; i++)
    {
        console.log(output);
        output += "#";
    }
}

function fizzBuzz()
{
    writeTitle("FIZZBUZZ");
    for (let i = 1; i <= 100; i++)
    {
        if (i % 3 === 0 && i % 5 === 0)
        {
            console.log("FizzBuzz")
        }
        else if (i % 3 === 0)
        {
            console.log("Fizz")
        }
        else if (i % 5 === 0)
        {
            console.log("Buzz")
        }
        else
        {
            console.log(i);
        }
    }
}

function chessBoard(size)
{
    writeTitle("CHESSBOARD (" + size + ")");
    var pattern = "";

    for (let i = 0; i < size; i++)
    {
        pattern += "# ";
    }
    
    for (let i = 0; i < size; i++)
    {
        if (i % 2 === 0)
        {
            console.log(" " + pattern);
        }
        else
        {
            console.log(pattern);
        }
    }
}