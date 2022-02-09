const playerStatus = {
//	Aqui vamos adicionar todos os status do player
	speed:100,
}

export const playerMoviment = (runtime) => {

//	Declarando variáveis
	const KEY = runtime.keyboard;
	const DT = runtime.dt;
	const playerInst = runtime.objects.obj_player.getFirstInstance();
	
//	Aqui adicionamos a ação que vai aplicar o movimento no personagem.
//	Essa ação pode ser aplicada usando as setas do teclado, como
//	também pode ser o WASD usando o valor "KeyW", por exemplo.
	if(KEY.isKeyDown("ArrowLeft"))
	{
		playerInst.x -= playerStatus.speed * DT;
		playerInst.angleDegrees = 180;
	}
	if(KEY.isKeyDown("ArrowRight"))
	{
		playerInst.x += playerStatus.speed * DT;
		playerInst.angleDegrees = 0;
	}
	if(KEY.isKeyDown("ArrowUp"))
	{
		playerInst.y -= playerStatus.speed * DT;
		playerInst.angleDegrees = 270;
	}
	if(KEY.isKeyDown("ArrowDown"))
	{
		playerInst.y += playerStatus.speed * DT;
		playerInst.angleDegrees = 90;
	}
};