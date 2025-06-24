document.getElementById("calcForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const salario = parseFloat(document.getElementById("salario").value);
  const diasTrabalhados = parseInt(document.getElementById("diasTrabalhados").value);
  const faltas = parseInt(document.getElementById("faltas").value);
  const meses13 = parseInt(document.getElementById("meses13").value);
  const feriasVencidas = document.getElementById("feriasVencidas").value === "sim";
  const feriasProporcionais = parseInt(document.getElementById("feriasProporcionais").value);
  const horasExtras = parseFloat(document.getElementById("horasExtras").value);
  const valorHora = parseFloat(document.getElementById("valorHora").value);

  const salarioDia = salario / 30;

  const saldoSalario = salarioDia * diasTrabalhados;
  const descontoFaltas = salarioDia * faltas;
  const decimoTerceiro = (salario / 12) * meses13;
  const feriasVencidasValor = feriasVencidas ? salario + salario / 3 : 0;
  const feriasProp = ((salario / 12) * feriasProporcionais) + (((salario / 12) * feriasProporcionais) / 3);
  const horasExtrasValor = horasExtras * valorHora;

  const total = saldoSalario + decimoTerceiro + feriasVencidasValor + feriasProp + horasExtrasValor - descontoFaltas;

  const resultadoHTML = `
    <h2>Resultado:</h2>
    <p><strong>Saldo de Salário:</strong> R$ ${saldoSalario.toFixed(2)}</p>
    <p><strong>Desconto por Faltas:</strong> -R$ ${descontoFaltas.toFixed(2)}</p>
    <p><strong>13º Proporcional:</strong> R$ ${decimoTerceiro.toFixed(2)}</p>
    <p><strong>Férias Vencidas + 1/3:</strong> R$ ${feriasVencidasValor.toFixed(2)}</p>
    <p><strong>Férias Proporcionais + 1/3:</strong> R$ ${feriasProp.toFixed(2)}</p>
    <p><strong>Horas Extras:</strong> R$ ${horasExtrasValor.toFixed(2)}</p>
    <hr>
    <p><strong>Total a Receber:</strong> R$ ${total.toFixed(2)}</p>
  `;

  document.getElementById("resultado").innerHTML = resultadoHTML;
});
