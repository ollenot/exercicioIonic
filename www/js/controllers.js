angular.module('starter.controllers', [])

.controller('MenuController', function($scope) {
	$scope.lista = [
		{nome: 'Home', caminho: '#/app/home'},
		{nome: 'Bussola', caminho: '#/app/bussola'},
		{nome: 'Câmera', caminho: '#/app/camera'},
		{nome: 'Notificações', caminho: '#/app/notificacoes'}		
	]; 	
})

.controller('HomeController', function($scope) {
})

.controller('NotificacoesController', function($scope) {
  $scope.teste = "oi"
})

.controller('CameraController', function($scope) { 
       
	$scope.origem = {
	  lista:
		[
			{nome: 'Câmera', value:'camera'},
			{nome: 'Biblioteca', value: 'biblioteca'}
		],
	  selecionado: '',
	  selecionar: function (origemSelecionado){
		$scope.origem.selecionado = origemSelecionado;
	  }
	};
	
	$scope.qualidade = {
	  lista:
		[
			{nome: '25', value: '25'},
			{nome: '50', value: '50'},
			{nome: '100', value: '100'}
		],
	  selecionado: '',
	  selecionar: function (qualidadeSelecionado){
		$scope.qualidade.selecionado = qualidadeSelecionado;
	  }
	};       
	
	$scope.encoding = {
	  lista:
		[
			{nome: 'JPG', value: 'JPG'},
			{nome: 'PNG', value: 'PNG'}
		],
	  selecionado: '',
	  selecionar: function (encodingSelecionado){
		$scope.encoding.selecionado = encodingSelecionado;
	  }
	}        
	
	$scope.tirarFoto = function(){	  
		/*var origem;
		if ($scope.origem.selecionado == "camera"){
			origem = Camera.PictureSourceType.CAMERA;
		} else {
			origem = Camera.PictureSourceType.PHOTOLIBRARY;
		}
		var qualidade = $scope.qualidade.selecionado;

		var encoding;
		if ($scope.encoding.selecionado == "JPG"){
			encoding = Camera.EncodingType.JPEG
		} else {
			encoding = Camera.EncodingType.PNG;
		}	
		*/
		alert('oi');
		navigator.notification.alert(
			"origem: " + $scope.origem.selecionado + " " +
			"qualidade: " + $scope.qualidade.selecionado + " " +
			"encoding: " + $scope.encoding.selecionado
		);
/*
		navigator.camera.getPicture(
			function(imageData){				
				navigator.notification.alert("data:image/jpeg;base64," + imageData);
			}, 
			function(message){
				navigator.notification.alert('Falhou: ' + message);
			}, 
			{ 
				quality : qualidade,
				sourceType : origem,
				encodingType: encoding,
				destinationType : Camera.DestinationType.DATA_URL 
			}
		);	*/	  
	};
})


.controller('BussolaController', function($scope) {
  $scope.teste = "oi"
})




