WebFont.load({
  google: {
    families: ['Open Sans:400,700', 'Open Sans Condensed:300,700', 'Zilla Slab:400,700']
  }
});

var consulta = window.matchMedia('(max-width: 760px)');
    consulta.addListener(mediaQuery);
    var $burguerButton = document.getElementById('mobile-menu'),
    $burguerIcon = document.querySelector("#mobile-menu i");
    var $menu = document.getElementById('menu-secondary-1');
    function toggleMenu(){
      $menu.classList.toggle('active');
      $burguerIcon.classList.toggle('fa-bars');
      $burguerIcon.classList.toggle('fa-times');
    };
    function showMenu(){
      $menu.classList.add('active');
      $burguerIcon.classList.remove('fa-bars');
      $burguerIcon.classList.add('fa-times');
    };
    function hideMenu(){
      $menu.classList.remove('active');
      $burguerIcon.classList.remove('fa-times');
      $burguerIcon.classList.add('fa-bars');
    };
    function mediaQuery() {
      if (consulta.matches) {
        // Gestos touch
       var $body = document.body;
       var gestos = new Hammer($body);
       gestos.on('swipeleft', hideMenu);
       gestos.on('swiperight', showMenu);

        $burguerButton.addEventListener('touchstart', toggleMenu);
      } else {
        $burguerButton.removeEventListener('touchstart', toggleMenu);
        // si no se cumple hagamos esto

      }
    }
    mediaQuery();



/*Be Lazy*/
// lazy loading
    var bLazy = new Blazy({
        selector: 'img',
        error: function(ele, msg){
          console.log(msg);
      }
    });
