#pragma strict

var footballBackground: Material;
var basketballBackground: Material;
var beachBackground: Material;
var billardBackground: Material;
var golfBackground: Material;
var tennisBackground: Material;
var volleyBackground: Material;
var baseballBackground: Material;

function Start ()
{
	switch (PlayerPrefs.GetInt("ThemeNumber"))
	{
		case 2:
    	renderer.material = beachBackground;
    	break;
		case 3:
		renderer.material = baseballBackground;
		break;
		case 4:
		renderer.material = tennisBackground;
		break;
		case 5:
		renderer.material = basketballBackground;
		break;
		case 6:
		renderer.material = golfBackground;
		break;
		case 7:
		renderer.material = volleyBackground;
		break;
		case 8:
		renderer.material = billardBackground;
		break;
		default:
		renderer.material = footballBackground;
		break;
	}
}

function Update () {

}