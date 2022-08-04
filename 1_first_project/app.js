const MyTemplate = {
    template: '<h2>my H2 Template</h2>'
}
Vue.createApp(MyTemplate).mount('#using-template')

// text interpolation
const Counter = {
    data() {
        return {
          counter: 0
        }
    },
    mounted() {
        setInterval(
            ()=>{ this.counter++ },
            1000
        )
    }
}

Vue.createApp(Counter).mount('#counter')


// Attribute binding
const AttributeBinding = {
    data(){
        return {
            message: 'you hovered at: '+ new Date().toLocaleString()
        }
    }
}

Vue.createApp(AttributeBinding).mount('#bind_attribute')


// Event Handling
const EventHandling = {
    data(){
        return {
            message: 'Hello Vue.js!'
        }
    },
    methods: {
        reverseMessage(){
            this.message = this.message.split(' ').reverse().join(' ')
        }
    },
}

Vue.createApp(EventHandling).mount('#event_handling')


// Two-way binding
const TwoWayBinding = {
    data() {
        return {
            message: 'Hello Vue!',
            itemPriority: 'low'
        }
    }
}
  
Vue.createApp(TwoWayBinding).mount('#two-way-binding')


// Conditional Rendering
const ConditionalRender = {
    data(){
        return {
            seen: true
        }
    }
}

Vue.createApp(ConditionalRender).mount('#conditional-rendering')


// Loop Rendering
const LoopList = {
    data(){
        return {
            todos: [
                {text: 't1'},
                {text: 't2'},
                {text: 't3'},
                {text: 't4'}
            ]
        }
    }
}

Vue.createApp(LoopList).mount('#loop')


// adding new value to items list
const DynamicAddItem = {
    data() {
        return {
            newItem: '',
            newItemHighPriority: false,
            itemsList: [
                {id: 1, name: 'item 1', purchased: true, highPriority: false},
                {id: 2, name: 'item 2', purchased: true, highPriority: false},
                {id: 3, name: 'item 3', purchased: false, highPriority: true},
            ],
            editing: false
        }
    },
    computed: {
        characterCount(){
            return this.newItem.length
        }
    },
    methods: {
        addItem (){
            this.itemsList.push(
                {
                    id: this.itemsList.length+1,
                    name: this.newItem,
                    highPriority: this.newItemHighPriority
                }
            )

            this.newItem = ''
            this.newItemHighPriority = ''
        },
        isEditing(editing){
            this.editing = editing
            this.newItem = ''
        },
        togglePurchased(item){
            item.purchased = ! item.purchased
        }
    }
}

Vue.createApp(DynamicAddItem).mount('#add_new_item')

