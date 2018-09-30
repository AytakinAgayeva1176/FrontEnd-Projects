
$('#container').imagesLoaded( function() {

    $('.portfolio-btn').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
             filter: filterValue
      });
      });
    
      var $grid = $('.grid').isotope({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          // use element for option
          columnWidth: '.grid-item'
        }
      })

    // images have loaded
  });

