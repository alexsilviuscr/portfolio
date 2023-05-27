import styles from './ContactForm.module.scss';
import Button from '../Button/Button';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import SoMeButton from '../Button/SoMeButton';

export default function ContactForm() { 
    return (
    <div className={`${styles.contactForm}`}>

        <form  name="Alex Silviu Contact Form" className={`${styles.form} flex flex-col gap-8`} action="https://getform.io/f/5f5bdafe-53bc-4721-98c0-f4e160cda0f2" method="POST" >
            <div className="flex flex-col gap-4">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Your name" required />
            </div>
            <div className="flex flex-col gap-4">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Your email" required />
            </div>
            <div className="flex flex-col gap-4">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="5" placeholder="Your message..." required ></textarea>
            </div>
            <div className="w-full flex pt-4">
                <Button type="submit" id="submit">Send message</Button>
                <button type="submit" id="submit" className={styles.button}>Send message</button>
            </div>
        </form>

        <div className={`${styles.contactInfo}`}>
            <div className={`${styles.contactList} flex flex-col gap-8`}>
                <div className="pb-8">
                    <h3 className="pb-4">
                        If you want to collaborate or just have a cool idea, hit me up.
                    </h3>
                    <SoMeButton />
                </div>

                <li className={`${styles.listItem} flex flex-row items-center gap-4`}>
                    <span>
                        <MdLocationOn title="Location Icon" className={styles.icon} />
                    </span>
                    <span className="flex flex-col gap-1">
                        <p className={styles.title}>
                            Location
                        </p>
                        <p className={styles.subtitle}>
                            Timisoara, Romania
                        </p>
                    </span>
                </li>

                <li className={`${styles.listItem} flex flex-row items-center gap-4`}>
                    <span>
                        <MdPhone title="Location Icon" className={styles.icon} />
                    </span>
                    <span className="flex flex-col gap-1">
                        <p className={styles.title}>
                            WhatsApp
                        </p>
                        <p className={styles.subtitle}>
                            <a href="tel:0040771560307">(0040) 771 560 307</a>
                        </p>
                    </span>
                </li>
                <li className={`${styles.listItem} flex flex-row items-center gap-4`}>
                    <span>
                        <MdEmail title="Location Icon" className={styles.icon} />
                    </span>
                    <span className="flex flex-col gap-1">
                        <p className={styles.title}>
                            Email
                        </p>
                        <p className={styles.subtitle}>
                            <a href = "mailto: alexsscr@proton.me">alexsscr@proton.me</a>
                        </p>
                    </span>
                </li>
            </div>
        </div>
    </div>
  );
}