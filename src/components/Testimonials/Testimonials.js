import styles from './Testimonials.module.scss';
import Image from 'next/image';

export default function Testimonials() {
    return (
        <div className="flex flex-col gap-8 lg:flex-row">
            
        <div className={`${styles.testimonials} w-full lg:w-1/2 sm:justify-start justify-center flex flex-col`}>
            <div className="w-full flex flex-col items-center justify-center gap-8">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <p>
                            I've had the pleasure of working with Alex for the past 6 months on two projects
                            and cannot recommend him enough. People looking not only for a talented and creative
                            person, but also an excellent team player will find Alex a real win for the team.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>
                            Alex has a great understanding of user experience, but he's also an outstanding team player
                            and his exceptional interpersonal skills really set him apart.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>
                            His broad knowledge and understanding of innovative tech and concepts have helped shape our
                            solutions beautifully while his easy humour and great communication made sure I really enjoyed
                            working with him.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>
                            He's a wonderful collaborator who is naturally cooperative and always willing to listen to feedback
                            and share his insights to ensure that the project's objectives are more than met.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>
                            Alex's positive attitude and work ethic have been inspiring, and our professional relationship has
                            been an absolute pleasure.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:text-start text-center items-center gap-8">
                    <Image
                        src="/wilhelmine_aditerna.jpg"
                        width={100}
                        height={100}
                        className="rounded-full"
                        placeholder="blur"
                        blurDataURL="/wilhelmine_aditerna.jpg"
                        style={{ objectFit: "contain" }}
                        alt="Alex Silviu Designer & Developer Illustration"
                    />
                    <div className="flex flex-col gap-2 tracking-wider author">
                        <h5 className="font-bold" >Wilhelmine Dohmen</h5>
                        <p>Product Owner, Aditerna</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${styles.testimonials} w-full lg:w-1/2 sm:justify-start justify-center flex flex-col`}>
        <div className="w-full flex flex-col items-center justify-center gap-8">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <p>
                        I have been having the great pleasure of working with/partly leading for a period of about 2 years
                        when I was working as an operational consultant at Innovisor.
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <p>
                        Alex started out working with us within the design part where he completely redesigned our whole platform
                        but also did the actual development of the website.
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <p>
                        When he joined us as part of an internship it was like working with a very professional designer,
                        always understanding the pitch we gave, delivering super user-oriented designs and afterwards
                        making it into an actual website, and always delivering things on time.
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <p>
                        After the internship Alex started working more broadly with us and have also worked on marketing
                        materials such as ads etc.
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <p>
                        During his work he has shown:
                    </p>
                        <ul>
                            <li>
                                A strong business understanding
                            </li>
                            <li>
                                Being very liked by his colleagues
                            </li>
                            <li>
                                Shown a strong capability to move into areas that he did not try before
                            </li>
                            <li>
                                A unique understanding of always keeping the users' point of view
                            </li>
                        </ul>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:text-start text-center items-center gap-8">
                <Image
                        src="/eg_innovisor.jpg"
                        width={100}
                        height={100}
                        className="rounded-full"
                        placeholder="blur"
                        blurDataURL="/eg_innovisor.jpg"
                        style={{ objectFit: "contain" }}
                        alt="Alex Silviu Designer & Developer Illustration"
                    />
                <div className="flex flex-col gap-2 tracking-wider author">
                    <h5 className="font-bold" >Eg Nicolajsen</h5>
                    <p>Operational Consultant, Innovisor</p>
                </div>
            </div>
        </div>
    </div>
    </div>  
    )
}
