#pragma strict

var startGame: Button;
var selectTheme: Button;
var quitGame: Button;
var gameTitle: Text;
var highScore: Button;
var globalScore: Button;
var themeBackground: Canvas;
var themeSelectionCanvas: Canvas;
var themeObject: GameObject;
var tapText: GameObject;

var theme1: Sprite;
var theme2: Sprite;
var theme3: Sprite;
var theme4: Sprite;
var theme5: Sprite;
var theme6: Sprite;
var theme7: Sprite;
var theme8: Sprite;

var theme2_locked: Sprite;
var theme3_locked: Sprite;
var theme4_locked: Sprite;
var theme5_locked: Sprite;
var theme6_locked: Sprite;
var theme7_locked: Sprite;
var theme8_locked: Sprite;

function StartGame ()
{
	Application.LoadLevel("game_scene");
}

function Start () {
	themeBackground.enabled = false;
	themeSelectionCanvas.enabled = false;
}

function Update ()
{
	if (Application.platform == RuntimePlatform.Android)
	{
   		if (Input.GetKey(KeyCode.Escape))
        {
			startGame.gameObject.SetActive(true);
			selectTheme.gameObject.SetActive(true);
			quitGame.gameObject.SetActive(true);
			gameTitle.gameObject.SetActive(true);
			highScore.gameObject.SetActive(true);
			globalScore.gameObject.SetActive(true);
			themeBackground.enabled = false;
			themeSelectionCanvas.enabled = false;
            return;
         }
	}
}

function Quit()
{
	Application.Quit();
}

function ShowThemes ()
{
	startGame.gameObject.SetActive(false);
	selectTheme.gameObject.SetActive(false);
	quitGame.gameObject.SetActive(false);
	gameTitle.gameObject.SetActive(false);
	highScore.gameObject.SetActive(false);
	globalScore.gameObject.SetActive(false);
	themeBackground.enabled = true;
	themeSelectionCanvas.enabled = true;
}

function SelectTheme ()
{
	var themeImage: Image;
	themeImage = themeObject.GetComponent(Image);
	var sprite: String;
	sprite = themeImage.sprite.name;
	var theme: int;
	switch (sprite)
	{
		case "theme2":
    	theme = 2;
    	break;
		case "theme3":
		theme = 3;
		break;
		case "theme4":
		theme = 4;
		break;
		case "theme5":
		theme = 5;
		break;
		case "theme6":
		theme = 6;
		break;
		case "theme7":
		theme = 7;
		break;
		case "theme8":
		theme = 8;
		break;
		default:
		theme = 1;
		break;
	}
	PlayerPrefs.SetInt("ThemeNumber", theme); 
	PlayerPrefs.Save();
	Debug.Log(PlayerPrefs.GetInt("ThemeNumber", theme));
	startGame.gameObject.SetActive(true);
	selectTheme.gameObject.SetActive(true);
	quitGame.gameObject.SetActive(true);
	gameTitle.gameObject.SetActive(true);
	highScore.gameObject.SetActive(true);
	globalScore.gameObject.SetActive(true);
	themeBackground.enabled = false;
	themeSelectionCanvas.enabled = false;
}

