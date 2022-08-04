<template>
<div id="signupDiv">
    <div class="box box-primary">
        <h3 class="box-header">Signup</h3>
        <div class="box-body">
            <form @submit.prevent="handleSubmit">
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" id="name" class="form-control" v-model="user_name">
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" id="email" class="form-control" v-model="email">
                </div>
                <div class="mb-3">
                    <label for="pass" class="form-label">Password</label>
                    <input type="password" id="pass" class="form-control" v-model="password">
                </div>
                <div class="mb-3">
                    <label for="role" class="form-label">Role</label>
                    <select class="form-select" v-model="role">
                        <option value="designer">Designer</option>
                        <option value="developer">Developer</option>
                    </select>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="terms" v-model="terms">
                    <label class="form-check-label" for="terms">agree on terms</label>
                </div>

                <!-- multi select -->
                <div class="row mb-3 container">
                    <div class="col-md-4 form-check">
                        <input type="checkbox" class="form-check-input" id="aya" value="aya" v-model="persons">
                        <label class="form-check-label" for="aya">aya</label>
                    </div>
                    <div class="col-md-4 form-check">
                        <input type="checkbox" class="form-check-input" id="osama" value="osama" v-model="persons">
                        <label class="form-check-label" for="osama">osama</label>
                    </div>
                    <div class="col-md-4 form-check">
                        <input type="checkbox" class="form-check-input" id="sola" value="sola" v-model="persons">
                        <label class="form-check-label" for="sola">sola</label>
                    </div>
                </div>
                <!-- keyboard events -->
                <div class="mb-3">
                    <label for="skills" class="form-label">Skills</label>
                    <input type="text" id="skills" class="form-control" v-model="tmpSkill" @keyup.alt="addSkill">
                    <!-- added skills pills -->
                    <span class="badge bg-primary rounded-pill m-1 p-2" v-for="skill in skills" :key="skill">
                        {{skill}}
                        <span class="badge bg-danger rounded-pill p-1 text-center delete" @click="deleteSkill(skill)">x</span>
                    </span>
                </div>
                <div class="text-center">
                    <button class="btn btn-md btn-primary form-control">Submit</button>
                </div>
            </form>
        </div>
    </div>
</div>

<br>
<p>Persons: {{persons}}</p>
</template>

<script>
export default {
    props: ['user_name'],
    data() {
        return {
            email: '',
            password: '',
            role: 'developer',
            terms: false,
            persons: [],
            tmpSkill: '',
            skills: []
        }
    },
    methods: {
        addSkill(e) {
            if(e.key === ',' && this.tmpSkill){

                if(!this.skills.includes(this.tmpSkill)){
                    this.skills.push(this.tmpSkill)
                }

                this.tmpSkill = ''
            }
        },
        deleteSkill(skill) {
            this.skills = this.skills.filter((item)=> item != skill)
        },
        handleSubmit() {
            console.log('user_name: '+this.user_name)
            console.log('email: '+this.email)
            console.log('password: '+this.password)
            console.log('role: '+this.role)
            console.log('terms: '+this.terms)
            console.log('persons: '+this.persons)
            console.log('skills: '+this.skills)
        }
    }
}
</script>

<style scoped>
#signupDiv{
    width: 400px;
    margin: auto;
    text-align: left;
    border: 1px solid #aaa;
    border-radius: 10px;
    padding: 10px 20px;
    font: bold 14px Arial;
    box-shadow: 2px 2px 4px 1px #ddd;
}
.box-header{
    border-bottom: 3px solid #888;
    padding-bottom: 5px;
    margin-bottom: 30px;
}
span.delete{
    cursor: pointer;
}
</style>