'use strict';

$(document).ready(function() {
var $user = $('#user');
var $form = $('#form');
var $chat = $('#chat');
var $user = $('#user');
var $chatBox = $('#chatBox');
// var $purrify = $('#delete');



// var deleteAll = function(e) {
// 	e.forEach(function(record) {
// 			var url = 'http://tiyfe.herokuapp.com/collections/chattycats' + '/' + record._id
// 			console.log(url);
// 	$.ajax
// 	({
//     url: url,
//     method: 'DELETE'
// 	});
// });
// }


setInterval(function() {
$.get (
	'http://tiyfe.herokuapp.com/collections/chattycats',
	function(show) {
		$chatBox.html('');
		console.log(show.length);
			for(var i=0; i<show.length; i++) {
				$chatBox.append('<div>' + show[i].user + ': ' + show[i].post + '</div>');
			}
		},
		'json'
	)
	
}
	, 2000);


$form.submit(function(e) {
	e.preventDefault();
	var audio = new Audio('../audio/chatty.mp3');
	audio.play();
	var newPost = $chat.val();
	var userName = $user.val();
	$chat.val('');
	console.log(newPost, userName);
	$.post (
		'http://tiyfe.herokuapp.com/collections/chattycats',
		{post: newPost,
		user: userName},
		function(result) {
				console.log('post saved', result);
				console.log(result._id);
				$chatBox.append('<div>'+ userName + ': ' + result.post + '</div>');
			},
			'json'
		);
});


// $purrify.on('click', deleteAll);


});
