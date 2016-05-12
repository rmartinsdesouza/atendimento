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
    
    obj.insertSetor = function (setor) {
    return $http.post(serviceBase + 'insertSetor', setor).then(function (results) {
        console.log(results);
        return results;
    });
    };

    obj.updateSetor = function (id,setor) {
        return $http.post(serviceBase + 'updateSetor', {id:id, setor:setor}).then(function (status) {
            return status.data;
        });
    };
   

    obj.deleteSetor = function (id) {
        return $http.delete(serviceBase + 'deleteSetor?id=' + id).then(function (status) {
            return status.data;
        });
    };
   
    return obj;   
};