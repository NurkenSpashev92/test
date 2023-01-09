<template>
    <div class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
        <div class="flex flex-column align-items-center justify-content-center">
            <img src="../../images/logo-dark.svg" alt="Sakai logo" class="mb-5 w-6rem flex-shrink-0" />
            <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                <div class="w-full surface-card py-8 px-5 sm:px-8" style="border-radius: 53px">
                    <div class="text-center mb-5">
                        <img src="../../images/avatar.png" alt="Image" height="50" class="mb-3" />
                        <div class="text-900 text-3xl font-medium mb-3">Luxus Company</div>
                        <span class="text-600 font-medium">Login in to continue</span>
                    </div>
                      <div>
                        <div class="email mb-5">
                            <label for="email1" class="block text-900 text-xl font-medium mb-2">Email</label>
                            <InputText
                                    required
                                    id="email1"
                                    v-model="this.authData.email"
                                    type="text"
                                    class="w-full md:w-30rem"
                                    placeholder="Email"
                                    :class="{ 'p-invalid': $v.authData.email.$error }"
                                    @blur="$v.authData.email.$touch()"
                                    style="padding: 1rem"
                            />
                            <p style="color: red" v-if="errorEmail">Email is NotFound</p>
                        </div>

                        <div class="password">
                            <label for="password1" class="block text-900 font-medium text-xl mb-2">Password</label>
                            <Password
                                    id="password1"
                                    required
                                    v-model="this.authData.password"
                                    placeholder="Password"
                                    :toggleMask="true"
                                    :class="{ 'p-invalid': $v.authData.password.$error }"
                                    @blur="$v.authData.password.$touch()"
                                    class="block text-900 font-medium text-xl mb-2"
                                    inputClass="w-full"
                                    inputStyle="padding:1rem"
                            ></Password>
                            <p style="color: red" v-if="errorPassword">Password is NotFound</p>
                        </div>

                        <div class="flex align-items-center justify-content-between mb-5 gap-5">
                            <router-link :to="'/registration'"><a class="font-medium no-underline ml-2 text-right cursor-pointer" style="color: var(--primary-color); text-decoration: underline !important">Registration</a></router-link>
                        </div>
                        <Button :disabled="!this.authData.email || !this.authData.password" label="Login" class="w-full p-3 text-xl" @click="login()"></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import useVuelidate from '@vuelidate/core';
import { required, sameAs } from '@vuelidate/validators';
import router from '../../router';

export default {
    name: 'Login',
    data() {
        return {
            authData: {
                email: '',
                password: ''
            },
            errorPassword: false,
            errorEmail: false,
            checked: false,
            $v: useVuelidate()
        };
    },
    methods: {
        async login() {
            let result = await axios.get(`http://localhost:3000/authorization?email=${this.authData.email}&password=${this.authData.password}`);

            if (result.status === 200 && result.data.length > 0) {
                await router.push({ name: 'Home' });
                this.errorPassword = false;
                this.errorEmail = false;
            } else {
                this.errorPassword = true;
                this.errorEmail = true;
            }
        }
    },
    validations() {
        return {
            authData: {
                email: { required },
                password: {
                    required,
                    sameAsPassword: sameAs(this.authData.password)
                }
            }
        };
    }
};
</script>

<style scoped>
.pi-eye {
    transform: scale(1.6);
    margin-right: 1rem;
}

.pi-eye-slash {
    transform: scale(1.6);
    margin-right: 1rem;
}
</style>
