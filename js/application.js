
$(document).ready(function() {
  $("#create_quest2").css("visibility", "hidden");
  
  function cargarDiv(div,url){
        $(div).load(url);
  }
  cargarDiv("#finish_survey","_finish_survey.erb");

  function cargarDiv2(div,url){
        $(div).load(url);
  }
  cargarDiv2("#all_users_surveys","_all_users_surveys.erb");
 

  $("#create_question").on("submit", function(event){
    event.preventDefault();
    console.log("hola en quora 7");
    
    var userInput = $(this).serialize(); 
    console.log(userInput);
    $.post("/create_question", userInput, function(data) {
      $("#answer").html(data);
      $("#create_quest2").css("visibility", "hidden");
      $("#tip").remove();
      $("#create_question").remove();
    });
    
  });//end of #create_question

  $("#create_answer").on("submit", function(event){
    event.preventDefault();
    console.log("En create answer");
    
    var userInputAns = $(this).serialize(); 
    console.log(userInputAns);
    $.post("/create_answer", userInputAns, function(data) {
      $("#answer").html(data);
      $("#create_quest2").css("visibility", "hidden");
      console.log("entré al post de answer");   
    });
  });//end of #create_answer

  $(".link_create_quest2").on("click",function(event){
    event.preventDefault();
    console.log("Le di click al boton de Done with queston");
    $("#create_quest2").css("visibility", "visible");
    $("#create_answer").css("visibility", "hidden");
    $(this).css("visibility", "hidden");
  });//end of .link_create_quest2

  $("#create_quest2").on("submit", function(event){
    event.preventDefault();
    console.log("Estoy en el segundo formulario de la pregunta");
    var userInputQuest = $(this).serialize(); 
    console.log(userInputQuest);
    $.post("/create_question", userInputQuest, function(data) {
      $("#answer").html(data);
      console.log("en  create question del segundo formulario");
      $(this).css("visibility", "hidden");
      $("#create_answer").css("visibility", "visible");
      $(".link_create_quest2").css("visibility", "visible");
    });
  });//end of #create_quest2



}); 






// .on ("submit", function(){}, );

// $(document).ready(function() {
//   function cargarDiv(div,url)
// {
//       $(div).load(url);
// }
// cargarDiv("#contenido","_prueba.erb");
// });
