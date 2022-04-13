const calculateAge = birthdate =>
    Math.floor((new Date().getTime() - birthdate.getTime()) / (1000 * 60 * 60 * 24 * 365.25))

class DB {

    constructor(data) {
        this.id = 1
        this.data = []
        if (data) {
            data.map(item => this.create(() => { }, item))
        }
    }

    create(set, item) {
        // all data is auto-increment id
        item.id = this.id
        this.id++
        this.data = [...this.data, item]
        set(this.data)
    }

    remove(set, id) {
        this.data = this.data.filter(item => item.id !== id)
        set(this.data)
    }

    update(set, newItem) {
        this.data = this.data.map(item => item.id === newItem.id ? newItem : item)
        set(this.data)
    }

    findAll() {
        return this.data
    }

    findOne(id) {
        return this.data.find(item => item.id === id)
    }
}

// subclass Zakat is like DB but much more specific
class Zakat extends DB {

    // constructor(data) {
    //     super(data)
    // }

    findByName(name) {
        return this.data.filter(item => item.name.includes(name))
    }

    findByAgeMinMax(min, max) {
        return this.data.filter(item => calculateAge(item.birthdate) >= min && calculateAge(item.birthdate) <= max)
    }
}

class Volunteer extends DB {

    // constructor(data) {
    //     super(data)
    // }

    findByName(name) {
        return this.data.filter(item => item.name.includes(name))
    }

    findByAgeMinMax(min, max) {
        return this.data.filter(item => calculateAge(item.birthdate) >= min && calculateAge(item.birthdate) <= max)
    }
}

// subclass Pets is like DB but much more specific
class Pets extends DB {

    // constructor(data) {
    //     super(data)
    // }

    findByPersonId(personId) {
        return this.data.filter(item => item.personId === personId)
    }

    findByType(type) {
        return this.data.filter(item => item.type === type)
    }

    findDistinctTypes() {
        return [...new Set(this.data.map(item => item.type))]
    }
}

const db = {
    Zakat: new Zakat([
        { id: 1, name: "Joe"},
        { id: 2, name: "Ann"},
        { id: 3, name: "Fred"}
    ]),
    Volunteer: new Volunteer([
        { id: 1, name: "School Competition"},
        { id: 2, name: "Food Distribution"},
        { id: 3, name: "Beach Cleaning"}
    ])
}

export default db