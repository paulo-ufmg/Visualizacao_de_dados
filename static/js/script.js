
$(function() {
      // Sidebar toggle behavior
      $('#sidebarCollapse').on('click', function() {
        $('#sidebar, #content').toggleClass('active');
      });
     
      // Alterna as exibições de Gráfico1
      $(".graf1").on('click', function() {
        alert("cliquei option grafico");
      });
});

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    function showSection(id) {
      sections.forEach(section => {
        if (section.id === id) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    }

    navLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevenir o comportamento padrão da âncora
        const targetId = this.getAttribute('href').substring(1);
        showSection(targetId);
        window.history.pushState(null, '', `#${targetId}`); // Atualizar a URL sem recarregar a página
      });
  });

  // Mostrar a seção correta com base na âncora na URL ao carregar a página
  const currentHash = window.location.hash.substring(1);
  if (currentHash) {
    showSection(currentHash);
  } else {
    // Opcional: Mostrar a primeira seção por padrão ao carregar a página
    sections[0].classList.add('active');
  }



});
/*
//Alterna as exibições de Gráfico1
document.addEventListener('DOMContentLoaded', function () {
  alert(1)
  var buttons = document.querySelectorAll('input[name="options"]');
  console.log("opcoes",buttons)
  var contents = document.querySelectorAll('.content-div');
  console.log("divs",contents)

  buttons.forEach(function (button) {
      button.addEventListener('click', function () {
          alert(2)
          var selectedOption = this.id;
          alert(this.id)

          contents.forEach(function (content) {
              content.classList.remove('active');
          });
          document.getElementById('content' + selectedOption.slice(-1)).classList.add('active');
      });
  });
});
*/


  




