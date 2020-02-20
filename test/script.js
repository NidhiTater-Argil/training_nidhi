// function InterviewQues(job)
// {
//     if(job==='designer')
//     {
//         return function (name){
//             console.log(name + 'can you please explain about UX');
//         }
//     }
//     else if(job==="teacher")
//     {
//         return function(name){
//             console.log(name + "subject?");
//         }
//     }
//     else{
//         return function(name)
//         {
//             console.log(name + "kya karte ho?");
//         }
//     }
// }

// ....................

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};
var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal','morning');
john.presentation.call(emily,'formal','morning');
var jf= john.presentation.bind(john,'friendly');
jf('evening');
