<template>
    <Breadcrumbs :title="title"/>
    <div class="msg-padding">
        <div class="msg-div">
            <div class="msg-details mb-3">
                <div class="msg-icon">
                    <i class="mdi mdi-email-outline"></i>
                </div>
                <h3 class="text-white mt-3">Create Message</h3>
                <span class="text-white mt-3">Send you Concern to us</span>
            </div>
            <div class="msg-table table-responsive mx-4">
                <div class="mb-3">
                    <label class="text-white">Title</label>
                    <input class="form-control"/>
                </div>
                <div class="mb-3">
                    <label class="text-white">Content</label>
                    <QuillEditor v-model="editorContent" contentType="html" theme="snow" />
                </div>
                <div class="mb-3">
                    <label class="text-white">Attachment</label>
                    <input class="form-control" type="file"/>
                </div>
                <div>
                    <button class="w-100 btn-theme fs-4" @click="showAlert()">Send</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import Swal from 'sweetalert2';
import Breadcrumbs from '../../../components/breadcrumbs.vue';
export default{
    data(){
        return{
            editorContent: "<p>Initial content</p>",
            title: 'Message Create'
        }
    },
    components:{
        QuillEditor,
        Breadcrumbs
    },
    methods:{
        showAlert() {
            Swal.fire({
                title: 'Warning!',
                text: 'Under maintenance.',
                icon: 'warning',
                confirmButtonText: 'OK',
            });
        },
    },
    mounted(){
    }
}
</script>
<style scoped>

</style>