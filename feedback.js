function showById(id, visible) {
document.getElementById(id).style.display =
visible ? 'block' : 'none'
}
function processForm(f) {
var i, s='', el
var questions = new Object()
var answers = new Object()
for (i=0; i<f.length; i++) {
el = f.elements[i]
if (el.type=='radio' && el.name.indexOf('question')==0) {
questions[el.name] = 0
if (el.checked)
answers[el.name] = parseInt(el.value)
}
}
s = '\n'
var asked = 0, answered = 0, score = 0
for (i in questions) asked++
for (i in answers) {
s += '\n' + i + ' = ' + answers[i]
answered++
score += answers[i]
}
if (answered < asked) {
alert('You answered '+answered+' questions of '+asked+'. Please answer all questions.')
}
else {
showById('questionsForm', false)
el = document.getElementById('score')
el.innerHTML = (score>0) ? +score : score
showById('results', true)
if (score == 0)
showById('explain-negative', true)
else if (score > 0)
showById('explain-positive', true)
}
}
function resetTest() {
showById('results', false)
showById('questionsForm', true)
document.forms['opros'].reset()
}