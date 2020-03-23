const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
	if (!showMenu) {
		hamburger.classList.add('open');
		nav.classList.add('open');
		menuNav.classList.add('open');
		navItems.forEach(item => item.classList.add('open'));

		showMenu = true;
	} else {
		hamburger.classList.remove('open');
		nav.classList.remove('open');
		menuNav.classList.remove('open');
		navItems.forEach(item => item.classList.remove('open'));

		showMenu = false;
	}
}

/* *********************************************
                Side Nav Bar 
********************************************** */
const orders = document.querySelector('.orders');
const items = document.querySelector('.items');
const itemDetails = document.querySelector('.item-details');
const cardOrder = document.querySelectorAll('.card-order');
const cardItem = document.querySelectorAll('.card-item');
const sideNavOrders = document.querySelector('.nav-orders');
const sideNavItems = document.querySelector('.nav-items');
const sideNavItem = document.querySelector('.nav-item');

let showSection,
	showNav = null;

cardOrder.forEach(order =>
	order.addEventListener('click', () => {
		orders.classList.remove('show-section');
		items.classList.add('show-section');
		sideNavOrders.classList.add('show-nav');

		console.log('card order ');
	})
);

cardItem.forEach(item =>
	item.addEventListener('click', () => {
		orders.classList.remove('show-section');
		items.classList.remove('show-section');
		itemDetails.classList.remove('scrollbar');
		itemDetails.classList.add('show-section');
		sideNavOrders.classList.add('show-nav');
		sideNavItems.classList.add('show-nav');

		console.log('card item ');
	})
);

if (sideNavOrders) {
	sideNavOrders.addEventListener('click', () => {
		orders.classList.add('show-section');
		items.classList.remove('show-section');
		itemDetails.classList.remove('show-section');
		sideNavOrders.classList.remove('show-nav');
		sideNavItems.classList.add('show-nav');

		console.log('Side nav orders ');
	});
}
/* 
sideNavItems.addEventListener('click', () => {
	orders.classList.remove('show-section');
	items.classList.add('show-section');
	itemDetails.classList.remove('show-section');
	sideNavOrders.classList.add('show-nav');
	sideNavItems.classList.remove('show-nav');

	console.log('Side nav items ');
}); */

/* ************************************
      Upload Pics
******************************************/
const realFileBtn = document.getElementById('avatar');
const customBtn = document.getElementById('btn-pics');
const previewImg = document.querySelector('.preview-img');
const selectedImg = previewImg.querySelector('.selected-img');

customBtn.addEventListener('click', function() {
	realFileBtn.click();
});

realFileBtn.addEventListener('change', function() {
	const image = this.files[0];

	if (image) {
		const reader = new FileReader();

		selectedImg.style.display = 'inline-block';

		reader.addEventListener('load', function() {
			selectedImg.setAttribute('src', this.result);
		});

		reader.readAsDataURL(image);
	} else {
		selectedImg.style.display = null;
	}
});
