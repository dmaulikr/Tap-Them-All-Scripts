#pragma strict

function Start () {

}

function Update () 
{
	for (var i = 0; i < Input.touchCount; ++i)
	{
		if (Input.GetTouch(i).phase == TouchPhase.Began)
		{
			var ray = Camera.main.ScreenPointToRay (Input.GetTouch(i).position);
			var hit: RaycastHit;
			if (Physics.Raycast (ray, hit))
			{
				if (hit.collider.name == "Quit Game")
				{
					Application.Quit();
				};					
			};
		};
	};
}