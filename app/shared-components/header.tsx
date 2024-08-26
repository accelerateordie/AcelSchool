"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbarCopy } from "../copy/navbar";
import Image from "next/image";
import { OffcanvasProvider } from "./OffCanvas/Context";
import { Trigger } from "./OffCanvas/Trigger";
import { Offcanvas } from "./OffCanvas/OffCanvas";
import { footerCopy } from "../copy/footer";

export default function Header() {
    const pathname = usePathname();
    const handleOpen = () => console.log("");
    const handleClose = () => console.log("");
    return (
        <nav className="container" id="navbar">
            <div className="navbar navbar-expand-lg flex-row-reverse flex-lg-row  navbar-dark  mb-3 mt-1">
                <OffcanvasProvider onOpen={handleOpen} onClose={handleClose}>
                    <Trigger />
                    <Offcanvas />
                </OffcanvasProvider>
                <Link className="navbar-brand  d-flex align-items-center text-large "
                    href="/">
                    <Image src="/img/logo.png" width={100} height={100} className="object-fit-contain"  alt="logo" />
                </Link>
                <div id="navbarToggleMain" className="collapse navbar-collapse light-text ">
                    <ul className="navbar-nav align-items-center col-8 justify-content-center mx-auto text-thin">
                        {navbarCopy["navbar-links"].map((item,index)=>
                            (
                            <li className="nav-item my-sm-3 mx-lg-4 mx-auto" key={index}>
                                <Link href={item.url} className={`nav-link text-light text-small ${pathname == item.url ? 'active-nav' : ''}`} 
                                    target={item.target}>{item.name}</Link>
                            </li>  
                            )


                        )}
                     
                    </ul>
                    <Link href={footerCopy["quick-links"][2].url} className="box btn bg-blue text-oxford btn-padding fw-bold"
                                target={footerCopy["quick-links"][2].target}>
                        {footerCopy["quick-links"][2].name}
                    </Link>
                </div>


            </div>
        </nav>
    );
}