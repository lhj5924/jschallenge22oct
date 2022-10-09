const quotes = [
  {quote : "The best way to predict your future is to create it." , author : "Abraham Lincoln",},
  {quote : "Live as if you were to die tomorrow. Learn as if you were to live forever." , author : "ahatma Gandhi",},
  {quote : "Living an experience, a particular fate, is accepting it fully." ,  author : "Albert Camus",},
  {quote : "Life is like riding a bicycle. To keep your balance, you must keep moving." , author : "Albert Einstein",},
  {quote : "If you want to live a happy life, tie it to a goal, not to people or things.",  author : "Albert Einstein",},
  {quote : "When you cease to dream you cease to live." , author : "Malcolm Forbes",},
  {quote : "Life shrinks or expands in proportion to one's courage." ,  author : "Anais Nin",},
  {quote : "In the long run, the sharpest weapon of all is a kind and gentle spirit." , author : "Anne Frank",},
  {quote : "Never take life seriously. Nobody gets out alive anyway." , author : "Anonymous",},
  {quote : "Don’t settle for what life gives you; make life better and build something." ,  author : "Ashton Kutcher",},
  {quote : "Life is short, and it is here to be lived." , author : "Kate Winslet ",},
  {quote : "Every strike brings me closer to the next home run." ,  author : "Babe Ruth",},
  {quote : "Never let the fear of striking out keep you from playing the game.",  author : "Babe Ruth",},
  {quote : "Life’s tragedy is that we get old too soon and wise too late." ,  author : "Benjamin Franklin",},
  {quote : "If you love life, don’t waste time, for time is what life is made up of." , author : "Bruce Lee",},
  {quote : "Be where you are; otherwise you will miss your life." , author : "Buddha",},
  {quote : "Life is ten percent what happens to you and ninety percent how you respond to it.", author : "Charles Swind",},
  {quote : "Life is really simple, but men insist on making it complicated." ,  author : "Confucius",},
  {quote : "The purpose of our lives is to be happy." , author : "Dalai Lama",},
  {quote : "As you know, life is an echo; we get what we give." , author : "David DeNotaris",},
  {quote : "The healthiest response to life is joy." ,  author : "Deepak Chopra",},
  {quote : "Your image isn’t your character. Character is what you are as a person." ,  author : "Derek Jeter",},
  {quote : "You’re only human. You live once and life is wonderful, so eat the damned red velvet cupcake." ,  author : "Emma Stone",},
  {quote : "If life were predictable it would cease to be life, and be without flavor." , author : "Eleanor Roosevelt",},
  {quote : "Live for each second without hesitation." , author : "Elton John",},
  {quote : "You only pass through this life once, you don't come back for an encore." , author : "Elvis Presley",},
  {quote : "If you can do what you do best and be happy, you're further along in life than most people." ,  author : "Leonardo DiCaprio",},
  {quote : "In order to write about life first you must live it.",  author : "Ernest Hemingway",},
  {quote : "The greatest pleasure of life is love." , author : "Euripides",},
  {quote : "My mama always said, life is like a box of chocolates. You never know what you're gonna get." , author : "Forrest Gump",},
  {quote : "The big lesson in life, baby, is never be scared of anyone or anything.", author : "Frank Sinatra",},
  {quote : "If we don’t change, we don’t grow. If we don’t grow, we aren’t really living." ,  author : "Gail Sheehy",},
  {quote : "Happy is the man who can make a living by his hobby." , author : "George Bernard Shaw",},
  {quote : "Nobody who ever gave his best regretted it." ,  author : "George Halas",},
  {quote : "Life is what we make it, always has been, always will be." ,  author : "Grandma Moses",},
  {quote : "Life doesn’t require that we be the best, only that we try our best." , author : "H. Jackson Brown Jr.",},
  {quote : "As my knowledge of things grew I felt more and more the delight of the world I was in." , author : "Helen Ke",},
  {quote : "Life is a succession of lessons which must be lived to be understood." ,  author : "Helen Keller",},
  {quote : "You must expect great things of yourself before you can do them." , author : "Michael Jordan",},
  {quote : "There are no mistakes, only opportunities." , author : "Tina Fey",},
  {quote : "Maybe that’s what life is… a wink of the eye and winking stars." ,  author : "Jack Kerouac",},
  {quote : "The minute that you’re not learning I believe you’re dead." , author : "Jack Nicholson",},
  {quote : "There are no regrets in life, just lessons." ,  author : "Jennifer Aniston",},
  {quote : "Be nice to people on the way up, because you may meet them on the way down." ,  author : "Jimmy Durante",},
  {quote : "Life is what happens when you're busy making other plans." ,  author : "John Lennon",},
  {quote : "I believe that nothing in life is unimportant every moment can be a beginning." , author : "John McLeod",},
  {quote : "Life’s tough, but it’s tougher when you’re stupid." , author : "John Wayne",},
  {quote : "Make each day your masterpiece." ,  author : "John Wooden",},
  {quote : "Life is about making an impact, not making an income." , author : "Kevin Kruse",},
  {quote : "I like criticism. It makes you strong." , author : "LeBron James",},
  {quote : "Too many of us are not living our dreams because we are living our fears." ,  author : "Les Brown",},
  {quote : "Life is like a coin. You can spend it any way you wish, but you only spend it once." ,  author : "Lillian Dic",},
  {quote : "Sometimes you can't see yourself clearly until you see yourself through the eyes of others." ,  author : "Elle",},
  {quote : "You only live once, but if you do it right, once is enough." ,  author : "Mae West",},
  {quote : "Keep smiling, because life is a beautiful thing and there’s so much to smile about." ,  author : "Marilyn Mon",},
  {quote : "Good friends, good books, and a sleepy conscience: this is the ideal life." , author : "Mark Twain",},
  {quote : "You can’t put a limit on anything. The more you dream, the farther you get." ,  author : "Michael Phelps",},
  {quote : "Find people who will make you better." ,  author : "Michelle Obama",},
  {quote : "The way I see it, if you want the rainbow, you gotta put up with the rain." , author : "Dolly Parton",},
  {quote : "Be happy for this moment. This moment is your life." ,  author : "Omar Khayyam",},
  {quote : "The more you praise and celebrate your life, the more there is in life to celebrate." , author : "Oprah Winf",},
  {quote : "Turn your wounds into wisdom." ,  author : "Oprah Winfrey",},
  {quote : "If you spend your whole life waiting for the storm, you'll never enjoy the sunshine." , author : "Morris West",},
  {quote : "Don't cry because it's over, smile because it happened." ,  author : "Dr. Seuss ",},
  {quote : "Live in the sunshine, swim the sea, drink the wild air." ,  author : "Ralph Waldo Emerson",},
  {quote : "All life is an experiment. The more experiments you make, the better." ,  author : "Ralph Waldo Emerson",},
  {quote : "The longer I live, the more beautiful life becomes." ,  author : "Frank Lloyd Wright",},
  {quote : "Not how long, but how well you have lived is the main thing." , author : "Seneca",},
  {quote : "Nothing is more honorable than a grateful heart." , author : "Seneca",},
  {quote : "I guess it comes down to a simple choice, really. Get busy living or get busy dying." , author : "Shawshank ",},
  {quote : "The unexamined life is not worth living." , author : "Socrates",},
  {quote : "Life is not a problem to be solved, but a reality to be experienced.",  author : "Soren Kierkegaard",},
  {quote : "Life would be tragic if it weren’t funny." ,  author : "Stephen Hawking",},
  {quote : "Get busy living or get busy dying." , author : "Stephen King",},
  {quote : "Happiness is the feeling that power increases" ,  author : "Friedrich Nietzsche",},
  {quote : "Today, you have 100% of your life left." ,  author : "Tom Landry (Football Quotes)",},
  {quote : "Life is a flower of which love is the honey." , author : "Victor Hugo",},
  {quote : "Life isn’t about waiting for the storm to pass, it’s about learning to dance in the rain." ,  author : "Vivia",},
  {quote : "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma", author : "Steve Jobs",},
  {quote : "Money and success don’t change people; they merely amplify what is already there." ,  author : "Will Smith",},
  {quote : "Keep calm and carry on." ,  author : "Winston Churchill",},
  

  {
    quote : "Success is No Accident.",
    author: "Pele",
  },
  {
    quote : "Success is Not Final, Failure is Not Fatal: it is the Courage to Continue that Counts",
    author: "Winston Churchill",
  },
  {
    quote : "Don’t Count the Days, Make the Days Count",
    author: "Muhammed Ali",
  },
  {
    quote : "He Who is Not Courageous Enough to Take Risks Will Accomplish Nothing in Life",
    author: "Muhammed Ali",
  },
  {
    quote : "Don’t Wait for Opportunity, Create it",
    author: "George Bernard Shaw",
  },
  {
    quote : "Either Run the Day or the Day Runs You",
    author: "Jim Rohn",
  },
  {
    quote : "When You Feel Like Quitting, Remember Why You Started",
    author: "Forbes",
  },
  {
    quote : "Great Things Never Come From Comfort Zones",
    author: "Unknown",
  },
  {
    quote : "The Real Risk is Doing Nothing",
    author: "Denis Waitley",
  },
  {
    quote : "Success is Walking from Failure to Failure",
    author: "Winston Churchill",
  },
  {
    quote : "Action is the Foundational Key to Success",
    author: "Pablo Picasso",
  },
  {
    quote : "In the End We Only Regret the Chances We Didn’t Take",
    author: "Eugenio Pace",
  },
  {
    quote : "Success isn’t Always about Greatness. It’s about Consistency",
    author: "Dwayne ‘The Rock’ Johnson",
  },
  {
    quote : "Success is Where Preparation & Opportunity Meet",
    author: "Bobby Unser",
  },
  {
    quote : "80% of Success is Showing Up",
    author: "Woody Allen",
  },
  {
    quote : "Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.",
    author: "Amal Clooney",
  },
  {
    quote : "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.",
    author: "Duchess Meghan",
  },
  {
    quote : "You define your own life. Don't let other people write your script.",
    author: "Oprah Winfrey",
  },
  {
    quote : "You are never too old to set another goal or to dream a new dream.",
    author: "Malala Yousafzai",
  },
  {
    quote : "You don't always need a plan. Sometimes you just need to breathe, trust, let go and see what happens.",
    author: "Mandy Hale",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = ` - by ${todaysQuote.author}`;


// *Math 함수*
// Math.random()*Max 값
// Math.round() 반올림
// Math.ceil() 올림
// Math.floor() 내림
//  => Math.floor(Math.random()*20);
// =>Math.floor(Math.random() * quotes.length)

