<script context="module">
  import blocksToHtml from '@sanity/block-content-to-html'
  import client from '../../sanityClient'
  import serializers from '../../components/serializers'
	export async function preload({ params }) {
		// the `slug` parameter is available because
    // this file is called [slug].html
    const { slug } = params
    const filter = '*[_type == "post" && slug.current == $slug][0]'
    const projection = `{
      ...,
      body[]{
        ...,
        children[]{
          ...,
          _type == 'authorReference' => {
            author->
          }
        }
      }
    }`

    const query = filter + projection
    const post = await client.fetch(query, { slug }).catch(err => this.error(500, err))
    return { post: {
      ...post,
      body: blocksToHtml({blocks: post.body, serializers, ...client.clientConfig })
    } };
	}
</script>

<script>
	export let post;
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/



	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
    position: relative;
	}

	.content :global(pre) :global(code) {

		background-color: transparent;
		padding: 0;
	}

  .content :global(pre::after) {
    content: attr(data-language);
    top: 0;
    position: absolute;
    right: 0;
    background: #ff3e00;
    color: #fff;
    padding: 2px;
    border-radius: 2px;
  }

  .content :global(img) {
    display: block;
    max-width:100%;
  }

  .content :global(figure) {
    margin: 0;
  }

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}

</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>

<div class='content'>
	{@html post.body}
</div>
