const canvas = document.getElementById("barChart");
const ctx = canvas.getContext("2d");

const labels = ["Baloncesto", "Beisbol", "futbol"];
const values = [300, 200, 400];
const colors = ["#E74C3C", "#3498DB", "#E67E22"];

const chartWidth = canvas.width - 100; //AREA HORIZONTAL UTILIZABLE DEL GRAFICO 
const chartHeight = canvas.height - 100; // AREA VERTICAL DEL UTILIZABLE GRAFICO 
const barWidth = 50; // ANCHO DE CADA BARRA
const gap = (chartWidth - labels.length * barWidth) / (labels.length + 1); //ESPACIO ENTRE BARRAS
const maxValue = 500; //valor maximo del eje Y
const numSteps = 5; //CANTIDAD DE DIVISIONES EN EL EJE Y
const stepValue = maxValue/numSteps;


function drawGrid(){
    //EN ESTA FUNCION SE DIBUJA UNA CUADRICULA
    ctx.strokeStyle = "#CCC";
    ctx.lineWidth = 1;




    for(let i = 0; i <= numSteps; i++){
        const y = canvas.height - 50 - (i * chartHeight/numSteps); // altura de cada linbea de eje Y
        ctx.beginPath();
        ctx.moveTo(50, y);
        ctx.lineTo(canvas.width - 50, y); //posicion de la linea de la cuadricula
        ctx.stroke();

        ctx.fillStyle = "#000";
        ctx.font = "12px arial";
        ctx.fillText(stepValue * i,20, y + 5); //se colocara una etiqueta en el eje "y" en la pos

    }

    ctx.beginPath();
    ctx.moveTo(50,50); //inicia el eje "y"
    ctx.lineTo(50,canvas.height -50);
    ctx.moveTo(50,canvas.height - 50);
    ctx.lineTo(canvas.width -50, canvas.height -50);
    ctx.strokeStyle = "#000";
    ctx.stroke();

}

    function drawBars(){

 for (let i=0;i<labels.length; i++){

const x = 50+ gap * ( i + 1 ) + barWidth * i; //ESTA ES LA POSICIÓN INICIAL DE LA BARRA EN EL EJE "X"
const barHeight = (values[i]/maxValue) * chartHeight; //ESTA ES LA ALTURA PROPORCIONAL DE CADA BARRA, CONSIDERANDO 
const y = canvas.height - 50 - barHeight; // ESTA ES LA POSICIÓN "Y" DE LA BARRA (PUEDE CONSIDERARSE COMO ALTURA)
ctx.fillStyle = colors[i];
ctx.fillRect(x,y,barWidth, barHeight); //SE DIBUJA EL RECTANGULO DE LA BARRA CON LA POSICIÓN Y LA ALTURA
ctx.fillstyle="#000";
ctx.font = "12px Arial";
ctx.fillText(values[i],x + barWidth/4, y - 10); //SE COLOCA EL VALOR DE LA BARRA SOBRE LA MISMA
ctx.fillText(labels[i],x + barWidth/4, canvas.height - 30); //SE COLOCA LA ETIQUETA O NOMBRE DE LA BARRA
}
}
function drawTitle(){
ctx.font = "16px Arial";
ctx.fillstyle = "#000";
ctx.fillText("Unidades vendidas en categorías deportivas", canvas.width/2 - 150, 20); //SE COLOCA UNA LEYENDA O TÍTUL
}
drawGrid();
drawBars();
drawTitle();
