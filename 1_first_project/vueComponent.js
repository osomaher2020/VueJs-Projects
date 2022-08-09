const ListItem = {
    props: ['my_li'],
    template: '<li>{{ my_li.text }}</li>'
}

const SelectOption = {
    props: ['my_option'],
    template: '<option value={{my_option.id}}>{{ my_option.text }}</option>'
}

const ShoppingCart = {
    data(){
        return {
            groceryItems: [
                {id: 1, text: 'item1'},
                {id: 2, text: 'item2'},
                {id: 3, text: 'item3'}
            ]
        }
    },
    components: {
        ListItem,
        SelectOption
    }
}

const app = Vue.createApp(ShoppingCart)

app.mount('#cart-component');