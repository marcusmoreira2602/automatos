#pragma strict

var distHeroi : Vector3; 
var velocidadeTranlate: float;
var distanciaMinima: float;
var normX: float;
var normY: float;

function Start () {
distanciaMinima = 1;
}

function Update () {

velocidadeTranlate = 2 * Time.deltaTime;

distHeroi = corpo.posicaoHeroi - transform.position;
normX = distHeroi.y;
normY = distHeroi.x;



if(normX<0) normX = -normX; 


print(normX+" - "+normY);

if((normX<distanciaMinima) && (normY<distanciaMinima) )
 {
  if (distHeroi.x > 0) transform.Translate(velocidadeTranlate,0,0);
  else transform.Translate(-velocidadeTranlate,0,0); 

 }
}
function OnCollisionEnter(collision: Collision)
{
 if (collision.gameObject.tag == "Bala")
 {
   Destroy(gameObject);
   }

}