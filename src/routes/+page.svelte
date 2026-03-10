<script>
</script>

<svelte:head>
    <title>nmikle.com</title>
</svelte:head>

<main>
    <section class="intro">
        <h1>Mikhail Niakrasau</h1>
        <p class="tagline">Software engineer · Washington · systems, privacy, open source</p>
    </section>

    <hr/>

    <section class="about">
        <p>
            I'm a software engineer at EPAM. Haskell is my language of choice, though Java takes up
            most of my working hours — and I've made peace with that. I'm particularly drawn to pure
            functional programming, mathematics, security, microelectronics, and gaming.
        </p>
    </section>

    <section class="links">
        <h2>Pet projects</h2>
        <ul>
            <li><a href="https://github.com/NMikle/tilda-book-scraper">tilda-book-scraper</a> — scrapes a Tilda-based website and exports it as a PDF</li>
            <li><a href="https://github.com/NMikle/vk-cleanup">vk-cleanup</a> — script to purge your VKontakte history</li>
        </ul>
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
        margin: 0 0 0.35rem;
        line-height: 1.15;
    }

    .tagline {
        font-size: 1.05rem;

        color: #666;
        margin: 0 0 2rem;
    }

    hr {
        border: none;
        border-top: 1px solid #d4cfc6;
        margin: 2rem 0;
    }

    .about p {
        font-size: 1.15rem;
        color: #333;
        margin: 0;
    }

</style>
