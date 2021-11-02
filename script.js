const btnConv =document.querySelector(".conv")
const btnReset =document.querySelector(".reset")
const btnChange =document.querySelector(".change")
const converter =document.getElementById('converter')
const result = document.querySelector(".result")
const c = document.querySelector('.one')
const f = document.querySelector('.two')

console.log(c.textContent)

const celsius=()=>{
        if(c.textContent=="°C"){
        result.textContent = (converter.value * 9)/5 +32
        result.textContent=`${converter.value}°C is ${result.textContent}°F`
    }else{
        result.textContent = (converter.value -32)*5/9
        result.textContent=`${converter.value}°F is ${result.textContent}°C`

        }
    }

const change = ()=>{
    if(c.textContent=="°C"){
        c.textContent="°F"
        f.textContent="°C"
    }else{
        c.textContent="°C"
        f.textContent="°F"

    }

}  

const reset=()=>{
    result.textContent = ""
    converter.value = ""
}

    
btnConv.addEventListener("click", celsius)
btnChange.addEventListener("click", change)
btnReset.addEventListener("click", reset)


