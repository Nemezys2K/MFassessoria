   //Carrosel imagemns
   const carousel = document.querySelector('.carousel');
   const images = carousel.getElementsByTagName('img');
      let currentIndex = 0;
      
      function showImage(index) {
          for (let i = 0; i < images.length; i++) {
            if (i === index) {
                  images[i].style.display = 'block';
                } else {
                  images[i].style.display = 'none';
              }
          }
      }

      function nextImage() {
          currentIndex = (currentIndex + 1) % images.length;
          showImage(currentIndex);
        }

        function prevImage() {
          currentIndex = (currentIndex - 1 + images.length) % images.length;
          showImage(currentIndex);
      }

      // Exibir a primeira imagem inicialmente
      showImage(currentIndex);

      // Adicionar eventos de clique para os botões anterior/próximo
      const prevButton = document.createElement('div');
      prevButton.className = 'prev';
      prevButton.textContent = '<';
      prevButton.addEventListener('click', prevImage);
      carousel.appendChild(prevButton);

      const nextButton = document.createElement('div');
      nextButton.className = 'next';
      nextButton.textContent = '>';
      nextButton.addEventListener('click', nextImage);
      carousel.appendChild(nextButton);

      //Carrosel Parceiros


$(".slider").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
});
