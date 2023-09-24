import Link from 'next/link'

const Footer = () => {
    return (
        <footer>
            <div>
                <a href="https://github.com/izumi1981/"><img src="/images/github.svg" alt="logo"/></a>
                <a href="https://twitter.com/izumi_yoshiki"><img src="/images/twitter.svg" alt="logo"/></a>
                <hr/>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
                <p>©{new Date().getFullYear()} tech kawahara</p>
            </div>
        </footer>
    )
}

export default Footer