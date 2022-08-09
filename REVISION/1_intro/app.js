const app = Vue.createApp({
    data() {
        return {
            message: 'Hi Vue !',
            x: 0,
            y: 0,
            books: [
                { title: 'book1', price: 50, url: 'www.book1.com', image: 'assets/book1.jpg', isFav: true },
                { title: 'book2', price: 22, url: 'www.book2.com', image: 'assets/book2.jpg', isFav: false },
                { title: 'book3', price: 42, url: 'www.book3.com', image: 'assets/book3.jpg', isFav: true },
            ],
            showBooks: true
        }
    },
    methods: {
        handleEvent(e, data){
            console.log(e)

            if(data){
                console.log(data)
            }
        },
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleShowBooks(){
            this.showBooks = ! this.showBooks
        },
        toggleFav(book){
            book.isFav = ! book.isFav
        }
    },
    computed: {
        filteredBooks(){
            return this.books.filter( (book) => book.isFav )
        }
    }
})

app.mount('#app')