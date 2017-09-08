angular.module('app')
    .service('listAPI', service);

service.$inject = [ '$window' ];
function service($window) {
    var lists = [];
    var id = 0;

    init();

    function init() {
        lists = JSON.parse($window.localStorage.getItem('todoLists'));
        id = $window.localStorage.getItem('lastId');
        if (!lists) {
            lists = [];
        }
        if (!id) {
            id = 0;
        }
    }

    function add(list) {
        list.id = id;
        lists.push(list);
        save();
    }

    function get(id) {
        var result = null;
        for (var idx = 0; idx < lists.length; idx++) {
            if (lists[idx].id === id) {
                result = lists[idx];
                break;
            }
        }
        return result;
    }

    function getAll() {
        return lists;
    }

    function save() {
        $window.localStorage.setItem('todoLists', JSON.stringify(lists));
        $window.localStorage.setItem('lastId', id++);
    }

    return {
        add,
        get,
        getAll
    };
}