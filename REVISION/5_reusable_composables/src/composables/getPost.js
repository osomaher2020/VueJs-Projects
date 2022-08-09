import { ref } from 'vue';

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)


    const loadData = async () => {
        try{
            const result = await fetch(`http://localhost:3000/posts/${id}`) // $ json-server --watch data/db.json
            if(!result.ok){
                throw Error("Post does not exist  !")
            }

            post.value = await result.json()
        }
        catch(err){
            error.value = err.message
            console.error(error.value)
        }
    }

    return {
        post,
        error,
        loadData
    }
}

export default getPost