angular
    .module('listaSetores')
    .service("services", ['$http', services]);

function services($http) {
    
    var serviceBase = 'backend/'
    var obj = {};

    obj.getSetores = function(){
        return $http.get(serviceBase + 'setores');
    }
    
    obj.getSetor = function(setorID){
        return $http.get(serviceBase + 'setor?id=' + setorID);
    }
    
   
    obj.updateSetor = function(){
        return $http.get(serviceBase + 'setor');
    }
   
    return obj;   
};