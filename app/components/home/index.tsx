import Image from "next/image";
import { homeCopy } from "@/app/copy/home";
export default function Sections() {
    return (
        <div className="container-fluid" id="hero">
            <div className="container">
                <div className="col-lg-6 mx-auto text-center d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
                    <h1 className="font-goodtimes text-xxlarge text-narrow-height" dangerouslySetInnerHTML={{ __html: homeCopy.header.title }}></h1>
                    <p className="text-thin text-medium mt-5 text-narrow-height" dangerouslySetInnerHTML={{ __html: homeCopy.header.description }}></p>
                </div>
                <div className="col-12 text-center">
                    <h2 className="text-xlarge font-goodtimes text-white" dangerouslySetInnerHTML={{ __html: homeCopy.segment1.title }}></h2>
                </div>
                <div className="row mt-5 pt-5">
                    <div className="col-lg-3 white-border text-center p-5 bl-half bb-half br-half position-relative overflow-hidden  hover-bb">
                        <Image src="/img/click.png" alt="click" width={60} height={60} />
                        <h5 className="text-uppercase font-goodtimes text-medium text-narrow-height my-3" dangerouslySetInnerHTML={{ __html: homeCopy.segment1.cards[0].title }}></h5>
                        <p className="text-thin text-n300 text-small text-narrow-height mt-4">
                            {homeCopy.segment1.cards[0].description}
                        </p>
                        <div className="bb-gradient bg-blue-gradient"></div>
                    </div>
                    <div className="col-lg-3 white-border text-center p-5 bl-half bb-half br-half position-relative overflow-hidden  hover-bb">
                        <Image src="/img/school.png" alt="click" width={60} height={60} />
                        <h5 className="text-uppercase font-goodtimes text-medium text-narrow-height my-3" dangerouslySetInnerHTML={{ __html: homeCopy.segment1.cards[1].title }}></h5>
                        <p className="text-thin text-n300 text-small text-narrow-height mt-4">
                            {homeCopy.segment1.cards[1].description}
                        </p>
                        <div className="bb-gradient bg-blue-gradient"></div>
                    </div>
                    <div className="col-lg-3 white-border text-center p-5 bl-half bb-half br-half position-relative overflow-hidden  hover-bb">
                        <Image src="/img/search.png" alt="click" width={60} height={60} />
                        <h5 className="text-uppercase font-goodtimes text-medium text-narrow-height my-3" dangerouslySetInnerHTML={{ __html: homeCopy.segment1.cards[2].title }}></h5>
                        <p className="text-thin text-n300 text-small text-narrow-height mt-4">
                            {homeCopy.segment1.cards[2].description}
                        </p>
                        <div className="bb-gradient bg-blue-gradient"></div>
                    </div>
                    <div className="col-lg-3 white-border text-center p-5 bl-half bb-half br-half position-relative overflow-hidden  hover-bb">
                        <Image src="/img/robo.png" alt="click" width={60} height={60} />
                        <h5 className="text-uppercase font-goodtimes text-medium text-narrow-height my-3" dangerouslySetInnerHTML={{ __html: homeCopy.segment1.cards[3].title }}></h5>
                        <p className="text-thin text-n300 text-small text-narrow-height mt-4">
                            {homeCopy.segment1.cards[3].description}
                        </p>
                        <div className="bb-gradient bg-blue-gradient"></div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-12 white-border d-flex justify-content-center align-items-center text-center p-5 bl-half bb-half br-half position-relative overflow-hidden  hover-b" id="bg-gradient-dots">
                        <p className="text-medium-mob font-goodtimes" dangerouslySetInnerHTML={{ __html: homeCopy.segment2.content }}></p>
                    </div>
                </div>
            </div>
        </div>
    );
}