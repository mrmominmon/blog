// Back  to Top button
document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});



// Add interactivity if needed, such as dynamic tag highlighting
document.addEventListener("DOMContentLoaded", () => {
    const tag = document.querySelector(".tag");
    if (tag) {
        tag.addEventListener("mouseover", () => {
            tag.style.backgroundColor = "#007BFF";
            tag.style.color = "#fff";
        });
        tag.addEventListener("mouseout", () => {
            tag.style.backgroundColor = "#E0F7FA";
            tag.style.color = "#007BFF";
        });
    }
});

// 
document.addEventListener("DOMContentLoaded", () => {
    const viewAllBtn = document.querySelector(".view-all-btn");
    viewAllBtn.addEventListener("click", () => {
        alert("Redirecting to all articles...");
    });
});


//
document.addEventListener("DOMContentLoaded", () => {
    const joinNowButton = document.getElementById("join-now-btn");
    const emailInput = document.getElementById("email-input");

    joinNowButton.addEventListener("click", () => {
        const email = emailInput.value.trim();
        if (email) {
            alert(`Thank you for joining! We've received your email: ${email}`);
        } else {
            alert("Please enter a valid email address.");
        }
    });
});


// Contact page start form here 
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Your message has been sent!');
});



//about page
document.querySelector(".subscribe-btn").addEventListener("click", function () {
    alert("Thank you for subscribing!");
});


//signin page
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Login Successful!");
});


// for singup page
document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Here you can add code to send the data to a server
    console.log('Full Name:', fullname);
    console.log('Email:', email);
    console.log('Password:', password);

    alert('Sign up successful!');
});


//services page
let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.style.display = i === slideIndex ? 'block' : 'none';
    });
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

showSlide(slideIndex);




let index = 0;
const cards = document.querySelectorAll('.card');
const dots = document.querySelectorAll('.dot');
document.getElementById('next').addEventListener('click', () => {
    cards[index].style.display = 'none';
    dots[index].classList.remove('active');
    index = (index + 1) % cards.length;
    cards[index].style.display = 'block';
    dots[index].classList.add('active');
});
document.getElementById('prev').addEventListener('click', () => {
    cards[index].style.display = 'none';
    dots[index].classList.remove('active');
    index = (index - 1 + cards.length) % cards.length;
    cards[index].style.display = 'block';
    dots[index].classList.add('active');
});




document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    if (firstName === "" || lastName === "" || email === "" || phone === "" || message === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
    }
});


