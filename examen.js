function testJugger() {

    var puntos = 0;
    
    alert("Test de Jugger");

    var p1 = prompt("1º ¿Cuál es el objetivo del Jugger? (escribel el numero de la respuesta que eliges)\n1) Llevar el jugg a la base rival\n2) Golpear rivales");
    if (p1 == 1) { puntos2 = puntos + 1; } else { puntos2 = puntos - 1; }

    var p2 = prompt("2º ¿Quién puede coger el jugg con la mano? (escribel el numero de la respuesta que eliges)\n1) Pompfer\n2) Qwik");
    if (p2 == 2) { puntos3 = puntos2 + 1; } else { puntos3 = puntos2 - 1; }

    var p3 = prompt("3º ¿Cuántos jugadores hay por equipo? (escribel el numero de la respuesta que eliges)\n1) 5\n2) 7");
    if (p3 == 1) { puntos4 = puntos3 + 1; } else { puntos4 = puntos3 - 1; }

    var p4 = prompt("4º ¿Cómo se elimina a un qwik? (escribel el numero de la respuesta que eliges)\n1) Tocándolo con la mano\n2) Con un arma");
    if (p4 == 2) { puntos5 = puntos4 + 1; } else { puntos5 = puntos4 - 1; }

    var p5 = prompt("5º ¿Qué organismo organiza el Jugger en España? (escribel el numero de la respuesta que eliges)\n1) FIFA\n2) Federación Española de Jugger");
    if (p5 == 2) { puntos6 = puntos5 + 1; } else { puntos6 = puntos5 - 1; }

    alert("Puntuación final: " + puntos6);
}