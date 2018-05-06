$(function () {
	let card = $('div').addClass('card');
	let frontFace = $('div').addClass('card__face--front');
	let backFace = $('div').addClass('card__face--back');
	card.append(frontFace);
	card.append(backFace);
	$('flex-container').append(card);
});