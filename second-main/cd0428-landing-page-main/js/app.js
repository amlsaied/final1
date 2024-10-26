

/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */




/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */



// Get the navigation list element
let ul = document.getElementById("navbar__list");

// Create an array of items for the navigation
const items = [{
        text: "Section 1"
        , href: "#section1"
    }
    , {
        text: "Section 2"
        , href: "#section2"
    }
    , {
        text: "Section 3"
        , href: "#section3"
    }
    , {
        text: "Section 4"
        , href: "#section4"
    }
];

// Loop through the items array to create navigation links
items.forEach(item => {
    // Create list item and anchor elements
    let li = document.createElement("li");
    let a = document.createElement("a");

    // Set properties for the anchor element
    a.textContent = item.text;
    a.href = item.href;
    a.className = "menu__link"; // Use property assignment for class name

    // Append the anchor to the list item and the list item to the navigation
    li.appendChild(a);
    ul.appendChild(li);
});

/**
 * End Global Variables
 * Start Helper Functions
 */



// Resize function (currently empty, add your implementation)
function resize() {
    // Placeholder for resizing logic
}

// Set up Intersection Observer for sections
const sections = document.querySelectorAll('section');
const options = {
    root: null
    , threshold: 0.5
    , rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("inverse"); // Add class when in view
        } else {
            entry.target.classList.remove("inverse"); // Remove class when out of view
        }
    });
}, options);

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});

function smoothScrollToSection(target, duration) {
    var targetElement = document.querySelector(target); // اختيار القسم المستهدف
    if (!targetElement) {
        console.error("الهدف غير موجود: " + target);
        return; // إذا لم يكن الهدف موجودًا، أوقف تنفيذ الدالة
    }

    var targetPosition = targetElement.getBoundingClientRect().top + window.scrollY; // الحصول على موضع العنصر بالنسبة للصفحة
    var startPosition = window.scrollY; // موضع التمرير الحالي
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime; // ضبط الوقت الابتدائي
        var timeElapsed = currentTime - startTime; // حساب الوقت المنقضي
        var distance1 = targetPosition - startPosition;
        var run = ease(timeElapsed, startPosition, distance1, duration); // حساب الحركة
        window.scrollTo(0, run); // scroll aplay
        if (timeElapsed < duration) requestAnimationFrame(animation); // الاستمرار في التمرير
    }

    function ease(t, b, c, d) { // دالة الحركة
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation); // بدء التحريك
}

// استدعاء الدالة مع تحديد القسم المستهدف ومدة التمرير (مثلاً "#section1" و 1000 مللي ثانية)
var sectionClicks = document.querySelectorAll("section");

// إضافة حدث النقر لكل قسم
sectionClicks.forEach((section, index) => {
    section.addEventListener("click", () => {
        // تمرير سلس للقسم عند النقر
        smoothScrollToSection(`section:nth-of-type(${index + 1})`, 1000); // استخدم `nth-of-type` لتحديد القسم
    });
});

var navLinks = document.querySelectorAll(".menu__link");

// إضافة حدث النقر لكل رابط
navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); // منع السلوك الافتراضي للرابط
        var target = link.getAttribute("href"); // الحصول على الـ href الخاص بالرابط
        smoothScrollToSection(target, 1500); // تمرير سلس إلى القسم المستهدف
    });
});


let sectiones = document.querySelectorAll("section");
let menu__link = document.querySelectorAll(".menu__link");

window.onscroll = () => {
  sectiones.forEach(section => { // تصحيح شكل السهم هنا
    let top = window.scrollY;
    let offset = section.offsetTop-150; // الحصول على offsetTop لكل قسم
    let height = section.offsetHeight; // الحصول على ارتفاع كل قسم
    let id= section.getAttribute("id")
    if (top>offset&&top<offset+height) {menu__link.forEach(
      links=>{
        links.classList.remove("active")
        document.querySelector('header nav a[href*='+id+']').classList.add('active')

      }
    )
      
    }

    // يمكنك إضافة كود إضافي هنا لتفعيل التمييز أو التنقل حسب الشرط الذي تريده
  });
};

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
