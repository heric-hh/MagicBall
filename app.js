preguntarBtn = document.querySelector("#preguntar");
const ask = () => {
    //Leer pregunta
    const questionInput = document.querySelector("#question");
    const respuestaInput = document.querySelector("#respuesta");

    if(questionInput.value != '') {
        //Recibir respuesta al preguntar a la bola mágica
        let respuesta = magicBall();
        respuestaInput.value = respuesta;
        //Imprimir resultado
    } else {
        respuestaInput.value = 'Pregunta algo';        
    }
}

preguntarBtn.addEventListener('click', ask);

const magicBall = () => {
    let randomNumber = Math.floor(Math.random() * 8);
    let eightBall = '';

    switch(randomNumber) {
        case 1: eightBall = 'Nada';
        break;

        case 2: eightBall = 'Mis poderes mentales me dicen que no';
        break;

        case 3: eightBall = 'No cuentes con ello';
        break;

        case 4: eightBall = 'La fuerza estará de tu lado';
        break;

        case 5: eightBall = 'No creo que sea el momento';
        break;

        case 6: eightBall = 'El poder de Ecuador lo concentra en las pajas asi que no me molestes';
        break;

        case 7: eightBall = 'Cuenta con ello';
        break;

        case 8: eightBall = 'Nada';
        break;
    }

    return eightBall;
}