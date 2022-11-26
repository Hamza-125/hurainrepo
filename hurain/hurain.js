

let nav = document.getElementById('dd');
window.addEventListener('scroll',() => {
	if(window.scrollY >=500){
		console.log("hrrrr")
		nav.classList.add('nav-colored');

	}
	else{
		nav.classList.remove('nav-colored')
	}
})


let plan=document.getElementById('plan');
let plantxt=document.getElementById('plantxt');
let code=document.getElementById('code');
let codetxt=document.getElementById('codetxt');
let build=document.getElementById('build');
let buildtxt=document.getElementById('buildtxt');
let test=document.getElementById('test');
let testtxt=document.getElementById('testtxt');
let release=document.getElementById('release');
let releasetxt=document.getElementById('releasetxt');
let deploy=document.getElementById('deploy');
let deploytxt=document.getElementById('deploytxt');
let operate=document.getElementById('operate');
let operatetxt=document.getElementById('operatetxt');
let monitor=document.getElementById('monitor');
let monitortxt=document.getElementById('monitortxt');

window.addEventListener('scroll',() => {
	if(window.scrollY >=2300){
		for (var i = 0; i < 100; i++) {
			
		
		plan.classList.add('planscroll')
		plantxt.classList.add('plantxtscroll')
		code.classList.add('codescroll')
		codetxt.classList.add('codetxtscroll')
		build.classList.add('buildscroll')
		buildtxt.classList.add('buildtxtscroll')
		test.classList.add('testscroll')
		testtxt.classList.add('testtxtscroll')
		release.classList.add('releasescroll')
		releasetxt.classList.add('releasetxtscroll')
		deploy.classList.add('deployscroll')
		deploytxt.classList.add('deploytxtscroll')
		operate.classList.add('operatescroll')
		operatetxt.classList.add('operatetxtscroll')
		monitor.classList.add('monitorscroll')
		monitortxt.classList.add('monitortxtscroll')



	}
	
	}
	else{
		plan.classList.remove('planscroll')
		plantxt.classList.remove('plantxtscroll')
		code.classList.remove('codescroll')
		codetxt.classList.remove('codetxtscroll')
		build.classList.remove('buildscroll')
		buildtxt.classList.remove('buildtxtscroll')
		test.classList.remove('testscroll')
		testtxt.classList.remove('testtxtscroll')
		release.classList.remove('releasescroll')
		releasetxt.classList.remove('releasetxtscroll')
		deploy.classList.remove('deployscroll')
		deploytxt.classList.remove('deploytxtscroll')
		operate.classList.remove('operatescroll')
		operatetxt.classList.remove('operatetxtscroll')
		monitor.classList.remove('monitorscroll')
		monitortxt.classList.remove('monitortxtscroll')
	}
})