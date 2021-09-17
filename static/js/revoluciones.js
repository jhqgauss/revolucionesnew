$(function() {
  $(".clickable-row").click(function() {
    window.location = $(this).data("href");
  });

  var form_idx = $('#my_id_image-form-TOTAL_FORMS').val();
  form_idx++

  $('#add-formset').click(function() {
    form_idx = $('#my_id_image-form-TOTAL_FORMS').val();
 
    if( $('.formset-model-image_id').val() ) {
      image_form = $('.formset-model-image_id').html().replace(/__prefix__/g, form_idx)
      $('.formsets-image_id').append(image_form);
    }


    // deprecate later
    $('#formsets').append($('.old-formset-create').html().replace(/__prefix__/g, form_idx));

    // Management form
    $('#my_id_image-form-TOTAL_FORMS').val(parseInt(form_idx) + 1);
  });

  var myCarousel = document.querySelector('#myCarousel')
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000,
    wrap: false
  });
});