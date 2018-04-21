window.onload = function(){
	var loginRegister = document.getElementById('logReg');
	loginRegister.addEventListener('click', function(){
		var modal = document.getElementById('login-modal');
		var close = document.getElementById('login-close');
		close.addEventListener('click', function(){
			modal.style.display = 'none';
		})
		modal.style.display = 'inline';
		//console.log(modal.style.display)

		var passwordHelp = document.getElementById('passwordGen');
		var sub = document.getElementById('logSub');

		passwordHelp.addEventListener('click', function(){
		var pass = document.getElementById('password');
		var adj = ['fluffy', 'hairy', 'soft', 'squishy', 'slick', 'goey'];
		var stuff = ['panda', 'horse', 'cake', 'dino', 'backpack', 'mountian'];
		var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		var special = ['!', '@', '#', '$', '%', '&']
		var randomNum1 = Math.floor(Math.random() * adj.length);
		var randomNum2 = Math.floor(Math.random() * stuff.length);
		var randomNum3 = Math.floor(Math.random() * num.length);
		var randomNum4 = Math.floor(Math.random() * special.length);
		pass.value = adj[randomNum1] + stuff[randomNum2] + num[randomNum3] + special[randomNum4];
		})
	})

	setTimeout(function(){
		var loadingContainer = document.getElementById('loading-container');
		var mainContainer = document.getElementById('main-container');
		loadingContainer.style.display = 'none';	
		mainContainer.style.display = 'inline';
	}, 1000);
	//change to 3000 later

	setTimeout(function(){
		var modal = document.getElementById('modal');
		var span = document.getElementById('close');
		var request = document.getElementById('requestBtn');
		var modal2 = document.getElementById('gform');
		modal.style.display = 'inline';
		span.addEventListener('click', function(){
			modal.style.display = 'none';
		})
		request.addEventListener('click', function(){
			modal2.style.display = 'inline'
			request.style.display = 'none'
		})
	}, 1000)
}