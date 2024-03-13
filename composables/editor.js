const lowlight = TiptapcreateLowlight(Tiptapcommon);

const editor = useEditor({
  content: "<p>I'm running Tiptap with Vue.js. 🎉</p>",
  extensions: [
    TiptapStarterKit.configure({
      codeBlock: false, //to avoid duplication issues
    }),
    TiptapCodeBlockLowlight.configure({
      lowlight,
    }),
  ],
});