#pragma strict
import UnityEngine.UI;

static var score : int;        // The player's score.

private var text : Text;       // Reference to the Text component.


function Awake ()
{
    // Set up the reference.
    text = GetComponent (Text);
	text.text = "High Score: " + PlayerPrefs.GetInt("HighScore") * 10;
}


function Update ()
{

}