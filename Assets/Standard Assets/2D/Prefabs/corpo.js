#pragma strict
var velocidadeFrente : float;
var velocidadeCima   : float;
var velocidadeLado   : float;

var textoVida        : GUIText;

static var posicaoHeroi     : Vector3;


var velocidadeRotacao: float;


function Start () {

}

function Update () {



velocidadeCima   = 30*Time.deltaTime;
velocidadeFrente = 8*Time.deltaTime;
velocidadeLado   = 8*Time.deltaTime;
velocidadeRotacao = 15*Time.deltaTime;


if(Input.GetKey("w"))
  {
   transform.Translate(0,0,velocidadeFrente);
  }
  
if(Input.GetKey("s"))
  {
   transform.Translate(0,0,-velocidadeFrente);
  }
  
if(Input.GetKey("a"))
  {
   transform.Translate(-velocidadeLado,0,0);
  }
if(Input.GetKey("d"))
  {
   transform.Translate(velocidadeLado,0,0);
  }
  if(Input.GetKey("j"))
  {
   transform.Rotate(0,-velocidadeRotacao,0);
  }
if(Input.GetKey("l"))
  {
   transform.Rotate(0,velocidadeRotacao,0);
  }
 
  
   posicaoHeroi = transform.position;

}

function OnCollisionEnter(collision: Collision)
{
 if (collision.gameObject.tag == "Inimigo")
 {
  
   }

}
