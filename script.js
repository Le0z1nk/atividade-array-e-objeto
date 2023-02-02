let itens = ["algo", "coisa", "bagulho", "esparafatulho", "buginganga"]
console.log(itens)
itens.unshift("Leo")
console.log(itens)
itens.pop()
console.log(itens)
itens.splice(5,0, "Leon", "Leonardo")
console.log(itens)
itens.shift()
console.log(itens)

let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort()
console.log(numbers)

let objeto = {
    prop1:'bonito',
    prop2:'uso oculos',
    prop3:'gosto de carros'
}
console.log(objeto)
objeto.prop4 = 'alto'
console.log(objeto)
delete objeto.prop4
console.log(objeto)

let cadastro = [
    {nome:'Leonardo', idade:18, telefone:1234-5678, amigos:['Andre', 'Pedro', 'Diego', 'Igor']},
    {nome:'Leandro', idade:23, telefone:8765-4321, amigos:['Luis', 'Gabriel', 'Kauan', 'Felipe']},
    {nome:'Luis', idade:20, telefone:4796-7860, amigos:['Anderson', 'João', 'José', 'Thiago']},
    {nome:'Benfica', idade:19, telefone:5796-5684, amigos:['Leticia', 'Rafael', 'Kevin', 'Kaique']},
    {nome:'Luana', idade:21, telefone:7695-7695, amigos:['Rafaela', 'Lucas', 'Laura', 'Paulo']}
]
console.log(cadastro[0].amigos[1])
console.log(cadastro[1].amigos[0])
console.log(cadastro[2].amigos[3])
console.log(cadastro[3].amigos[2])
console.log(cadastro[4].amigos[0])