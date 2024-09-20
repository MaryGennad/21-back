const express = require('express')
const app = express()
const port = 2000
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send('¯\_(ツ)_/¯ Lesson 21 Server (Back-end)')
})

app.get('/api/product', (req, res) => {
  res.json({
    name: "Сочная буженина в фольге ¯\_(ツ)_/¯",
    image: 'https://chefrestoran.ru/wp-content/uploads/2018/08/shutterstock_413329057.jpg',
    ingreS: [
      'Свинина (лопатка) - 400-500 г',
      'Морковь (небольшая) - 1 шт. ',
      'Чеснок - 3 зубка',
      'Соль - 1 ч. ложка (по вкусу)',
      'Приправа для шашлыка - по вкусу'
    ],
    // description: "Вкусный омлет на завтрак.",
    description: "Сначала мясо шпигуется чесноком и натирается специями, маринуется в контейнере не менее 12 часов. Затем запекается, а после отлёживается в холодильнике ещё сутки. При соблюдении этих правил буженина получается очень нежной, но плотной, при нарезке не ломается и не крошится."
    })
})

app.listen(port, () => {
  console.log(`Lesson 19 http://localhost:${port}`)
})