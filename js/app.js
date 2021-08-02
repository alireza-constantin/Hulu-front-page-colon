const sportLive = document.getElementById('live-sport');
const breakingNews = document.getElementById('breaking-news');
const bigEvent = document.getElementById('biggest-events');

const liveNav = document.querySelector('#live-sports .nav');
const container = document.querySelector('.live-sports .container');

const sportBtn = document.getElementById('sports-btn');
const newsBtn = document.getElementById('news-btn');
const eventBtn = document.getElementById('events-btn');

// newsBtn.addEventListener('click', () => {
// 	sportLive.style.display = 'none';
// 	breakingNews.style.display = 'block';
// });

function displayEL(hidEl1, hidEl2, hidBor1, hidBor2, showEl, showBor) {
	hidBor1.style.borderBottom = 'none';
	hidBor2.style.borderBottom = 'none';
	hidEl1.style.display = 'none';
	hidEl2.style.display = 'none';
	showEl.style.display = 'block';
	showBor.style.borderBottom = '6px solid #fff';
	container.style.animation = 'none';
	setTimeout(() => {
		container.style.animation = '';
	}, 10);
}

liveNav.addEventListener('click', (event) => {
	container.style.animation = 'none';
	if (event.target.id === 'news-btn') {
		displayEL(sportLive, bigEvent, sportBtn, eventBtn, breakingNews, newsBtn);
	} else if (event.target.id === 'events-btn') {
		displayEL(sportLive, breakingNews, sportBtn, newsBtn, bigEvent, eventBtn);
	} else if (event.target.id === 'sports-btn') {
		displayEL(bigEvent, breakingNews, eventBtn, newsBtn, sportLive, sportBtn);
	}
});
