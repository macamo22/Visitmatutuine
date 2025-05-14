
// Função para abrir uma aba e aplicar marcação à aba principal ativa
function openTab(evt, tabName) {
    const tabs = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }

    const content = document.getElementById(tabName);
    if (content) {
        content.style.display = "block";
    }

    // Aplica 'active' apenas se o botão clicado for de aba principal
    if (evt.currentTarget.classList.contains("tab-button")) {
        const buttons = document.getElementsByClassName("tab-button");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }
        evt.currentTarget.classList.add("active");
    }
}

// Carrossel automático de imagens
document.addEventListener("DOMContentLoaded", function () {
    const slideContainer = document.querySelector(".carousel-slide");
    const slides = document.querySelectorAll(".carousel-item");
    let index = 0;

    function nextSlide() {
        index++;
        if (index >= slides.length) {
            index = 0; // Volta para a primeira imagem
        }
        slideContainer.style.transition = "transform 1s ease-in-out";
        slideContainer.style.transform = `translateX(-${index * 100}vw)`;
    }

    setInterval(nextSlide, 5000); // Troca a cada 5 segundos
});

// Menu suspenso das sub-abas
function toggleDropdownMenu(id) {
    const menus = document.querySelectorAll('.dropdown-content');
    menus.forEach(menu => {
        if (menu.id === id) {
            menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
        } else {
            menu.style.display = 'none';
        }
    });
}

// Fecha menus dropdown ao clicar fora
window.onclick = function(event) {
    if (!event.target.matches('.tab-button')) {
        document.querySelectorAll('.dropdown-content').forEach(menu => {
            menu.style.display = 'none';
        });
    }
};
function openTab(evt, tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.remove('active'));

  const target = document.getElementById(tabId);
  if (target) {
    target.classList.add('active');
  }

  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(btn => btn.classList.remove('active'));
  evt.currentTarget.classList.add('active');
}

