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
		modal.style.display = 'inline';
		span.addEventListener('click', function(){
			modal.style.display = 'none';
		})
	}, 1000)
}