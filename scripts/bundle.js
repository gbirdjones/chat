(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

	var $user = $('#user');
	var $form = $('#form');
	var $chat = $('#chat');
	var $user = $('#user');
	var $chatBox = $('#chatBox');

	setInterval(function () {
		$.get('http://tiyfe.herokuapp.com/collections/chattycats', function (show) {
			$chatBox.html('');
			console.log(show.length);
			show.reverse();
			for (var i = 0; i < show.length; i++) {
				$chatBox.append('<div>' + show[i].user + ': ' + show[i].post + '</div>');
			}
		}, 'json');
	}, 2000);

	$form.submit(function (e) {
		e.preventDefault();
		var audio = new Audio('../audio/chatty.mp3');
		audio.play();
		var newPost = $chat.val();
		var userName = $user.val();
		console.log(newPost, userName);
		$.post('http://tiyfe.herokuapp.com/collections/chattycats', { post: newPost,
			user: userName }, function (result) {
			console.log('post saved', result);
			console.log(result._id);
			$chatBox.append('<div>' + userName + ': ' + result.post + '</div>');
		}, 'json');
	});
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map