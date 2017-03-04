#pragma strict
import UnityEngine.UI;

static var globalScore : int;        // The player's score.

private var text : Text;       // Reference to the Text component.


function Awake ()
{
    // Set up the reference.
    text = GetComponent (Text);
	text.text = "Total Score: " + PlayerPrefs.GetInt("GlobalHighScore") * 10;
}


function Update ()
{

}