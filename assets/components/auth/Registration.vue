<script>
import axios from 'axios';
import useVuelidate from '@vuelidate/core';
import { required, sameAs } from '@vuelidate/validators';
import router from '../../router';

export default {
    name: 'Registration',
    data() {
        return {
            authData: {
                email: '',
                password: '',
                confirmPassword: ''
            },
            checked: false,
            $v: useVuelidate()
        };
    },
    methods: {
        async signup() {
            let result = await axios
                .post('http://localhost:3000/authorization', {
                    email: this.authData.email,
                    password: this.authData.password
                })
                .then((res) => {
                    console.log(res);
                });
            if (result.status === 200 && result.data.length > 0) {
                await router.push({ name: '/' });
            }
        }
    },
    validations() {
        return {
            authData: {
                email: { required },
                password: { required },
                confirmPassword: {
                    required,
                    sameAsPassword: sameAs(this.authData.password)
                }
            }
        };
    }
};
</script>

<template>
    <div class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
        <div class="flex flex-column align-items-center justify-content-center">
            <img src="../../images/logo-dark.svg" alt="Sakai logo" class="mb-5 w-6rem flex-shrink-0" />
            <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                <div class="w-full surface-card py-8 px-5 sm:px-8" style="border-radius: 53px">
                    <div class="text-center mb-5">
                        <img src="../../images/avatar.png" alt="Image" height="50" class="mb-3" />
                        <div class="text-900 text-3xl font-medium mb-3">Luxus Company</div>
                        <span class="text-600 font-medium">Registration in to continue</span>
                    </div>

                    <div>
                        <label for="email1" class="block text-900 text-xl font-medium mb-2">Email</label>
                        <InputText
                                required
                                id="email1"
                                v-model="authData.email"
                                type="text"
                                class="w-full md:w-30rem mb-5"
                                placeholder="Email"
                                :class="{ 'p-invalid': $v.authData.email.$error }"
                                @blur="$v.authData.email.$touch()"
                                style="padding: 1rem"
                        />

                        <label for="password1" class="block text-900 font-medium text-xl mb-2">Password</label>
                        <Password
                                id="password1"
                                required
                                v-model="authData.password"
                                placeholder="Password"
                                :toggleMask="true"
                                :class="{ 'p-invalid': $v.authData.password.$error || $v.authData.confirmPassword.$error }"
                                @blur="$v.authData.password.$touch()"
                                class="block text-900 font-medium text-xl mb-2"
                                inputClass="w-full"
                                inputStyle="padding:1rem"
                        ></Password>

                        <div class="confirm" style="margin: 2rem 0">
                            <label for="password1" class="block text-900 font-medium text-xl mb-2">Confirm Password</label>
                            <Password
                                    id="password1"
                                    required
                                    v-model="authData.confirmPassword"
                                    placeholder="Confirm Password"
                                    :toggleMask="true"
                                    :class="{ 'p-invalid': $v.authData.password.$error || $v.authData.confirmPassword.$error }"
                                    @blur="$v.authData.confirmPassword.$touch()"
                                    class="block text-900 font-medium text-xl mb-2"
                                    inputClass="w-full"
                                    inputStyle="padding:1rem"
                            ></Password>
                        </div>
                        <router-link :to="'/'">
                            <Button :disabled="!authData.email || !authData.password || !authData.confirmPassword" label="Registration" class="w-full p-3 text-xl" @click="signup()"></Button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

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
