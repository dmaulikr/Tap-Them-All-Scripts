#pragma strict

var countCollisions: int;
var game = true;
var gameController: GameObject;
var highScore: GameObject;

static var score : int;  

function Start () {

}

function Update () {

}

function OnTriggerEnter (other: Collider)
{
if (other.gameObject.tag == "Player")
	{
		countCollisions++;
		if (countCollisions == 2)
		{
			game = false;
			gameController.SendMessage("ShutDown", game);
			highScore.SendMessage("SetHighScore", game);
			highScore.SendMessage("SetGlobalScore", game);
		};
	};
}