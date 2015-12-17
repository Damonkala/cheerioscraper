'use strict';

var cheerio = require('cheerio');
var request = require('request');

request.get('http://www.metacritic.com/game/pc/undertale/critic-reviews', function(err, res, html){


	var $ = cheerio.load(html);

	var $critic = $('ol[class="reviews critic_reviews"]')
	// var $critic = $('li[class="review critic_review"]')

	var reviews = [];
	$critic.each(function(index, element){
		var review = $(element).find('div[class="review_grade"]').children('div').text();
		reviews.push(review);
	})
	console.log("REVIEWS:", reviews)
	// console.log($critic)

	// console.log("CRITIC:", $.html($critic));










	// var $divs = $('#siteTable')

	// var titles = [];
	// $divs.each(function(i, element){
	// 	var title = $(element).find('a.title').text();
	// 	console.log(title);
	// 	titles.push(title);
	// })
	//
	// console.log(titles);
	// console.log($.html($divs));
	// var $rows = $('table').first().children('tr')
	// var table = $('table').first()
	//
	// var titles = [];
	// var links = [];
	// $rows.each(function(i, el){
	// 	var title = $(el).find('div').find('a').text();
	// 	var link = $(el).find('a[title="Download this torrent using magnet"]').attr('href');
	// 	links.push(link)
	// 	// titles.push(title);
	// });

	// console.log(titles);
	// console.log(links);


	// console.log($.html($rows));
	// console.log($.html($rows));


})
