function controlEntrada()
{
  const gamers = [];
  let nombre = "";
  let reporte = "";
  
  while (nombre !== "Paco")
    {
    nombre = prompt("Nombre del gamer");
    gamers.push(nombre);
    }

    if (gamers.length < 5)
    reporte = "hay pocos";
    else if (gamers.length <= 10)
    reporte = "hay más que pocos y menos que muchos";
    else
    reporte = "Aquí ya empieza a oler a tigre";


  console.log(reporte);
  return {gamers, reporte};
}

controlEntrada();