var cubo;
var tam;

function crearCubo(n)
{
	cubo= new Array();
	var i,j,k;
	for(i=0 ; i < n ; i ++)
	{
		cubo[i] = new Array();
		for(j=0 ; j < n ; j ++)
		{
			cubo[i][j] = new Array();
			for(k=0 ; k < n ; k ++)
			{
				cubo[i][j][k]=0
			}
		}
	}
	tam = n;
}

function update(x,y,z,value)
{
	cubo[x-1][y-1][z-1] = value
}

function query(x1,y1,z1,x2,y2,z2)
{
	var resp = 0;
	
	var i,j,k;
	for(i=x1-1 ; i < x2 ; i ++)
	{
		for(j=y1-1 ; j < y2 ; j ++)
		{
			for(k=z1-1 ; k < z2 ; k ++)
			{
				resp += cubo[i][j][k]
			}
		}
	}
	
	return resp;
}