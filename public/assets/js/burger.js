$(document).ready(function() {

  // draggable and droppable effect
  $('.draggable').sortable({connectWith: '.droppable'});
  $('.droppable').sortable({
    receive: function(event, ui){

      let d = {
        burgerName: $(ui.item).find('span').text(),
        devoured: true,
        id: $(ui.item).find('span').attr('id')
      }

      ui.item.remove();

      
    }
  });

  // create burger
  $('#create-btn').on('click',function(){
    let $burgerInput = $('#burger-input');
    console.log($burgerInput);
    let input = $burgerInput.val();
    console.log(input);
    if(input) {
      console.log("test");
      $.post('/create/burger',{ burgerName: input, devoured: false}, function(data, status){
        location.reload();
      })
    }

  });


});