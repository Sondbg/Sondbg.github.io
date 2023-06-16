function couponCheck(){
    var coupon= document.querySelector("input");
    var value=coupon.value;
    value=value.toLowerCase()

var result={
    'mj':'a free vacation at your choosing!',
    'daniel':'an annoying man that keeps you on the phone.',
    "dizzy":"a date night at a popular local Jazz club!",
    "burrito":"a relaxing night with wine and MJ Burrito roll.",
    "flowers": 'a surprise flower gift from an Anonymous suitor',
    "flower": 'a surprise flower gift from an Anonymous suitor',
    "triplets": ".....wait...NO, don't you dare.",
    "quadruplets":"...I said NO, first we meet...then kids.",
    "montauk":"a trip across Bulgaria to inform the people about our beer-savior 'Montauk'!",
    "love":"... just love, and a lots of it. I love your silly sarcasm.",
    "cats":"you'll be treated as a home grown, well fed, groomed, cat.",
    "jazz":"...really? More jazz! Lots more of it!",
    "beach":"a whole day at the beach, where you get your own Dominos pizza choice!",
    "sonet": `<b>the classic Shakespeare 18th Sonet !</b><br>
    <br>
Shall I compare thee to a summer's day?<br>
Thou art more lovely and more temperate:<br>
Rough winds do shake the darling buds of May,<br>
And summer's lease hath all too short a date:<br>
Sometime too hot the eye of heaven shines,<br>
And often is his gold complexion dimmed,<br>
And every fair from fair sometime declines,<br>
By chance, or nature's changing course untrimmed:<br>
But thy eternal summer shall not fade,<br>
Nor lose possession of that fair thou ow'st,<br>
Nor shall death brag thou wander'st in his shade,<br>
When in eternal lines to time thou grow'st,<br>
So long as men can breathe, or eyes can see,<br>
So long lives this, and this gives life to thee.`
}

let addString=''
if(result[value]==undefined){

addString="well nothing. Try again you jazz loving Fanatic!";
}else{
    addString=result[value];
}
document.querySelector(".result").innerHTML= `You won ${addString}`;

    coupon.value=''
}