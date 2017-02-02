

function simular()
{
	var inputTextLines = document.getElementById("input").value.split('\n');
	var i,j;
	var t = inputTextLines[0]	;
	var currentLine = 1;
	var info;
	var instructions;
	var output='';
	for(i=0;i<t;i++)
	{
		info = inputTextLines[currentLine].split(' ');
		crearCubo(info[0]);
		instructions= info[1];
		currentLine++;
		for(j=0;j<instructions;j++)
		{
			info = inputTextLines[currentLine].split(' ');
			if(info[0] == "UPDATE")
			{
				update(info[1],info[2],info[3],parseInt(info[4]))
			}
			else
			{
				output +=   query(info[1],info[2],info[3],info[4],info[5],info[6]) + '\n'
			}
			currentLine++;
		}
	}
	document.getElementById("output").value  = output;
}


