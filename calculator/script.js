function dis(val)
{
  document.getElementById("history-value").value+=val
}

function solve()
{
  let x = document.getElementById("history-value").value
  let y = eval(x)
  document.getElementById("output-value").innerText = y
}

function back()
{
    var value = document.getElementById("history-value").value;
    document.getElementById("history-value").value = value.substr(0, value.length - 1);
}

function clr()
{
  document.getElementById("history-value").value = ""
  document.getElementById("output-value").innerText = ""
}
