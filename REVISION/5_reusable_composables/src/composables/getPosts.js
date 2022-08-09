import { ref } from 'vue';

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)


    const loadData = async () => {
        try{
            const result = await fetch("http://localhost:3000/posts") // $ json-server --watch data/db.json
            if(!result.ok){
                throw Error("cant fetch data !")
            }

            posts.value = await result.json()
        }
        catch(err){
            error.value = err.message
            console.error(error.value)
        }
    }

    return {
        posts,
        error,
        loadData
    }
}

export default getPosts