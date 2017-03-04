#pragma strict
import UnityEngine.UI;

var speed: float;
//var moveMultiplierx: float;
//var moveMultipliery: float;
var sideMove: float;
var upMove: float;
var game = true;

var xpBar: Image;
var scoreText: Text;
var gameOverText: Text;
var tip: Text;
var finalBackground: Canvas;
var finalUI: Canvas;
var gameUI: Canvas;
var ads: GameObject;
var highScore: GameObject;
var xpBarObject: GameObject;

static var score: int;

var play = true;

function Start () {
	finalBackground.enabled = false;
	finalUI.enabled = false;
	ads.SendMessage("RequestInterstitial");
	gameOverText.enabled = false;
	tip.enabled = true;
	gameUI.enabled = true;
}

function Update () 
{
	if (play)
		{
			for (var i = 0; i < Input.touchCount; ++i)
			{
				if (Input.GetTouch(i).phase == TouchPhase.Began)
				{
					var ray = Camera.main.ScreenPointToRay (Input.GetTouch(i).position);
					var hit: RaycastHit;
					//var baryCenter = hit.barycentricCoordinate;
					if (Physics.Raycast (ray, hit))
					{
						if (hit.collider.tag == "Player")
						{
						//	var movement: Vector3 = new Vector3(Mathf.Abs(moveMultiplierx*(-baryCenter.x - ball.transform.position.x)), Mathf.Abs(moveMultipliery*(-baryCenter.y - ball.transform.position.y)), 0.0f);
							var movement: Vector3 = new Vector3(Random.Range(-sideMove, sideMove), Random.Range(upMove - 1, upMove + 1), 0.0f);
							hit.rigidbody.velocity = movement * speed;
							ScoreManager.score++;
							FinalScoreManager.score++;
							XpBarController.score++;
							tip.enabled = false;
						};					
					};
				};
			};
		};
		
	if (Application.platform == RuntimePlatform.Android)
	{
   		if (Input.GetKey(KeyCode.Escape))
        {
			Application.LoadLevel("title_screen");
         }
	}	
}

function FixedUpdate ()
{

}

function ShutDown (game)
{	
	play = false;
	XpBarController.score = 0;
	gameOverText.enabled = true;
	yield WaitForSeconds(3);
	ads.SendMessage("ShowInterstitial");
	gameUI.enabled = false;
	gameOverText.enabled = false;
	scoreText.enabled = false;
	finalBackground.enabled = true;
	yield WaitForSeconds(1);
	finalUI.enabled = true;
}

function Retry ()
{
	Application.LoadLevel(Application.loadedLevel);
}

function MainMenu ()
{
	Application.LoadLevel("title_screen");
}
			
function Quit ()
{
	Application.Quit();
}