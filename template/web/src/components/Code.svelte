<script>
  export let code;
  export let language;
</script>

<style>
  pre {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
    position: relative;
  }
  code {
    background: none;
  }
  [data-language]:after {
    content: attr(data-language);
    top: 0;
    position: absolute;
    right: 0;
    background: #ff3e00;
    color: #fff;
    padding: 2px;
    border-radius: 2px;
  }
</style>

<pre data-language={language}>
  <code>{code}</code>
</pre>
