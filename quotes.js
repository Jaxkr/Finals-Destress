var quotes = [
  {'quote': "As long as you think your past is bad you must be improving.", 'author': 'Louis C.K.'},
  {'quote': "The best preparation for tomorrow is doing your best today.", 'author': 'H. Jackson Brown, Jr.'},
  {'quote': "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", 'author': 'Helen Keller'},
  {'quote': "We must let go of the life we have planned, so as to accept the one that is waiting for us.", 'author': 'Joseph Campbell'},
  {'quote': "Keep your face always toward the sunshine - and shadows will fall behind you.", 'author': 'Walt Whitman'},
  {'quote': "Happiness is not something you postpone for the future; it is something you design for the present.", 'author': 'Jim Rohn'},
  {'quote': "Nothing is impossible, the word itself says 'I'm possible'!", 'author': 'Audrey Hepburn'},
  {'quote': "What we think, we become.", 'author': 'Buddha'},
  {'quote': "Believe you can and you're halfway there.", 'author': 'Theodore Roosevelt'},
  {'quote': "No act of kindness, no matter how small, is ever wasted.", 'author': 'Aesop'},
  {'quote': "Sometimes by losing a battle you find a new way to win the war.", 'author': 'Donald Trump'},
  {'quote': "Without passion you don't have energy, without energy you have nothing.", 'author': 'Donald Trump'},
  {'quote': "We should make a major financial commitment to improving our roads and bridges.", 'author': 'Bernie Sanders'},
  {'quote': "You have to be odd to be number one.", 'author': 'Dr. Seuss'},
  {'quote': "The pessimist looks down, and hits his head. The optimist looks up, and loses his footing. The realist looks forward, and adjusts his path accordingly.", 'author': 'King Ezekiel'},
  {'quote': "Always do your best. What you plant now, you will harvest later.", 'author': 'Og Mandino'},
  {'quote': "It always seems impossible until it's done.", 'author': 'Nelson Mandela'},
  {'quote': "If you can dream it, you can do it.", 'author': 'Walt Disney'},
  {'quote': "If you’re trying your best no one can ask anything else of you.", 'author': 'Diana Broestl'},
  {'quote': "Never, never, never give up.", 'author': 'Winston Churchill'},
  {'quote': "If you're going through hell, keep going.", 'author': 'Winston Churchill'},
  {'quote': "Even if you fall on your face, you're still moving forward.", 'author': 'Victor Kiam'},
  {'quote': "A ship is safe in harbor, but that's not what ships are for.", 'author': 'William Shedd'},
  {'quote': "Be the person your dog thinks you are.", 'author': 'J.W. Stephens'},
  {'quote': "Not all those who wander are lost.", 'author': 'J.R.R. Tolkien'},
  {'quote': "How Can Mirrors Be Real If Our Eyes Aren't Real", 'author': 'Jaden Smith'},
  {'quote': "Worrying is like paying interest on a debt you may never owe.", 'author': 'Unknown'},
  {'quote': "You don't set out to build a wall. You don't say 'I'm going to build the biggest, baddest, greatest wall that's ever been built.' You don't start there. You say, 'I'm going to lay this brick as perfectly as a brick can be laid. You do that every single day. And soon you have a wall.", 'author': 'Will Smith'},
  {'quote': "There are two rules to success: <ol><li>Never tell everyone everything you know.</li><ol>", 'author': 'Roger H.Lincoln'},




];


function showQuote() {
  var quote_choice = quotes[getRandomInt(0, quotes.length - 1)];
  $('#quotebox').fadeOut('fast', function() {
    $('#quote').html(quote_choice.quote);
    $('#quoteauthor').html(quote_choice.author);
    $('#quotebox').fadeIn('fast');
  });

}


setInterval(showQuote, 10000);
