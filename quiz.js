$("#start").click(function() {
  $("#splash").fadeOut(function() {
    displayQuizQuestion(0);
    $('#quiz').fadeIn();
  });



});


var questions = [
  {'question': 'Out of these, which is your favorite?', 'options': ['Animals', 'Landscapes']},
  {'question': "What's your favorite animal?", 'options': ['Birds', 'Cats', 'Dogs', 'Fishes']},
  {'question': "Where do you like to be?", 'options': ['Beaches', 'Cities', 'Islands', 'Mountains', 'Rainy places', 'Rivers']},

  {'question': "Are you feeling stressed or anxious?", 'options': ['Yes', 'No']},
  {'question': "Really? You're not stressed at all?", 'options': ["Yes, I'm not stressed at all.", "No."]}, //4
  {'question': "Then I'm not really sure what you're doing here. You're sure you're not completely relaxed?", 'options': ["OK, maybe I'm a little tense."]},

  {'question': "Let's do some relaxation exercises.<br>Would you like some nice rain noise? (strongly recommended)", 'options': ["<i class='fa fa-headphones' aria-hidden='true'></i> Yes, please.", "What are the other options?"]},//6
  {'question': "How about some regular old noise? What kind would you like?<p style='font-size: 12px;'>White noise is the highest pitched, brown noise is the lowest pitched.</p>", 'options': ["White noise", "Pink noise", "Brown noise", "I prefer silence."]},//7
  {'question': "Really? No noise for you? How about some <a href='https://www.youtube.com/watch?v=p_5yt5IX38I' target='_blank'>Mongolian throat singing</a>?", 'options': ["I'm good."]},//8

  {'question': "How about some breathing exercises that are scientifically proven to reduce stress?", 'options': ["Sounds great!", "Sorry, I'm already a professional breather."]},

  {'question': "Even a pro sometimes forget to take deep breaths from time to time...", 'options': ["Alright, I'll try it"]},
  {'question': "Follow along with the activity below:<br><iframe style='width: 100%; border: none; height: 450px;' src='http://www.xhalr.com/'></iframe><p>Do this as long as you need to. Focus on your breathing and the silence / background noise you selected.", 'options': ["I'm done."]},
  {'question': "We hope you enjoyed this website and are now feeling more relaxed. Feel free to leave this tab open to continue enjoying the sounds. Good luck with your finals!", 'options': ["Return to main page"]},

];


function displayQuizQuestion(number) {

  var question = questions[number];

  $('#quiz-question').html(question['question']);

  $('#quiz-options').html('');

  var quiz_options_string = '';
  for (var i = 0; i < question['options'].length; i++) {
    quiz_options_string += '<button style="font-size: 22px;" data-question="' + number + '" data-option="' + question['options'][i] + '" class="quiz-option btn btn-block btn-default">';
    quiz_options_string += question['options'][i];
    quiz_options_string += '</button>';
  }

  $('#quiz-options').html(quiz_options_string);

}


$('body').on('click', 'button.quiz-option', function() {
  $('#quiz').fadeOut(function() {
    if (question_number != 12)
      $('#quiz').fadeIn();
    processQuizResponse(question_number, option);
  });
  var option = $(this).data('option');
  var question_number = $(this).data('question');

});





