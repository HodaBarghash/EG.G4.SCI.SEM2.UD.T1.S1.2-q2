function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6cjduh94Ui7":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbz42b5zbflL8Zva7kasp9umiLwUG67KjURUtCJRS574RJuHHupuqBYkIViCY2p1-F349g/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

