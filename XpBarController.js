#pragma strict
import UnityEngine.UI;

static var score : int;
var levelBegin: float;
var levelEnd: float;
var themeText: Text;

function Start () {

}

function Awake () {
score = 0;
}

function FixedUpdate () {

var barImage: Image;
barImage = gameObject.GetComponent(Image);
var barScore = PlayerPrefs.GetInt("GlobalHighScore") * 10 + score * 10;
switch (true)
{
	case (barScore < 500):
	levelBegin = 0;
    levelEnd = 500;
    break;
	case (barScore < 1000):
	levelBegin = 500;
    levelEnd = 1000;
    break;
	case (barScore < 2000):
	levelBegin = 1000;
    levelEnd = 2000;
	break;
	case (barScore < 4000):
	levelBegin = 2000;
    levelEnd = 4000;
	break;
	case (barScore < 8000):
	levelBegin = 4000;
    levelEnd = 8000;
	break;
	case (barScore < 16000):
	levelBegin = 8000;
    levelEnd = 16000;
	break;
	case (barScore < 32000):
	levelBegin = 16000;
    levelEnd = 32000;
	break;
	case (barScore >= 32000):
	barImage.gameObject.SetActive(false);
	themeText.gameObject.SetActive(false);
	break;
	default:

	break;
}

var fillNumber: float;
fillNumber = (barScore - levelBegin) / (levelEnd - levelBegin);
barImage.fillAmount = fillNumber;		
}