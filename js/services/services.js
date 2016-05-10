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

    obj.deleteSetor = function (id) {
        return $http.delete(serviceBase + 'deleteSetor?id=' + id).then(function (status) {
            return status.data;
        });
    };
   
    return obj;   
};