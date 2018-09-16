let tracker = () => {

	let counter = document.getElementById('counter');
  let totalTime = 0;
  const timeInADay = 144;

	let plus5 = document.getElementById('plus-5')
	plus5.addEventListener('click', ()=>{
    totalTime += 5;
    if (totalTime > timeInADay) {
      totalTime = timeInADay;
    }
		counter.innerHTML = totalTime;
	});  

	let minus5 = document.getElementById('minus-5');
	minus5.addEventListener('click', ()=>{
    totalTime -= 5;
    if (totalTime < 0) {
      totalTime = 0;
    }
		counter.innerHTML = totalTime;
	});
  
	let plus15 = document.getElementById('plus-15')
	plus15.addEventListener('click', ()=>{
		totalTime += 15;
    if (totalTime > timeInADay) {
      totalTime = timeInADay;
    }
		counter.innerHTML = totalTime;
	});  

	let minus15 = document.getElementById('minus-15');
	minus15.addEventListener('click', ()=>{
		totalTime -= 15;
    if (totalTime < 0) {
      totalTime = 0;
    }
		counter.innerHTML = totalTime;
	});
  
};

document.addEventListener('DOMContentLoaded', tracker, false);
