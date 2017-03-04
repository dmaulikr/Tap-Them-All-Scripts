#pragma strict
import UnityEngine.UI;

static var score : int;        // The player's score.
static var globalScore : int;  // Player's global score (cumulative).
private var text : Text;       // Reference to the Text component.


function Awake ()
{
    text = GetComponent (Text);
    score = 0;
}


function Update ()
{
    text.text = "Final Score: " + score * 10;
}

function SetHighScore (game)
{
 	var oldHighscore = PlayerPrefs.GetInt("HighScore"); 
 	if(score > oldHighscore)
 	{
    	PlayerPrefs.SetInt("HighScore", score); 
 		PlayerPrefs.Save();
 	}
}

function SetGlobalScore (game)
{
	globalScore = score + PlayerPrefs.GetInt("GlobalHighScore");
	PlayerPrefs.SetInt("GlobalHighScore", globalScore);
	PlayerPrefs.Save();
}