function ThemeSwitchRight ()
{	
	var themeImage: Image;
	themeImage = themeObject.GetComponent(Image);
	var themeButton: Button;
	themeButton = themeObject.GetComponent(Button);
	var displayedText: Text;
	displayedText = tapText.GetComponent(Text);
	var sprite: String;
	sprite = themeImage.sprite.name;
	switch (sprite)
	{
		case "theme2":
		case "theme2_locked":
    	if (PlayerPrefs.GetInt("GlobalHighScore") * 10 >= 1000)
    	{
    		themeButton.enabled = true;
    		displayedText.text = "Tap to select";
    		displayedText.color = Color.white;
    		themeImage.sprite = theme3;
    	}
    	else
    	{
    	themeButton.enabled = false;
    	themeImage.sprite = theme3_locked;
    	displayedText.text = "Get 1000 total score to unlock this theme";
    	displayedText.color = Color.red;
    	}
    	break;
		case "theme3":
		case "theme3_locked":
    	if (PlayerPrefs.GetInt("GlobalHighScore") * 10 >= 2000)
    	{
    		themeButton.enabled = true;
    		displayedText.text = "Tap to select";
    		displayedText.color = Color.white;
    		themeImage.sprite = theme4;
    	}
    	else
    	{
    	themeButton.enabled = false;
    	themeImage.sprite = theme4_locked;
    	displayedText.text = "Get 2000 total score to unlock this theme";
    	displayedText.color = Color.red;
    	}
		break;
		case "theme4":
		case "theme4_locked":
    	if (PlayerPrefs.GetInt("GlobalHighScore") * 10 >= 4000)
    	{
    		themeButton.enabled = true;
    		displayedText.text = "Tap to select";
    		displayedText.color = Color.white;
    		themeImage.sprite = theme5;
    	}
    	else
    	{
    	themeButton.enabled = false;
    	themeImage.sprite = theme5_locked;
    	displayedText.text = "Get 4000 total score to unlock this theme";
    	displayedText.color = Color.red;
    	}
		break;
		case "theme5":
		case "theme5_locked":
    	if (PlayerPrefs.GetInt("GlobalHighScore") * 10 >= 8000)
    	{
    		themeButton.enabled = true;
    		displayedText.text = "Tap to select";
    		displayedText.color = Color.white;
    		themeImage.sprite = theme6;
    	}
    	else
    	{
    	themeButton.enabled = false;
    	themeImage.sprite = theme6_locked;
    	displayedText.text = "Get 8000 total score to unlock this theme";
    	displayedText.color = Color.red;
    	}
		break;
		case "theme6":
		case "theme6_locked":
    	if (PlayerPrefs.GetInt("GlobalHighScore") * 10 >= 16000)
    	{
    		themeButton.enabled = true;
    		displayedText.text = "Tap to select";
    		displayedText.color = Color.white;
    		themeImage.sprite = theme7;
    	}
    	else
    	{
    	themeButton.enabled = false;
    	themeImage.sprite = theme7_locked;
    	displayedText.text = "Get 16000 total score to unlock this theme";
    	displayedText.color = Color.red;
    	}
		break;
		case "theme7":
		case "theme7_locked":
    	if (PlayerPrefs.GetInt("GlobalHighScore") * 10 >= 32000)
    	{
    		themeButton.enabled = true;
    		displayedText.text = "Tap to select";
    		displayedText.color = Color.white;
    		themeImage.sprite = theme8;
    	}
    	else
    	{
    	themeButton.enabled = false;
    	themeImage.sprite = theme8_locked;
    	displayedText.text = "Get 32000 total score to unlock this theme";
    	displayedText.color = Color.red;
    	}
		break;
		case "theme8":
		case "theme8_locked":
    	if (PlayerPrefs.GetInt("GlobalHighScore") * 10 >= 0)
    	{
    		themeButton.enabled = true;
    		displayedText.text = "Tap to select";
    		displayedText.color = Color.white;
    		themeImage.sprite = theme1;
    	}
		break;
		default:
		if (PlayerPrefs.GetInt("GlobalHighScore") * 10 >= 500)
    	{
    		themeButton.enabled = true;
    		displayedText.text = "Tap to select";
    		displayedText.color = Color.white;
    		themeImage.sprite = theme2;
    	}
    	else
    	{
    	themeButton.enabled = false;
    	themeImage.sprite = theme2_locked;
    	displayedText.text = "Get 500 total score to unlock this theme";
    	displayedText.color = Color.red;
    	}
		break;
	}
}

