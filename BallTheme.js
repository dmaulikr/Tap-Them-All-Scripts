#pragma strict

var footballBall: Material;
var basketballBall: Material;
var beachBall: Material;
var billardBall: Material;
var golfBall: Material;
var tennisBall: Material;
var volleyBall: Material;
var baseballBall: Material;

function Start ()
{
	switch (PlayerPrefs.GetInt("ThemeNumber"))
	{
		case 2:
    	renderer.material = beachBall;
    	break;
		case 3:
		renderer.material = baseballBall;
		break;
		case 4:
		renderer.material = tennisBall;
		break;
		case 5:
		renderer.material = basketballBall;
		break;
		case 6:
		renderer.material = golfBall;
		break;
		case 7:
		renderer.material = volleyBall;
		break;
		case 8:
		renderer.material = billardBall;
		break;
		default:
		renderer.material = footballBall;
		break;
	}
}

function Update () {

}