document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) { // Pokazuje przycisk po przewinięciu 100 pikseli
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    backToTopButton.addEventListener('transitionend', function() {
        if (!backToTopButton.classList.contains('show')) {
            backToTopButton.style.visibility = 'hidden';
        }
    });

    const observer = new MutationObserver(function() {
        if (backToTopButton.classList.contains('show')) {
            backToTopButton.style.visibility = 'visible';
        }
    });

    observer.observe(backToTopButton, { attributes: true, attributeFilter: ['class'] });
});






document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const logo = document.querySelector('#logo');
    const initialHeaderHeight = 110; // Początkowa wysokość nagłówka w pikselach
    const shrinkFactor = 0.6; // Procent zmniejszenia (60%)

    function handleScroll() {
        const currentScrollY = window.scrollY;
        if (window.innerWidth > 600) {  // Sprawdzenie szerokości ekranu
            if (currentScrollY > 50) {
                header.style.height = `${initialHeaderHeight * shrinkFactor}px`;
                logo.style.width = `${17 * shrinkFactor}%`; // Zmniejszenie szerokości logo
            } else {
                header.style.height = `${initialHeaderHeight}px`;
                logo.style.width = '17%'; // Powrót do pierwotnej szerokości logo
            }
        } else {
            // Resetujemy style tylko na urządzeniach mobilnych
            header.style.height = `${initialHeaderHeight}px`;
            logo.style.width = '50%';
            logo.style.left = '0';
        }
    }

    // Pierwsze wywołanie funkcji, aby ustawić odpowiednie wartości przy załadowaniu strony
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Aktualizacja przy zmianie rozmiaru okna
});










document.addEventListener('DOMContentLoaded', function() {
    const closeButton = document.getElementById('close-button');
    const section = document.getElementById('cennik2');

    closeButton.addEventListener('click', function() {
        section.style.opacity = '0'; // Ustawia przezroczystość na 0
        section.addEventListener('transitionend', function() {
            section.style.display = 'none'; // Ukrywa element po zakończeniu przejścia
        }, { once: true });
    });
});

























document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav .dropdown-content a');
    const headerHeight = 110; // Wysokość nagłówka w pikselach

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const url = new URL(this.href);
            const targetId = url.hash.substring(1);
            const isSamePath = url.pathname === window.location.pathname;

            if (isSamePath) {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - headerHeight,
                        behavior: 'smooth'
                    });
                }
            } else {
                // Przenieś się do podstrony
                window.location.href = url.pathname + url.hash;
            }
        });
    });

    // Obsłuż przypadek, gdy strona jest ładowana z fragmentem w URL
    const initialHash = window.location.hash;
    if (initialHash) {
        const initialElement = document.getElementById(initialHash.substring(1));
        if (initialElement) {
            setTimeout(() => {
                window.scrollTo({
                    top: initialElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }, 100); // Małe opóźnienie, aby zapewnić, że element jest wczytany
        }
    }
});






















document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.overlaytla1 a');
    const headerHeight = 40; // Wysokość nagłówka w pikselach

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Obsłuż przypadek, gdy strona jest ładowana z fragmentem w URL
    const initialHash = window.location.hash;
    if (initialHash) {
        const initialElement = document.getElementById(initialHash.substring(1));
        if (initialElement) {
            setTimeout(() => {
                window.scrollTo({
                    top: initialElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }, 100); // Małe opóźnienie, aby zapewnić, że element jest wczytany
        }
    }
});



















document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Zapobiega domyślnemu wysłaniu formularza

    const formData = new FormData(this); // Pobiera dane formularza
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'send_email.php', true);

    xhr.onload = function() {
        const popupOverlay = document.getElementById('popupOverlay');
        const popupMessage = document.getElementById('popupMessage');
        const popupText = document.getElementById('popupText');
        
        if (xhr.status === 200) {
            popupText.innerHTML = '<p style="color: green;">Wiadomość została wysłana.</p>';
        } else {
            popupText.innerHTML = '<p style="color: red;">Błąd podczas wysyłania wiadomości.</p>';
        }

        popupOverlay.style.display = 'flex';
        popupMessage.style.display = 'flex';
    };

    xhr.onerror = function() {
        const popupOverlay = document.getElementById('popupOverlay');
        const popupMessage = document.getElementById('popupMessage');
        const popupText = document.getElementById('popupText');
        
        popupText.innerHTML = '<p style="color: red;">Błąd podczas nawiązywania połączenia.</p>';

        popupOverlay.style.display = 'flex';
        popupMessage.style.display = 'flex';
    };

    xhr.send(formData); // Wysyła dane formularza
});

document.getElementById('popupClose').addEventListener('click', function() {
    document.getElementById('popupOverlay').style.display = 'none';
    document.getElementById('popupMessage').style.display = 'none';
});