function ThemeSwitchLeft ()
{	
	var themeImage: Image;
	themeImage = themeObject.GetComponent(Image);
	var themeButton: Button;
	themeButton = themeObject.GetComponent(Button);
	var displayedText: Text;
	displayedText = tapText.GetComponent(Text);
	var sprite: String;
	sprite = themeImage.sprite.name;
	switch (sprite)
	{
		case "theme2":
		case "theme2_locked":
    	if (PlayerPrefs.GetInt("GlobalHighScore") * 10 >= 0)
    	{
    		themeButton.enabled = true;
    		displayedText.text = "Tap to select";
    		displayedText.color = Color.white;
    		themeImage.sprite = theme1;
    	}
    	break;
		case "theme3":
		case "theme3_locked":
		if (PlayerPrefs.GetInt("GlobalHighScore") * 10 >= 500)
    	{
    		themeButton.enabled = true;
    		displayedText.text = "Tap to select";
    		displayedText.color = Color.white;
    		themeImage.sprite = theme2;
    	}
    	else
    	{
    	themeButton.enabled = false;
    	themeImage.sprite = theme2_locked;
    	displayedText.text = "Get 500 total score to unlock this theme";
    	displayedText.color = Color.red;
    	}
		break;
		case "theme4":
		case "theme4_locked":
    	if (PlayerPrefs.GetInt("GlobalHighScore") * 10 >= 1000)
    	{
    		themeButton.enabled = true;
    		displayedText.text = "Tap to select";
    		displayedText.color = Color.white;
    		themeImage.sprite = theme3;
    	}
    	else
    	{
    	themeButton.enabled = false;
    	themeImage.sprite = theme3_locked;
    	displayedText.text = "Get 1000 total score to unlock this theme";
    	displayedText.color = Color.red;
    	}
		break;
		case "theme5":
		case "theme5_locked":
    	if (PlayerPrefs.GetInt("GlobalHighScore") * 10 >= 2000)
    	{
    		themeButton.enabled = true;
    		displayedText.text = "Tap to select";
    		displayedText.color = Color.white;
    		themeImage.sprite = theme4;
    	}
    	else
    	{
    	themeButton.enabled = false;
    	themeImage.sprite = theme4_locked;
    	displayedText.text = "Get 2000 total score to unlock this theme";
    	displayedText.color = Color.red;
    	}
		break;
		case "theme6":
		case "theme6_locked":
    	if (PlayerPrefs.GetInt("GlobalHighScore") * 10 >= 4000)
    	{
    		themeButton.enabled = true;
    		displayedText.text = "Tap to select";
    		displayedText.color = Color.white;
    		themeImage.sprite = theme5;
    	}
    	else
    	{
    	themeButton.enabled = false;
    	themeImage.sprite = theme5_locked;
    	displayedText.text = "Get 4000 total score to unlock this theme";
    	displayedText.color = Color.red;
    	}
		break;
		case "theme7":
		case "theme7_locked":
    	if (PlayerPrefs.GetInt("GlobalHighScore") * 10 >= 8000)
    	{
    		themeButton.enabled = true;
    		displayedText.text = "Tap to select";
    		displayedText.color = Color.white;
    		themeImage.sprite = theme6;
    	}
    	else
    	{
    	themeButton.enabled = false;
    	themeImage.sprite = theme6_locked;
    	displayedText.text = "Get 8000 total score to unlock this theme";
    	displayedText.color = Color.red;
    	}
		break;
		case "theme8":
		case "theme8_locked":
    	if (PlayerPrefs.GetInt("GlobalHighScore") * 10 >= 16000)
    	{
    		themeButton.enabled = true;
    		displayedText.text = "Tap to select";
    		displayedText.color = Color.white;
    		themeImage.sprite = theme7;
    	}
    	else
    	{
    	themeButton.enabled = false;
    	themeImage.sprite = theme7_locked;
    	displayedText.text = "Get 16000 total score to unlock this theme";
    	displayedText.color = Color.red;
    	}
		break;
		default:
    	if (PlayerPrefs.GetInt("GlobalHighScore") * 10 >= 32000)
    	{
    		themeButton.enabled = true;
    		displayedText.text = "Tap to select";
    		displayedText.color = Color.white;
    		themeImage.sprite = theme8;
    	}
    	else
    	{
    	themeButton.enabled = false;
    	themeImage.sprite = theme8_locked;
    	displayedText.text = "Get 32000 total score to unlock this theme";
    	displayedText.color = Color.red;
    	}
		break;
	}
}