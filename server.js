import app from './app'

const port = 3001
const url = 'http:\\localhost:3001'

app.listen(port, () => {
    console.log('Server Online')
    console.log(`Escutando na porta ${port}`)
    console.log(`CTRL + Click ${url}`)
})