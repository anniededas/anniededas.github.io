
let one = document.querySelector('button[name="one"]');
one.addEventListener('click', swapOne);

let two = document.querySelector('button[name="two"]');
two.addEventListener('click', swapTwo);

let three = document.querySelector('button[name="three"]');
three.addEventListener('click', swapThree);

let four = document.querySelector('button[name="four"]');
four.addEventListener('click', swapFour);

let five = document.querySelector('button[name="five"]');
five.addEventListener('click', swapFive);

let six = document.querySelector('button[name="six"]');
six.addEventListener('click', swapSix);

let seven = document.querySelector('button[name="seven"]');
seven.addEventListener('click', swapSeven);


function swapOne(){
    document.querySelector('button[name="one"]').textContent = "This made me contemplate if we really even have any private thoughts anymore, since in a way our devices are an extension of our thoughts -us looking something up as soon as we wonder about it.";
}

function swapTwo(){
    document.querySelector('button[name="two"]').textContent = "I really like the fact that with technology we can learn from the whole world, instead of just the people in our communities.";
}   

function swapThree(){
    document.querySelector('button[name="three"]').textContent = "This ties into my point about 'your family', and learning from many different places now, technology has made humans a lot more globally aware.";
}

function swapFour(){
    document.querySelector('button[name="four"]').textContent = "I also think what is considered education varies greatly between generations, in older generations most people only went to trade school, now we learn about computers.";
}

function swapFive(){
    document.querySelector('button[name="five"]').textContent = "Emphasizing my previous point, jobs are wildly different generationally as well, we have gone to factory worker from human service jobs and now software development.";
}

function swapSix(){
    document.querySelector('button[name="six"]').textContent = "The expansion of media and technology today, in my opinon, makes it a lot easier for the government to control, specfically through propaganda throughout any digital media platform.";
}

function swapSeven(){
    document.querySelector('button[name="seven"]').textContent = "I interpret this as saying, now we are all more aware of others, most of which are very different than us. Making compassion a stronger trait amongst younger people.";
}