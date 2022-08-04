<template>
    <div class="card">
        <h3 class="card-header">
            Sign Up
        </h3>
        <div class="card-body">
            <h5 class="card-title">hurry up!</h5>
            <div class="card-text">

                <form class="form" @submit.prevent="handleForm">
                    <div class="form-group">
                        <label>Email: </label>
                        <input type="email" class="form-control" required v-model="email">
                    </div>
                    <div class="form-group">
                        <label>Password: </label>
                        <input type="password" class="form-control" required v-model="password">
                        <div v-if="passwordError" class="text-danger">* {{ passwordError }}</div>
                    </div>
                    <div class="form-group">
                        <label>Role: </label>
                        <select class="form-control" v-model="role">
                            <option value="developer">web developer</option>
                            <option value="designer">web designer</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" v-model="terms">
                        <label>Accept Terms</label>
                    </div>
                    <!-- <div class="form-group">
                        <input type="checkbox" value="aya" v-model="names">
                        <label>Aya</label>
                        <input type="checkbox" value="sola" v-model="names">
                        <label>Sola</label>
                        <input type="checkbox" value="osama" v-model="names">
                        <label>Osama</label>
                        <p>{{names}}</p>
                    </div> -->
                    <div class="form-group">
                        <label>skills: </label>
                        <input type="text" class="form-control" v-model="newSkill" @keyup.alt="addSkill">
                        <div>
                            <span v-for="skill in skills" :key="skill" class="pill">
                                {{skill}}
                                <span class="btn btn-sm btn-primary rounded-circle" @click="removeSkill(skill)">x</span>
                            </span>
                        </div>
                    </div>
                    <hr>
                    <div class="form-group text-center">
                        <button class="btn btn-md btn-primary rounded-pill">Create Account</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            role: 'designer', // initial selected default value
            terms: false,
            // names: []
            newSkill: null,
            skills: [],
            passwordError: ''
        }
    },
    methods: {
        addSkill(e){
            if(e.key === ',' && this.newSkill){ // alt+, && newSkill NOT empty
                if(! this.skills.includes(this.newSkill)){
                    this.skills.push(this.newSkill)
                }
                this.newSkill = ''
            }
        },
        removeSkill(skill){
            this.skills = this.skills.filter((item)=>{
                return item !== skill // returns all items except (skill)
            })
        },
        handleForm() {
            this.passwordError = this.password.length > 5 ? '' : 'password must has at least 5 chars!'
        }
    }
}
</script>

<style>
    .card{
        background-color: #eee;
        width: 400px;
        margin: auto;
        text-align: start;
    }
    .card-header{
        border-bottom: 2px solid #aaa;
        text-align: center;
    }
    label{
        font: bold 14px arial;
    }
    .pill{
        display: inline-block;
        background-color: #aaa;
        color: white;
        border-radius: 5px;
        padding: 4px;
        margin: 4px 2px;
    }
    /* .btn-circle {
        border-radius: 150%;
        padding: 0 4px;
        text-align: center;
        background-color: #555;
        color: white;
        cursor: pointer;
    } */
</style>