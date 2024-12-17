import Link from "next/link";

function Footer() {
    return (
        <nav>
            <div>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </nav>
    );
}

export default Footer;
