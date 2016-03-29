(function () {
	'use strict';

	angular
		.module('projects')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController($scope, Upload, $timeout, $log) {
		var vm = this;
		vm.links = '';
		$scope.$watch('vm.files', function () {
			vm.upload(vm.files);
		});

		vm.result = [];
		vm.upload = function (files) {
			if (files && files.length) {


						Upload.upload({
							url: 'http://files.oxgroup.media/fileUpload',
							data: {
								files: files
							}
						}).then(function (resp) {
							vm.result = resp.data;
						}, null, function (evt) {
							var progressPercentage = parseInt(100.0 *
								evt.loaded / evt.total);
							$log.info(progressPercentage);
						});


			}
		}
	}
})();
