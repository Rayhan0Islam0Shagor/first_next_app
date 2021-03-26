import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Link href="/">
                    <a><Image src="/logo.png" width={128} height={77} alt="" /></a>
                </Link>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/rayhan"><a>Rayhan Listing</a></Link>
        </nav>
    );
};

export default Navbar;