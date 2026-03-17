function contar(){
    let inicio = document.getElementById('txti')
    let i = Number(inicio.value)
    let fim = document.getElementById('txtf')
    let f = Number(fim.value)
    let passo = document.getElementById('txtp')
    let p = Number(passo.value)
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar'
        window.alert('[ERRO] preencha todos os dados!')

    }else{
         res.innerHTML = ' contando... <br>'
         if (i < f){ //não entendi essa parte
         for (let c= i ; c<= f ; c += p){
            res.innerHTML += `${c}  ➡️ `
         }
        } else {
            for (let c =i ; c >= f ; c -=p)
            res.innerHTML += `${c}  ➡️ `
           
        }
    }
    res.innerHTML += `🏴󠁧󠁢󠁷󠁬󠁳󠁿` //pq maior ou igual ?
}
