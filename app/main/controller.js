angular.module('app')
    .controller('mainController', mainController);

mainController.$inject = [ 'listAPI' ];

function mainController (listAPI) {
    this.lists = listAPI.getAll();
    this.newList = {
        title: ''
    };

    //Set public methods
    this.onAddListClick = onAddListClick.bind(this);
    
    function onAddListClick() {
        listAPI.add(this.newList);
        this.lists = listAPI.getAll();
        this.newList = { title: ''};
    }
}