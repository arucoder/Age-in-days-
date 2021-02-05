// Challange 1 - Your age in days

function ageInDays() {
    var birthYear = prompt('What year were You Born ... Good Friend');
    var ageInDayss = (2021 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You Are' + ' ' + ageInDayss + 'Days Old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
  
    }