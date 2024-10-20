/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== TESTIMONIAL SWIPER ===============*/
let testimonialSwiper = new Swiper(".testimonial-swiper", {
    spaceBetween: 30,
    loop: 'true',

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: 'true',

    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*CART/ 
/*=============== SHOW CART ===============*/
const cart = document.getElementById('cart'),
      cartShop = document.getElementById('cart-shop'),
      cartClose = document.getElementById('cart-close')

/*===== CART SHOW =====*/
/* Validate if constant exists */
if(cartShop){
    cartShop.addEventListener('click', () =>{
        cart.classList.add('show-cart')
    })
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if(cartClose){
    cartClose.addEventListener('click', () =>{
        cart.classList.remove('show-cart')
    })
}

// Initialize cart item count
let cartItemCount = 0;

// Get the cart count element
const cartCount = document.getElementById('cart-count');

// Get the cart container where items will be added
const cartItemsContainer = document.getElementById('cart-items');

// Get all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.products__button');

// Add event listeners to all buttons
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartItemCount++;
        updateCartCount();
        addItemToCart(button);
    });
});

// Function to update the cart count displayed next to the icon
function updateCartCount() {
    cartCount.textContent = cartItemCount;
}

// Function to add the selected product to the cart
function addItemToCart(button) {
    const productCard = button.closest('.products__card');
    const productTitle = productCard.querySelector('.products__title').textContent;
    const productPrice = productCard.querySelector('.products__price').textContent;
    const productImg = productCard.querySelector('.products__img').src;

    // Create the cart item element
    const cartArticle = document.createElement('article');
    cartArticle.classList.add('cart__card');
    cartArticle.innerHTML = `
        <div class="cart__box">
            <img src="${productImg}" alt="" class="cart__img">
        </div>
        <div class="cart__details">
            <h3 class="cart__title">${productTitle}</h3>
            <span class="cart__price">${productPrice}</span>
            <div class="cart__amount">
                <div class="cart__amount-content">
                    <span class="cart__amount-box">
                        <i class='bx bx-minus'></i>
                    </span>
                    <span class="cart__amount-number">1</span>
                    <span class="cart__amount-box">
                        <i class='bx bx-plus'></i>
                    </span>
                </div>
                <i class='bx bx-trash-alt cart__amount-trash'></i>
            </div>
        </div>
    `;

    // Add delete functionality to the trash icon
    const trashIcon = cartArticle.querySelector('.cart__amount-trash');
    trashIcon.addEventListener('click', () => {
        cartArticle.remove(); // Remove the item from the cart
        cartItemCount--;
        updateCartCount(); // Update the cart count after item removal
    });

    // Add the cart item to the cart container
    cartItemsContainer.appendChild(cartArticle);
}
document.addEventListener('DOMContentLoaded', () => {
    const checkoutBtn = document.getElementById('checkout-btn');
    const cartItems = document.getElementById('cart-items');
    const checkoutMessage = document.getElementById('checkout-message');
    const cartCount = document.getElementById('cart-count');

    // Event listener for checkout button
    checkoutBtn.addEventListener('click', () => {
        if (cartItems.children.length > 0) {
            // If cart has items, proceed to show thank you message
            checkoutMessage.style.display = 'block';
        } else {
            // If cart is empty, prevent checkout and show a prompt
            checkoutMessage.style.display = 'none';
            alert('Your cart is empty. Please add items to proceed.');
        }
    });

    // Example function to simulate adding items to cart
    function addItemToCart(item) {
        const newItem = document.createElement('div');
        newItem.textContent = item;
        cartItems.appendChild(newItem);

        // Update cart count
        cartCount.textContent = cartItems.children.length;
    }

    // Example: Adding items to the cart (You can use your logic here)
    // addItemToCart('Watch 1'); // Uncomment this line to add a test item
});
document.addEventListener('DOMContentLoaded', () => {
    const cart = document.getElementById('cart');
    const body = document.body;
    
    // Function to disable scroll on the body
    function disableBodyScroll() {
        body.style.overflow = 'hidden';
    }

    // Function to enable scroll on the body
    function enableBodyScroll() {
        body.style.overflow = 'auto';
    }

    // Add event listeners for when the mouse enters and leaves the cart
    cart.addEventListener('mouseenter', () => {
        disableBodyScroll(); // Disable page scroll when mouse is inside the cart
    });

    cart.addEventListener('mouseleave', () => {
        enableBodyScroll(); // Enable page scroll when mouse leaves the cart
    });
});


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
