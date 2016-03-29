(function() {
  'use strict';

  angular
    .module('projects')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope) {
	  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
		  $log.error('An error occurred while changing stated: ', error);

		  $log.debug('event', event);
		  $log.debug('toState', toState);
		  $log.debug('toParams', toParams);
		  $log.debug('fromState', fromState);
		  $log.debug('fromParams', fromParams);

	  });
  }

})();
