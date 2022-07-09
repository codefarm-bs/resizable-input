<template>
  <div class="relative w-full py-4 mb-4">
    <div
      :class="inputCss"
      :placeholder="placeholder"
      @keydown="onchanging"
      ref="textInput"
      role="textbox"
      contenteditable
    ></div>
    <div :class="helperCss" v-if="hasHelper">{{ this.characterCount + "/" + this.max }}</div>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    max: {
      type: Number,
      default: 100,
    },
    placeholder: {
      type: String,
      default: "Enter your text ...",
    },
    row: {
      type: Number,
      default: 1,
    },
    inputCss: {
      type: String,
      default:
        "form-control block w-full px-3 py-2 resize-none overflow-hidden text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",
    },
    helperCss: {
      type: String,
      default: "text-sm text-gray-500 mt-1",
    },
    hasHelper: {
      type: Boolean,
      default: true,
    },
    enterable: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    inputStyle() {
      return this.inputCss;
    },
    helperStyle() {
      return this.helperCss;
    },
  },
  data() {
    return {
      characterCount: 0,
    };
  },
  mounted() {
    this.$refs.textInput.style.minHeight = `${this.$refs.textInput.clientHeight * this.row}px`;

    setTimeout(() => {
      this.$refs.textInput.textContent = this.value;
    }, 50);
  },
  methods: {
    onchanging(e) {
      if (e.keyCode === 13 && !this.enterable) {
        e.preventDefault();
      }

      setTimeout(() => {
        this.$emit("input", this.$refs.textarea.textContent);
        this.characterCount = this.$refs.textarea.textContent.length;
      }, 50);

      if (this.characterCount >= this.max && e.keyCode !== 8) {
        e.preventDefault();
      }
    },
  },
};
</script>

<style scoped>
span[contenteditable="true"]:empty:not(:focus):before {
  content: attr(placeholder);
  color: grey;
  font-style: italic;
  font-size: 1rem;
  line-height: 1.5rem;
}
</style>
