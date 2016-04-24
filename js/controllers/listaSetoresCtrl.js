angular
	.module("listaSetores")
	.controller("listaSetoresCtrl", listaSetoresCtrl);


	function listaSetoresCtrl($scope, services){
		
		var vm = this;

		vm.title = 'Lista de Setores';
		vm.mensagem = 'mensagem de boas vindas';

		// vm.setores = 
		// 	[{id: 1, descricao: 'UNIDES'}, {id: 2, descricao: 'UNIEP'}, {id: 3, descricao: 'UNIGEST'}];

		vm.setores = function(){
			services.getSetores().then(function(result){
				vm.setores = result.data;
			});
		};

		vm.setores();

	}
