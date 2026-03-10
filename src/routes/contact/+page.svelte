<svelte:head>
	<title>Contact — nmikle.com</title>
</svelte:head>

<main>
	<h1>Contact</h1>

	<section>
		<h2>Email</h2>
		<p><a href="mailto:contact@nmikle.com">contact@nmikle.com</a></p>
	</section>

	<section>
		<h2>Elsewhere</h2>
		<ul>
			<li>GitHub — <a href="https://github.com/nmikle" target="_blank" rel="noopener noreferrer">github.com/nmikle</a></li>
			 <li>LinkedIn — <a href="https://www.linkedin.com/in/mikhail-niakrasau/" target="_blank" rel="noopener noreferrer">Mikhail Niakrasau</a></li>
			<!-- <li>Telegram — <a href="#">@...</a></li> -->
		</ul>
	</section>

	<section>
		<h2>PGP</h2>
		<dl>
			<dt>Fingerprint</dt>
			<dd><code>5C5E 4D78 DCCD 32D6 CD41&nbsp; 97FC 768B E39A 10DC 7305</code></dd>
			<dt>Key ID</dt>
			<dd><code>0x768BE39A10DC7305</code></dd>
			<dt>Key file</dt>
			<dd><a href="/pubkey.asc">pubkey.asc</a></dd>
		</dl>
		<p class="import-hint">
			Import directly:
			<br />
			<code>curl https://nmikle.com/pubkey.asc | gpg --import</code>
		</p>
	</section>
</main>

<style>
	main {
		max-width: 680px;
		margin: 4rem auto;
		padding: 0 2rem;
	}

	h1 {
		font-size: 2.4rem;
		font-weight: 500;
		letter-spacing: -0.01em;
		margin: 0 0 2.5rem;
		line-height: 1.15;
	}

	section {
		margin-bottom: 2.5rem;
	}

	h2 {
		font-size: 0.75rem;
		font-family: 'JetBrains Mono', monospace;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		color: #888;
		margin: 0 0 0.75rem;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid #d4cfc6;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	ul li {
		padding: 0.2rem 0;
	}

	dl {
		display: grid;
		grid-template-columns: max-content 1fr;
		gap: 0.4rem 1.5rem;
		margin: 0 0 1rem;
	}

	dt {
		color: #888;
		font-size: 0.9rem;
		padding-top: 0.1em;
	}

	dd {
		margin: 0;
		word-break: break-all;
	}

	.import-hint {
		font-size: 0.95rem;
		color: #555;
		margin: 0;
	}
</style>
