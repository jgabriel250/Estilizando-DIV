const box =document.querySelector("#box");

function mudarLargura(){
  const lblL = document.querySelector("#lblLargura");
  const iptL = document.querySelector("#iptLargura");
  lblL.innerHTML = iptL.value;

  box.style.width = iptL.value+"px";
}

function mudarAltura(){
  const lblA = document.querySelector("#lblAltura");
  const iptA = document.querySelector("#iptAltura");
  lblA.innerHTML = iptA.value;
  
  box.style.height = iptA.value+"px";
}

function distanciaTopo(){
  const lblT = document.querySelector("#lblTopo");
  const iptT = document.querySelector("#iptTopo");
  lblT.innerHTML = iptT.value;

  box.style.marginTop = iptT.value+"px";
}

function distanciaEsquerda(){
  const lblE = document.querySelector("#lblEsquerda");
  const iptE = document.querySelector("#iptEsquerda");
  lblE.innerHTML = iptE.value;

  box.style.marginLeft = iptE.value+"px";
}

function mudarCor(){
  const lblR = document.querySelector("#lblRed");
  const iptR = document.querySelector("#iptRed");
  lblR.innerHTML = iptR.value;
  const lblG = document.querySelector("#lblGreen");
  const iptG = document.querySelector("#iptGreen");
  lblG.innerHTML = iptG.value;
  const lblB = document.querySelector("#lblBlue");
  const iptB = document.querySelector("#iptBlue");
  lblB.innerHTML = iptB.value;

  box.style.backgroundColor = "rgb("+iptR.value+","+iptG.value+","+iptB.value+")"
}

