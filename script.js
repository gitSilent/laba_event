//Задание 1_________________________

// console.log('hi ');
// let btn = document.querySelector('.btn1');
// btn.addEventListener('click', ()=> {alert("Hello world!")})

//Задание 2_________________________

// let btn = document.querySelector('.btn2');
// btn.addEventListener('click', ()=> {
//     document.querySelector('.text').value = 'test@email.ru'
// })

//Задание 3_________________________

// let btn = document.querySelector('.btn3');
// let input = document.querySelector('.text1')
// btn.addEventListener('click', function() {
//     if (input.value.length){alert(`Вы ввели ${input.value}`);}
//     else {alert("вы ничего не ввели")}
    
// })  

//Задание 4_________________________

// let btn = document.querySelector('.btn');
// let input = document.querySelector('.text');
// let input1 = document.querySelector('.text1');
// let prom;

// btn.addEventListener('click', ()=>{
//     prom = input.value;
//     input.value = input1.value;
//     input1.value = prom; 
    
// })

//Задание 5_________________________


// let btn = document.querySelector('.btn');
// let btn1 = document.querySelector('.btn1');
// let input = document.querySelector('.text');

// btn.addEventListener('click', ()=>{input.setAttribute('disabled', true)})
// btn1.addEventListener('click', ()=>{input.removeAttribute('disabled')})

//Задание 6_________________________

// square = document.createElement('div');
// btn = document.createElement('button');
// // square.classList.add('sqr');
// btn.classList.add('btn');
// btn.textContent = 'Скрыть'
// document.body.append(btn);

// let switchh = false;
// document.body.append(square);
// square.style.width = '100px';
// square.style.height = '100px';
// square.style.backgroundColor='red';

// function switchName(){

//     if (switchh == true){
//         button.textContent ='Скрыть'
//         document.body.append(square);
//         square.style.width = '100px';
//         square.style.height = '100px';
//         square.style.backgroundColor='red';
//         switchh = false;
//     } 
//     else{ 
//         button.textContent ='Показать';
//         square.remove();
//         switchh = true;
//     }

// }
// button = document.querySelector('.btn');
// button.addEventListener('click', switchName);

// Задание 7____________________________

// square = document.createElement('div');
// square.classList.add('sqr');
// document.body.append(square);
// square.style.width = '100px';
// square.style.height = '100px';
// square.style.backgroundColor='red';

// square.addEventListener('mouseover', ()=>{
//     square.style.backgroundColor='green';
// })
// square.addEventListener('mouseout', ()=>{
//     square.style.backgroundColor='red';
// })

// Задание 8_______________________________

// switchh = true;
// function targets(event){
//    let thisSquare = (event.target).getAttribute('id');
//    console.log(thisSquare);
//    let currentSquare = document.getElementById(`${thisSquare}`);

// //    console.log(thisSqr.getAttribute('class'));
//    let AllSqrs = document.querySelectorAll('.sqr');
//    console.log(AllSqrs);
//    for (let i = 0;i<AllSqrs.length;i++){
//        AllSqrs[i].style.backgroundColor = 'red';
//     }
//    currentSquare.style.backgroundColor = 'green'
// }
// for (let i=0;i<4;i++){
//     let div = document.createElement('div');
//     div.classList.add(`sqr`);
//     div.setAttribute('id',`sqr${i}`)
//     div.style.backgroundColor = 'red';
//     div.style.width = '100px';
//     div.style.height = '100px';
//     div.style.marginBottom = '10px'
//     div.addEventListener('click', targets)
//     document.body.append(div);
    
// }


// Задание 9_________________________________

// function calculatator(){

// divCalc = document.createElement('div');
// divCalc.classList.add('divCalc');
// document.body.append(divCalc);
// CalcDiv = document.querySelector('.divCalc');

// str = document.createElement('p');
// str.classList.add('str');
// stroka = document.querySelector('.str');
// CalcDiv.appendChild(str);
// CalcDiv.appendChild

// signs = document.createElement('div');
// signs.classList.add('signs');
// CalcDiv.append(signs);
// CalcSigns = document.querySelector('.signs');


// div123 = document.createElement('div');
// div123.classList.add('div123');
// CalcDiv.append(div123);
// Calc123 = document.querySelector('.div123');

// div456 = document.createElement('div');
// div456.classList.add('div456');
// CalcDiv.append(div456);
// Calc456 = document.querySelector('.div456');

// div789 = document.createElement('div');
// div789.classList.add('div789');
// CalcDiv.append(div789);
// Calc789 = document.querySelector('.div789');

// divZeroRes = document.createElement('div');
// divZeroRes.classList.add('divZeroRes');
// CalcDiv.append(divZeroRes);
// CalcZeroRes = document.querySelector('.divZeroRes');

// signes = ["*","/","+","-"];
// for (i=0;i<signes.length;i++){
//     btn = document.createElement('button');
//     btn.classList.add('button');
//     btn.setAttribute('id',`${signes[i]}`);
//     btn.textContent = `${signes[i]}`;
//     document.body.append(btn);

//     CalcSigns.appendChild(btn);
    
// }

// for (i=0;i<10;i++){
//     btn = document.createElement('button');
//     btn.classList.add('button')
//     btn.setAttribute('id',`${i}`);
//     btn.textContent = `${i}`
//     document.body.append(btn);
//      if (i!=0 && i<=3){   
//         Calc123.appendChild(btn);
//     }
//      if (i!=0 && i>3 && i<=6){   
//         Calc456.appendChild(btn);
//     }
//     if (i!=0 && i>6 && i<=10){   
//         Calc789.appendChild(btn);
//     }
//     if (i==0){   
//         CalcZeroRes.appendChild(btn);
//     }

// }

// dlt = document.createElement('button');
// dlt.classList.add('dlt');
// CalcZeroRes.appendChild(dlt);
// delet = document.querySelector('.dlt');
// dlt.textContent = "стереть все";

// btnRes = document.createElement('button');
// btnRes.classList.add('button');
// btnRes.setAttribute('id','result')
// result = document.querySelector('#result');
// btnRes.textContent = 'результат'
// CalcDiv.append(btnRes);

// delet.addEventListener('click', ()=>{
//     str.textContent = "";
// })


// btnRes.addEventListener('click',()=>{
//     alert(`${str.textContent} = ${eval(str.textContent)}`);
//     str.textContent = eval(str.textContent) ;
// })

// document.addEventListener('click', function(event,equation){
//     targ = (event.target).getAttribute('id');
//     if (targ != null && targ != 'result'){
//         console.log(targ);
//         console.log(str.textContent);
//         str.innerText += targ;
//     }
// })

// btnRes.addEventListener('click', function(){
//     console.log(str[0]);
// })



// }
// calculatator();




