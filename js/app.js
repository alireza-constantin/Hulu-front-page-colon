const liveSports = document.querySelector('.live-sports');
const mediaQuery = window.matchMedia('(max-width: 768px)');

const sportLive = document.getElementById('live-sport');
const breakingNews = document.getElementById('breaking-news');
const bigEvent = document.getElementById('biggest-events');

const liveNav = document.querySelector('#live-sports .nav');
const container = document.querySelector('.live-sports .container');

const sportBtn = document.getElementById('sports-btn');
const newsBtn = document.getElementById('news-btn');
const eventBtn = document.getElementById('events-btn');

const modal = document.querySelector('.modal');
const loginBtn = document.querySelector('.login-btn');
const closeBtn = document.querySelector('.close');

function hideElement(el) {
	el.style.display = 'none';
}

function hideBorder(el) {
	el.classList.remove('selected');
}

function hideAll(el, borderEl) {
	hideElement(el);
	hideBorder(borderEl);
}

function showElement(el) {
	el.style.display = 'block';
}

function showBorder(el) {
	el.classList.add('selected');
}

function showAll(el, borderEl) {
	showElement(el);
	showBorder(borderEl);
}

function displayEL(showEl) {
	if (showEl === sportLive) {
		hideAll(breakingNews, newsBtn);
		hideAll(bigEvent, eventBtn);
		showAll(sportLive, sportBtn);
	} else if (showEl === bigEvent) {
		hideAll(breakingNews, newsBtn);
		hideAll(sportLive, sportBtn);
		showAll(bigEvent, eventBtn);
	} else if (showEl === breakingNews) {
		hideAll(sportLive, sportBtn);
		hideAll(bigEvent, eventBtn);
		showAll(breakingNews, newsBtn);
	}
	setTimeout(() => {
		container.style.animation = '';
		liveSports.style.animation = '';
	}, 10);
}

liveNav.addEventListener('click', (event) => {
	container.style.animation = 'none';
	liveSports.style.animation = 'none';
	if (event.target.id === 'news-btn') {
		displayEL(breakingNews);
		if (mediaQuery.matches) {
			liveSports.style.background =
				"url('/img/breaking-news-small.jpg') no-repeat center center / cover";
		} else {
			liveSports.style.background =
				"url('/img/breaking-news.full.jpg') no-repeat center center / cover";
		}
	} else if (event.target.id === 'events-btn') {
		displayEL(bigEvent);
		if (mediaQuery.matches) {
			liveSports.style.background =
				"url('/img/live-events.small.jpg') no-repeat center center / cover";
		} else {
			liveSports.style.background =
				"url('/img/live-events-full.jpg') no-repeat center center / cover";
		}
	} else if (event.target.id === 'sports-btn') {
		displayEL(sportLive);
		if (mediaQuery.matches) {
			liveSports.style.background =
				"url('/img/live-sports-small.jpg') no-repeat center center / cover";
		} else {
			liveSports.style.background =
				"url('/img/live-sports.jpg') no-repeat center center / cover";
		}
	}
});

closeBtn.addEventListener('click', () => {
	modal.style.display = 'none';
});

loginBtn.addEventListener('click', () => {
	modal.style.display = 'block';
});

window.addEventListener('click', (e) => {
	if (e.target == modal) {
		modal.style.display = 'none';
	}
});
