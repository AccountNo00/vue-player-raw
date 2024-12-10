<template>
  <div>
    <quill-editor
      v-model="editorContent"
      :options="editorOptions"
    ></quill-editor>
    <p>Editor Output:</p>
    <div v-html="editorContent"></div>
  </div>
</template>

<script>
import { QuillEditor } from "vue-quill-editor";
import "quill/dist/quill.snow.css"; // Import Quill styles

export default {
  components: { QuillEditor },
  data() {
    return {
      editorContent: "<p>Hello, Vue Quill Editor!</p>", // Initial content
      editorOptions: {
        theme: "snow", // or 'bubble'
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            ["link", "image"],
          ],
        },
      },
    };
  },
};
</script>
