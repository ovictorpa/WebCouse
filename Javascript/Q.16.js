function Bissexto(ano){

    if(ano%4 == 0){

        if(ano%100 == 0){
            if(ano%400 == 0) return true
            else return 'false, pois é multiplo de 100, mas não de 400'
        }

        else return true

    } else return 'false, pois não é múltiplo de 4'
}

console.log(Bissexto(2012))