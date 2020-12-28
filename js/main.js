// $(document).on('click', 'ul li', function () {
// 	$(this).addClass('active').siblings().removeClass('active')
// });

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
	const scrollY = window.pageYOffset

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 10;
		sectionId = current.getAttribute('id')

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document.querySelector('a[href*=' + sectionId + ']').classList.add('active')
		} else {
			document.querySelector('a[href*=' + sectionId + ']').classList.remove('active')
		}
	})
}