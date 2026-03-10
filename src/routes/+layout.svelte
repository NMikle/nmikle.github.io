<script>
	const year = new Date().getFullYear();
</script>

<header>
	<nav>
		<a href="/" class="home-link">nmikle</a>
		<div class="nav-links">
			<a href="/">Home</a>
			<a href="/contact">Contact</a>
		</div>
	</nav>
</header>

<div class="content">
	<slot />
</div>

<footer>
	<span>&copy; {year} Mikhail Niakrasau</span>
	<span><a href="mailto:contact@nmikle.com">contact@nmikle.com</a></span>
</footer>

<style>
	:global(*, *::before, *::after) {
		box-sizing: border-box;
	}

	:global(html, body) {
		height: 100%;
		margin: 0;
	}

	:global(body) {
		display: flex;
		flex-direction: column;
		background-color: #f7f4ef;
		color: #0f0f0f;
		font-family: 'EB Garamond', Georgia, serif;
		font-size: 1.1rem;
		line-height: 1.7;
		-webkit-font-smoothing: antialiased;
	}

	:global(body > div) {
		display: contents;
	}

	/* Global link style */
	:global(a) {
		color: #2d5a8e;
		text-underline-offset: 3px;
	}

	:global(a:hover) {
		color: #1a3a5c;
	}

	/* Global code style */
	:global(code) {
		font-family: 'JetBrains Mono', 'Courier New', monospace;
		font-size: 0.82em;
		background: #ede9e0;
		padding: 0.1em 0.4em;
		border-radius: 3px;
	}

	:global(pre) {
		background: #ede9e0;
		padding: 1rem 1.25rem;
		border-radius: 4px;
		overflow-x: auto;
		border-left: 3px solid #c8bfaa;
	}

	:global(pre code) {
		background: none;
		padding: 0;
		font-size: 0.875em;
	}

	/* ── Header ── */
	header {
		border-bottom: 1px solid #d4cfc6;
		padding: 0.85rem 2rem;
	}

	nav {
		max-width: 720px;
		margin: 0 auto;
		display: flex;
		align-items: baseline;
		justify-content: space-between;
	}

	.home-link {
		font-weight: 500;
		font-size: 1.05rem;
		letter-spacing: 0.02em;
		text-decoration: none;
		color: #0f0f0f;
	}

	.home-link:hover {
		color: #2d5a8e;
	}

	.nav-links {
		display: flex;
		gap: 1.75rem;
	}

	.nav-links a {
		text-decoration: none;
		color: #555;
		font-size: 0.95rem;
		letter-spacing: 0.01em;
		transition: color 0.15s;
	}

	.nav-links a:hover {
		color: #0f0f0f;
	}

	/* ── Content ── */
	.content {
		flex: 1;
	}

	/* ── Footer ── */
	footer {
		border-top: 1px solid #d4cfc6;
		padding: 1rem 2rem;
		display: flex;
		justify-content: center;
		gap: 2rem;
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.72rem;
		color: #666;
		letter-spacing: 0.01em;
	}

	footer a {
		color: inherit;
		text-decoration: none;
	}

	footer a:hover {
		color: #0f0f0f;
		text-decoration: underline;
	}
</style>
