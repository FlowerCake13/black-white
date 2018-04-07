window.onload = function(){
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