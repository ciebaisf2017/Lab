console.log('Hey man, you got JavaScript');

$(function() {
  const calc = new Calculator();

  function operand(event) {
    console.log(event.target.innerText);
    if($('.display').text() === '0') {
      render(event.target.innerText);
    } else {
      render($('.display').text() + event.target.innerText);
    }
  }

  function operator(event) {
    if (calc.current) {
      calc.operandOne = parseFloat($('.display').text());
      render('');
    } else {
      calc.operandTwo = $('.display').text();
    }
    calc.operator = event.target.innerText;
    calc.current = !calc.current;
  }

  function evaluate(event) {
    calc.operandTwo = parseFloat($('.display').text());
    calc.evaluate()
    render(calc.output);
  }

  function render(displayValue) {
    $('.display').text(clipValue(displayValue));
  }

  function clearDisplay() {
    render('0');
    calc.reset();
  }

  function clipValue(value) {
    value += '';
    let x = value.split('');
    console.log(x);
    if (x.length > 9) {
      for (var i = x.length - 1; i > 8; i--) {
        x.pop();
      }
    }
    return x.join('');
  }

  $('.value').click(operand);
  $('.operator').click(operator);
  $('.evaluate').click(evaluate);
  $('.clear').click(clearDisplay);
});
