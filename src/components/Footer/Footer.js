import styles from "./Footer.module.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.footer}`}>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div
          className={`sm:flex sm:items-center sm:justify-between ${styles.footerLogoWrap}`}
        >
          <div className="flex mb-4 sm:mb-0">
            {/* logo */}
            <div className={`svg items-start ${styles.footerLogo}`}>
              <svg className="svg">
                <symbol id="s-text">
                  <text y="135">alex silviu</text>
                </symbol>
                <g className={styles.g}>
                  <use
                    href="#s-text"
                    className={`text-copy ${styles.textCopy}`}
                  ></use>
                  <use
                    href="#s-text"
                    className={`text-copy ${styles.textCopy}`}
                  ></use>
                  <use
                    href="#s-text"
                    className={`text-copy ${styles.textCopy}`}
                  ></use>
                  <use
                    href="#s-text"
                    className={`text-copy ${styles.textCopy}`}
                  ></use>
                  <use
                    href="#s-text"
                    className={`text-copy ${styles.textCopy}`}
                  ></use>
                </g>
              </svg>
            </div>
          </div>
          <ul
            className={`flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 justify-center ${styles.nav}`}
          >
            <li>
              <a href="/" id="home" className="mr-4 md:mr-6">
                home
              </a>
            </li>
            <li>
              <a href="/#about" id="about" className="mr-4 md:mr-6">
                about
              </a>
            </li>
            <li>
              <a href="/#portfolio" id="portfolio" className="mr-4 md:mr-6">
                portfolio
              </a>
            </li>
            <li>
              <a href="/#contact" id="contact" className="mr-4 md:mr-6">
                contact
              </a>
            </li>
          </ul>
        </div>
        <hr
          className={`my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 ${styles.border}`}
        />
        <span
          className={`flex text-sm text-gray-500 sm:text-center justify-center dark:text-gray-400 ${styles.copyright}`}
        >
          © {currentYear} Alex Silviu Portfolio. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
