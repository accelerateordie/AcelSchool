import Image from "next/image";
import { programCopy } from "@/app/copy/programs";

export default function Sections() {
    return (
        <div className="container">
            <h1 className="text-uppercase font-goodtimes text-xlarge text-narrow-height mt-5 pt-5" dangerouslySetInnerHTML={{ __html: programCopy.header.title }}></h1>
            <p className="text-thin text-medium mt-4 text-narrow-height">{programCopy.header.description}</p>
            <div className="row mt-5 px-2 px-lg-0">
                {/* item box */}
                <div className="col-12 mb-4 white-border d-flex flex-wrap flex-xl-nowrap justify-content-start align-items-start text-center p-lg-5 bl-half bb-half br-half position-relative overflow-hidden  hover-b">
                    <Image src="/img/ai-power.png" width={343} height={343} className="rounded-5 mt-4 mt-lg-0 main-img-box mb-4" alt="" />
                    <div className="d-flex flex-column flex-wrap flex-xl-nowrap justify-content-end align-items-start px-lg-4 w-100">
                        <h2 className="font-goodtimes text-narrow-height text-start text-uppercase mt-3 mt-lg-0"
                            dangerouslySetInnerHTML={{ __html: programCopy.segment1.title }}>
                        </h2>
                        <p className="text-thin text-medium  text-narrow-height mt-3 text-start"
                            dangerouslySetInnerHTML={{ __html: programCopy.segment1.description }}></p>
                        <div className="w-100 d-flex  justify-content-around gap-5 mt-3 mb-5 mb-lg-0" id="items-box-discover">
                            <div className="white-border px-3 py-5 position-relative overflow-hidden d-flex flex-wrap flex-xl-nowrap justify-content-center align-items-center">
                                <p className="text-thin text-medium text-narrow-height mb-0">{programCopy.segment1.cards[0].description}</p>
                                <div className="bb-gradient bg-green-gradient"></div>
                            </div>
                            <div className="white-border px-3 py-5 position-relative overflow-hidden d-flex flex-wrap flex-xl-nowrap justify-content-center align-items-center">
                                <p className="text-thin text-medium text-narrow-height mb-0">{programCopy.segment1.cards[1].description}</p>
                                <div className="bb-gradient bg-green-gradient"></div>

                            </div>
                            <div className="white-border px-3 py-5 position-relative overflow-hidden d-flex flex-wrap flex-xl-nowrap justify-content-center align-items-center">
                                <p className="text-thin text-medium text-narrow-height mb-0">{programCopy.segment1.cards[2].description}</p>
                                <div className="bb-gradient bg-green-gradient"></div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* item box */}
                <div className="col-12  mb-4 white-border d-flex flex-wrap flex-xl-nowrap justify-content-start align-items-start text-center p-lg-5 bl-half bb-half br-half position-relative overflow-hidden  hover-b">

                    <Image src="/img/Interdisciplinary-Courses.png" width={343} height={343} className="rounded-5 mt-4 mt-lg-0 main-img-box mb-4" alt="" />
                    <div className="d-flex flex-column flex-wrap flex-xl-nowrap justify-content-end align-items-start px-lg-4 w-100">

                        <h2 className="font-goodtimes text-narrow-height text-start text-uppercase mt-3 mt-lg-0"
                            dangerouslySetInnerHTML={{ __html: programCopy.segment2.title }}></h2>
                        <p className="text-thin text-medium text-start text-narrow-height mt-3"
                            dangerouslySetInnerHTML={{ __html: programCopy.segment2.description }}>
                        </p>
                        <div className="w-100 d-flex  justify-content-around gap-5 mt-3 mb-5 mb-lg-0" id="items-box-discover">
                            <div className="white-border px-3 py-5 position-relative overflow-hidden d-flex flex-wrap flex-xl-nowrap justify-content-center align-items-center">
                                <p className="text-thin text-medium text-narrow-height mb-0 ">{programCopy.segment2.cards[0].description}</p>
                                <div className="bb-gradient bg-blue-gradient"></div>
                            </div>
                            <div className="white-border px-3 py-5 position-relative overflow-hidden d-flex flex-wrap flex-xl-nowrap justify-content-center align-items-center">
                                <p className="text-thin text-medium text-narrow-height mb-0">{programCopy.segment2.cards[1].description}</p>
                                <div className="bb-gradient bg-blue-gradient"></div>

                            </div>
                            <div className="white-border px-3 py-5 position-relative overflow-hidden d-flex flex-wrap flex-xl-nowrap justify-content-center align-items-center">
                                <p className="text-thin text-medium text-narrow-height mb-0">{programCopy.segment2.cards[2].description}</p>
                                <div className="bb-gradient bg-blue-gradient"></div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* item box */}
                <div className="col-12  mb-4 white-border d-flex flex-wrap flex-xl-nowrap justify-content-start align-items-start text-center p-lg-5 bl-half bb-half br-half position-relative overflow-hidden  hover-b">

                    <Image src="/img/Individualized-Tutoring.png" width={343} height={343} className="rounded-5 mt-4 mt-lg-0 main-img-box mb-4" alt="" />
                    <div className="d-flex flex-column flex-wrap flex-xl-nowrap justify-content-end align-items-start px-lg-4 w-100">

                        <h2 className="font-goodtimes text-narrow-height text-start text-uppercase mt-3 mt-lg-0" dangerouslySetInnerHTML={{ __html: programCopy.segment3.title }}></h2>
                        <p className="text-thin text-medium text-start text-narrow-height mt-3"
                            dangerouslySetInnerHTML={{ __html: programCopy.segment3.description }}>
                        </p>
                        <div className="w-100 d-flex  justify-content-around gap-5 mt-3 mb-5 mb-lg-0" id="items-box-discover">
                            <div className="white-border px-3 py-5 position-relative overflow-hidden d-flex flex-wrap flex-xl-nowrap justify-content-center align-items-center">
                                <p className="text-thin text-medium text-narrow-height mb-0 ">{programCopy.segment3.cards[0].description}</p>
                                <div className="bb-gradient bg-yellow-gradient"></div>
                            </div>
                            <div className="white-border px-3 py-5 position-relative overflow-hidden d-flex flex-wrap flex-xl-nowrap justify-content-center align-items-center">
                                <p className="text-thin text-medium text-narrow-height mb-0">
                                    {programCopy.segment3.cards[1].description}
                                </p>
                                <div className="bb-gradient bg-yellow-gradient"></div>

                            </div>
                            <div className="white-border px-3 py-5 position-relative overflow-hidden d-flex flex-wrap flex-xl-nowrap justify-content-center align-items-center">
                                <p className="text-thin text-medium text-narrow-height mb-0">
                                    {programCopy.segment3.cards[2].description}
                                </p>
                                <div className="bb-gradient bg-yellow-gradient"></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}