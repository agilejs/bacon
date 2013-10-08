function AppCtrl ($scope) {
    'use strict';
    $scope.title = 'The Movie Database';
}

function WelcomeCtrl ($scope, moviesResponse) {
    'use strict';
    $scope.movies = moviesResponse.data;
    $scope.predicate = 'title';
    $scope.reverse = 'true';
}

function MoviesListCtrl ($scope, $location, moviesResponse) {
    'use strict';
    $scope.movies = moviesResponse.data;
    $scope.predicate = '-title';
    $scope.reverse = 'true';
    $scope.add = function () {
        $location.path('/movies/new');
    };
}

MoviesListCtrl.resolve = {
    moviesResponse: function ($http) {
        'use strict';
        return $http.get('/movies');
    }
};

function MoviesAddCtrl ($scope, $http, $location) {
    'use strict';
    $scope.movie = {};
    $scope.save = function (movie) {
        $http.post('/movies', movie)
        .success(function(res) {
            $location.path('/movies/' + res.id);
        });
    };
}

function MovieDetailCtrl ($scope, $http, $location, moviesResponse) {
    'use strict';
    $scope.movie = moviesResponse.data;
    $scope['delete'] = function () {
        $http['delete']('/movies/' + $scope.movie.id).success(function (res) {
            $location.path('/movies');
        });
    };
}

function movieDetailResolver ($http, $route) {
    'use strict';
    var id = $route.current.params.id;
    return $http.get('/movies/' + id);
}

MovieDetailCtrl.resolve = {
    moviesResponse: movieDetailResolver
};

function MovieEditCtrl ($scope, $http, $location, moviesResponse) {
    'use strict';
    $scope.movie = moviesResponse.data;

    $scope.save = function () {
        $http.put('/movies/' + $scope.movie.id, $scope.movie)
        .success(function (res) {
            $location.path('/movies/' + $scope.movie.id);
        });
    };
}

MovieEditCtrl.resolve = {
    moviesResponse: movieDetailResolver
};

function NotFoundCtrl ($scope, $location) {
    'use strict';
    $scope.culprit = $location.search().culprit || 'unknown beast';
}

var ErrorCtrl = NotFoundCtrl;

function ActorsListCtrl ($scope, $location, actorsResponse) {
    'use strict';
    $scope.actors = actorsResponse.data;
    $scope.predicate = '-title';
    $scope.reverse = 'true';
    $scope.add = function () {
        $location.path('/actors/new');
    };
}

ActorsListCtrl.resolve = {
    moviesResponse: function ($http) {
        'use strict';
        return $http.get('/actors');
    }
};

function ActorsAddCtrl ($scope, $http, $location) {
    'use strict';
    $scope.actors = {};
    $scope.save = function (actors) {
        $http.post('/actors', actors)
        .success(function(res) {
            $location.path('/actors/' + res.id);
        });
    };
}

function ActorDetailCtrl ($scope, $http, $location, actorsResponse) {
    'use strict';
    $scope.actors = actorsResponse.data;
    $scope['delete'] = function () {
        $http['delete']('/actors/' + $scope.actors.id).success(function (res) {
            $location.path('/actors');
        });
    };
}

function actorDetailResolver ($http, $route) {
    'use strict';
    var id = $route.current.params.id;
    return $http.get('/actors/' + id);
}

ActorDetailCtrl.resolve = {
    actorsResponse: actorDetailResolver
};

function ActorEditCtrl ($scope, $http, $location, actorsResponse) {
    'use strict';
    $scope.actor = actorsResponse.data;

    $scope.save = function () {
        $http.put('/actors/' + $scope.actor.id, $scope.actor)
        .success(function (res) {
            $location.path('/actors/' + $scope.actor.id);
        });
    };
}

ActorEditCtrl.resolve = {
    moviesResponse: movieDetailResolver
};