function processQuizResponse(number, response) {
  if (number == 0) {
    switch (response) {
      case "Animals":
        displayQuizQuestion(1);
        break;
      case "Landscapes":
        displayQuizQuestion(2);
        break;
    }
  }
  else if (number == 1) {
    switch (response) {
      case "Fishes":
        PHOTOS_POOL = fish_photos;
        break;
      case "Dogs":
        PHOTOS_POOL = dog_photos;
        break;
      case "Cats":
        PHOTOS_POOL = cat_photos;
        break;
      case "Birds":
        PHOTOS_POOL = bird_photos;
        break;
    }
    setInterval(setWallpaper, 20000);
    setWallpaper();
    displayQuizQuestion(3);

  }
  else if (number == 2) {
    console.log(response);
    switch (response) {
      case "Beaches":
        PHOTOS_POOL = beach_photos;
        break;
      case "Cities":
        PHOTOS_POOL = city_photos;
        break;
      case "Islands":
        PHOTOS_POOL = island_photos;
        break;
      case "Rainy places":
        PHOTOS_POOL = rain_photos;
        break;
      case "Mountains":
        PHOTOS_POOL = mountain_photos;
        break;
      case "Rivers":
        PHOTOS_POOL = river_photos;
        break;
    }
    setInterval(setWallpaper, 20000);
    setWallpaper();
    displayQuizQuestion(3);
  }
  else if (number == 3) {
    switch (response) {
      case "Yes":
        displayQuizQuestion(6);
        break;
      case "No":
        displayQuizQuestion(4);
        break;
    }
  }
  else if (number == 4) {
    switch (response) {
      case "Yes, I'm not stressed at all.":
        displayQuizQuestion(5);
        break;
      case "No":
        displayQuizQuestion(6);
        break;
    }
  }
  else if (number == 5) {
    displayQuizQuestion(6);
  }

  else if (number == 6) {
    switch (response) {
      case "<i class='fa fa-headphones' aria-hidden='true'></i> Yes, please.":
        createRainymoodIframe();
        displayQuizQuestion(9);
        break;
      case "What are the other options?":
        displayQuizQuestion(7);
        break;
    }
  }
  else if (number == 7) {
    switch (response) {
      case "White noise":
        createWhitenoiseIframe('white');
        displayQuizQuestion(9);
        break;
      case "Pink noise":
        createWhitenoiseIframe('pink');
        displayQuizQuestion(9);
        break;
      case "Brown noise":
        createWhitenoiseIframe('brown');
        displayQuizQuestion(9);
        break;
      case "I prefer silence.":
        displayQuizQuestion(8);
        break;
    }
  }
  else if (number == 8) {
    displayQuizQuestion(9);
  }
  else if (number == 9) {
    switch (response) {
      case "Sounds great!":
        displayQuizQuestion(11);
        break;
      default:
        displayQuizQuestion(10)
    }
  }
  else if (number == 10) {
    displayQuizQuestion(11);
  }
  else if (number == 11) {
    displayQuizQuestion(12);
  }
  else if (number == 12) {
    $('#splash').fadeIn('slow');
  }

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setWallpaper() {
  var roll = getRandomInt(0, PHOTOS_POOL.length - 1);
  console.log(roll);
  console.log(PHOTOS_POOL);
  console.log(PHOTOS_POOL[roll]);
  var url = 'images/' + PHOTOS_POOL[roll];

  $('#background').fadeOut('slow', function() {
    $('#background').css("background", "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('" + url + "')");
    $('#background').css("background-size", "cover");
    setTimeout(function() {
      $('#background').fadeIn('slow');
    }, 200)
  })
}

function createRainymoodIframe() {
  var iframe = document.createElement('iframe');
  iframe.setAttribute('style', 'display: none;');
  iframe.setAttribute('id', 'rainy');
  iframe.src = "https://rainymood.com/";
  document.body.appendChild(iframe);

  $('#killsound').fadeIn();
}

function createWhitenoiseIframe(color) {
  var iframe = document.createElement('iframe');
  iframe.setAttribute('style', 'display: none;');
  iframe.setAttribute('id', 'white');
  switch(color) {
    case "brown":
      iframe.src = "https://playnoise.com/snd/brown_noise.mp3";
      break;
    case "white":
      iframe.src = "https://playnoise.com/snd/grey_noise.mp3";
      break;
    case "pink":
      iframe.src = "https://playnoise.com/snd/pink_noise.mp3";
      break;
  }
  document.body.appendChild(iframe);
  $('#killsound').fadeIn();
}



var fish_photos = ['Animals/Fishes/1.jpg', 'Animals/Fishes/2.jpg', 'Animals/Fishes/3.jpg', 'Animals/Fishes/6.jpg', 'Animals/Fishes/7.jpg', 'Animals/Fishes/10.jpg', 'Animals/Fishes/8.jpg'];
var dog_photos = ['Animals/Dogs/1.jpg', 'Animals/Dogs/2.jpeg', 'Animals/Dogs/3.jpg', 'Animals/Dogs/4.jpg', 'Animals/Dogs/5.jpg', 'Animals/Dogs/6.jpg', 'Animals/Dogs/7.jpg', 'Animals/Dogs/8.jpg', 'Animals/Dogs/9.jpg', 'Animals/Dogs/10.jpg', 'Animals/Dogs/11.jpg'];
var cat_photos = ['Animals/Cats/1.jpg', 'Animals/Cats/2.jpg', 'Animals/Cats/3.jpg', 'Animals/Cats/4.jpg', 'Animals/Cats/5.jpg',  'Animals/Cats/7.jpg', 'Animals/Cats/8.jpg', 'Animals/Cats/9.jpg'];
var bird_photos = ['Animals/Birds/1.jpg', 'Animals/Birds/2.jpg', 'Animals/Birds/3.jpg', 'Animals/Birds/4.jpg', 'Animals/Birds/5.jpg', 'Animals/Birds/6.jpg', 'Animals/Birds/7.jpg', 'Animals/Birds/8.jpg', 'Animals/Birds/9.jpg', 'Animals/Birds/10.jpg', 'Animals/Birds/11.jpg', ]


var beach_photos = ['Landscapes/Beaches/1.jpg', 'Landscapes/Beaches/2.jpg', 'Landscapes/Beaches/3.jpg', 'Landscapes/Beaches/4.jpg', 'Landscapes/Beaches/5.jpg', 'Landscapes/Beaches/6.jpg', 'Landscapes/Beaches/7.jpg', 'Landscapes/Beaches/8.jpg', 'Landscapes/Beaches/9.jpg', 'Landscapes/Beaches/10.jpg', ]
var city_photos = ['Landscapes/City/1.jpg', 'Landscapes/City/2.jpg', 'Landscapes/City/3.jpg', 'Landscapes/City/4.jpg', 'Landscapes/City/5.jpg', 'Landscapes/City/6.jpg', 'Landscapes/City/7.jpg', 'Landscapes/City/8.jpg', 'Landscapes/City/9.jpg', 'Landscapes/City/10.jpg', ]
var island_photos = ['Landscapes/Islands/1.jpg', 'Landscapes/Islands/2.jpg', 'Landscapes/Islands/3.jpg', 'Landscapes/Islands/4.jpg', 'Landscapes/Islands/5.jpg', 'Landscapes/Islands/6.jpg', 'Landscapes/Islands/7.jpg', 'Landscapes/Islands/8.jpg',]
var mountain_photos = ['Landscapes/Mountains/1.jpg', 'Landscapes/Mountains/2.jpg', 'Landscapes/Mountains/3.jpg', 'Landscapes/Mountains/4.jpg', 'Landscapes/Mountains/5.jpg', 'Landscapes/Mountains/6.jpg', 'Landscapes/Mountains/7.jpg', 'Landscapes/Mountains/8.jpg', 'Landscapes/Mountains/9.jpg', 'Landscapes/Mountains/10.jpg', ]
var rain_photos = ['Landscapes/Rain/1.jpg', 'Landscapes/Rain/2.jpg', 'Landscapes/Rain/3.jpg', 'Landscapes/Rain/4.jpg', 'Landscapes/Rain/5.jpg', 'Landscapes/Rain/6.jpg', 'Landscapes/Rain/7.jpg', 'Landscapes/Rain/8.jpg']
var river_photos = ['Landscapes/Rivers/1.jpg', 'Landscapes/Rivers/2.jpg', 'Landscapes/Rivers/3.jpg', 'Landscapes/Rivers/4.jpg', 'Landscapes/Rivers/5.jpg', 'Landscapes/Rivers/6.jpg', 'Landscapes/Rivers/7.jpg', 'Landscapes/Rivers/8.jpg', 'Landscapes/Rivers/9.jpg']

var PHOTOS_POOL = fish_photos;



$('#killsound').click(function() {
  $('#white').remove();
  $('#rainy').remove();
  $(this).fadeOut();
});
