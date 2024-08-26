import Link from "next/link";
import { footerCopy } from "../copy/footer";
import Image from "next/image";

export default function Footer() {
    return (
        <div className="container">
            <footer className="row px-2 px-lg-0" id="footer">
                <div className="row white-border bt-half p-5 mb-5 mx-0">
                    <div className="row ">
                        <div className="col-md-4 d-flex flex-column text-center">
                            <Link href="#" className="mb text-decoration-none">
                             <Image src="/img/logo-footer.png" width={150} height={150} className="object-fit-contain" alt=""></Image>
                            </Link>

                            <div className="my-2">
                                <ul className="navbar-nav footer-social list-group-horizontal justify-content-center">

                                    <li className="p-social">
                                        <Link href={footerCopy["social-links"].x.url}
                                            target={footerCopy["social-links"].x.target}>
                                            <img src="./img/icon-x.svg" alt="X" />
                                        </Link>
                                    </li>
                                    <li className="p-social">
                                        <Link href={footerCopy["social-links"].instagram.url}
                                            target={footerCopy["social-links"].instagram.target}>
                                            <img src="./img/icon-instagram.svg" alt="Instagram" />
                                        </Link>
                                    </li>
                                    <li className="p-social"> <Link href={footerCopy["social-links"].github.url} target={footerCopy["social-links"].github.target}>
                                        <img src="./img/icon-github.svg" alt="Github" />
                                    </Link>
                                    </li>

                                    <li className="p-social"> <Link href={footerCopy["social-links"].discord.url} target={footerCopy["social-links"].discord.target}
                                        data-query="footer.social-links.discord._" data-attribute="href" data-target="target"><img
                                            src="./img/icon-discord.svg" alt="Discord" /></Link>
                                    </li>
                                  
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 ms-auto mt-lg-0 mt-3 justify-content-end px-0">
                            <div className="row">
                            <div className="col-6 px-0 d-flex justify-content-end">
                                <ul className="list-unstyled">
                                    <li className="mb-4">
                                        <h3 className="text-medium text-blue" style={{ color: "#57B3E6" }}>Quick Links</h3>
                                    </li>
                                    {footerCopy["quick-links"].map((item,index) =>
                                    (
                                        <li key={index}> <Link href={item.url} target={item.target} className="nav-link text-small text-thin my-2">
                                            {item.name}
                                        </Link>
                                        </li>
                                    )

                                    )}

                                </ul>
                            </div>
                            
                            <div className="col-6 px-0 d-flex justify-content-end">
                                <ul className="list-unstyled">
                                    <li className="mb-4">
                                        <h3 className="text-medium text-blue" style={{ color: "#57B3E6" }}>Legal</h3>
                                    </li>
                                    {footerCopy.legal.map((item,index) =>
                                    (
                                        <li key={index}> <Link href={item.url} target={item.target} className="nav-link text-small text-thin my-2">
                                            {item.name}
                                        </Link>
                                        </li>
                                    )

                                    )}

                                </ul>
                            </div>
                            </div>
                           

                        </div>
                    </div>


                </div>
            </footer>
        </div>
    );
}