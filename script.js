$(function () {
  $('#calcular').on('click', function (e) {
    e.preventDefault()

    let peso = $('#peso_id').val()
    peso = peso.replace(',', '.')

    let altura = $('#altura_id').val()
    altura = altura.replace(',', '.')

    let imc = peso / (altura * altura)

    if (imc < 16) {
      res = 'baixo peso muito grave'
    } else if (imc >= 16 && imc <= 16.99) {
      res = 'baixo peso grave'
    } else if (imc >= 17 && imc <= 18.49) {
      res = 'baixo peso'
    } else if (imc >= 18.5 && imc <= 24.99) {
      res = 'peso normal'
    } else if (imc >= 25 && imc <= 29.99) {
      res = 'sobrepeso'
    } else if (imc >= 30 && imc <= 34.99) {
      res = 'obesidade grau 1'
    } else if (imc >= 35 && imc <= 39.99) {
      res = 'obesidade grau 2'
    } else {
      res = 'obesidade grau 3 - obesidade morbida'
    }

    $('#resultado').html('Seu IMC é: ' + imc + 'kg/m² e seu status é: ' + res)
  })
})
