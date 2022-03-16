var bestPeople = [
    {
        name: 'Nazira',
        salary: '34600'
    },
    {
        name: 'Meerim',
        salary: '38000'
    },
    {
        name: 'Firdavs',
        salary: '47263'
    },
    {
        name: 'Nurdin',
        salary: '15000'
    },
    {
        name: 'Temirlan',
        salary: '58456'
    },
    {
        name: 'Semen',
        salary: '56654'
    },
    {
        name: 'Syimyk',
        salary: '76543'
    },
    {
        name: 'Luisa',
        salary: '59452'
    },
    {
        name: 'Kutman',
        salary: '63213'
    },
    {
        name: 'Luisa',
        salary: '59452'
    },
    {
        name: 'Chyngyzhan',
        salary: '23459'
    },
    {
        name: 'Aliya',
        salary: '45697'
    }
]

const filter = bestPeople.filter(names)

function names(str) {
    for (let str1 of bestPeople){
        if (str1.name.charAt(0) === "S"){
            console.log(str1.name)
        }
    }
}

const filter1 = bestPeople.filter(dollar)

function dollar(salary) {
    return bestPeople.map(function(money){
        return money.salary
    }) / 104
}

console.log(filter1)











