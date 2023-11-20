import { PARAGRAPH_CLASSNAME } from "../common/Constant"

import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CameraFrontIcon from '@mui/icons-material/CameraFront';
import Icon from "@mui/material/Icon";
import { ProjectCard } from "../component/site/ProjectCard";
import { ExternalLink } from "../component/common/ExternalLink";

export const ProjectsSection = ({className}: ClassNameProps) => (
    <div className={className + " min-h-screen mt-20 px-10"}>
        <div className = "flex flex-col gap-20">
            <ProjectCard
                title="Monk Digital's Website"
                featureList={[
                    { text: "JWT" },
                    { text: "User Management" },
                    { text: "Email Notification" },
                    { text: "SMPT" },
                    { text: "SMS"},
                    { text: "Whatsapp"},
                    { text: "SSL" },
                    { text: "SEO" },
                    { text: "Google Analytics" }
                ]}
                cta = {{text: "Checkout The Code", link: "https://github.com/coconatree/monk-digital-frontend-pub"}}
            >
                <p className={PARAGRAPH_CLASSNAME + " mt-10"}>
                    It is the website you are visiting rigth now. A full stack web application that is powered
                    by <ExternalLink text="React" link="" />, <ExternalLink text="Spring" link="" /> and <ExternalLink text="PostreSQL" link="" />.
                    Deployed on an Alma Linux server with dockerized containers.
                    Currently under continuous development in its third MVP stage. 
                </p>
            </ProjectCard>
            <ProjectCard
                title="Monk Bot's Letters"
                featureList={[
                    { text: "ChatGPT" },
                    { text: "ElevenLabs" },
                    { text: "Audio" },
                    { text: "Caching" },
                    { text: "Pagination" }
                ]}
                cta  = {{text: "Check It Yourself", link: "/monk-bot/letters"}}
                scta = {{text: "Check Out The Code", link: "/monk-bot/letters"}}
            >
                <p className={PARAGRAPH_CLASSNAME + " mt-10"}>
                    An automation project to see how AI and software integration can be combined to create content.
                    Every night the server runs a scheculed job to first ask <ExternalLink text="Chat GPT" link = "https://chat.openai.com" /> to 
                    write a new letter. And then asks <ExternalLink text="ElevenLabs" link = "https://elevenlabs.io/" /> to 
                    create the voiceover for the letter.
                </p>
                <p className={PARAGRAPH_CLASSNAME + " mt-5"}>
                    Audio files are saved to the local file system using the website's file management system and
                    on the front-end there is a caching system with pagination so the loading times of the 
                    pages and used server resoruces are minimized.
                </p>
            </ProjectCard>
            <ProjectCard
                id          = "http-project"
                title       = "HTTP Implementation"
                featureList = {[
                    { text: "HTTP" },
                    { text: "Socket" },
                    { text: "Aysnc" },
                    { text: "REST" },
                    { text: "Web Server" },
                    { text: "Java" },
                    { text: "Go" },
                    { text: "Rust" }
                ]}
                cta = {{text: "Check out the Code", link: "https://github.com/coconatree/http-file-downloader.git"}}
            >
                <p className={PARAGRAPH_CLASSNAME + "mt-10"}>
                    A four layered project with a unique architecture consisting of a HTTP library,
                    and a client writte in <span className="text-h font-bold">Java</span>,
                    a file server that is written in <span className="text-h font-bold">Go</span> and a
                    relaying service written in <span className="text-h font-bold">Rust</span>.
                </p>
                <div className = "flex flex-col gap-8 mt-10">
                    <div>
                        <div className = "flex items-center gap-3">
                            <Icon component = {LibraryBooksIcon} className = "mt-1"/>
                            <h2 className = "text-2xl font-semibold">
                                HTTP Library
                            </h2>
                        </div>
                        <p className={PARAGRAPH_CLASSNAME + "mt-3"}>
                            A basic Java library implementing HTTP Get, Range and Head methods over the Java socket API.
                        </p>
                    </div>
                    <div>
                        <div className = "flex items-center gap-3">
                            <Icon component = {CameraFrontIcon} className = "mt-1"/>
                            <h2 className = "text-2xl font-semibold">
                                Client
                            </h2>
                        </div>
                        <p className={PARAGRAPH_CLASSNAME + "mt-3"}>
                            Java client that first fetches the text file containing the list of posible text files. And then using 
                            the <span className = "text-h font-semibold">Head</span> and <span className = "text-h font-semibold">Range</span> methods to <span className = "text-h font-semibold">Asynchronously</span> downloads
                            and save the files to the local system.
                        </p>
                    </div>
                    <div>
                    <div className = "flex items-center gap-3">
                            <Icon component = {AttachFileIcon} className = "mt-1"/>
                            <h2 className = "text-2xl font-semibold">
                                File Service
                            </h2>
                        </div>
                        <p className = {PARAGRAPH_CLASSNAME + "mt-3"}>
                            A very simple <span className = "text-h font-semibold">Go</span> file server that serves text files
                            located under the <span className="text-h font-bold">./static</span> folder.
                        </p>
                    </div>
                </div>
            </ProjectCard>
            <ProjectCard
                title       = "Introduction to Category Theory"
                featureList = {
                    [
                        {text: "Categories"},
                        {text: "Functors"},
                        {text: "Natural Transformations"},
                        {text: "Yoneda's Lemma"}
                    ]
                }
                cta = {{text: "Read It", link: "/thesis/introduction-to-category-theory"}}
            >
                <p className={PARAGRAPH_CLASSNAME + " mt-10"}>
                    An introductory paper about <ExternalLink text = "Category Theory" link=""/>.
                    It introduces the reader with the foundational structures in the field. Progresively builds on top
                    of them, until the given information is enough to prove <ExternalLink text="Yoneda Lemma" link = "https://ncatlab.org/nlab/show/Yoneda+lemma"/>. 
                    Which is a significant introductory lemma in Category Theory. 
                </p>
            </ProjectCard>
            <ProjectCard
                title       = "Pertubation Methods on Lotka Volterra Equations"
                featureList = {
                    [
                        {text: "Mathematical Moldelling"},
                        {text: "Perturbation Methods"},
                        {text: "Analysis"},
                        {text: "Partial Differential Equations"}
                    ]
                }
                cta = {{text: "Read It", link: "/project/pertubation-methods-on-lotka-volterra-equations"}}
            >
                <p className={PARAGRAPH_CLASSNAME + " mt-10"}>
                    An analysis paper about the usage 
                    of <ExternalLink text = "Perturbation Methods" link = "https://en.wikipedia.org/wiki/Perturbation_theory" /> on <ExternalLink
                        text = "Lotka–Volterra" 
                        link = "https://en.wikipedia.org/wiki/Lotka%E2%80%93Volterra_equations"
                    /> equations 
                    which are partial differential eqautions 
                    modeling the change in the population sizes of prey predator systems.
                </p>
            </ProjectCard>
        </div>
    </div>
)
