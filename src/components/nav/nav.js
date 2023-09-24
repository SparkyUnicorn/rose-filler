export const Nav = () => {
  return (
    <>
      <div
        data-collapse="medium"
        data-animation="default"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navigation w-nav"
      >
        <div className="navigation-wrap">
          <a
            href="/"
            aria-current="page"
            className="logo-link w-nav-brand w--current"
          >
            <img
              src="https://uploads-ssl.webflow.com/650c942bb66e5d29f2148d58/650c9e0b1e59e3be79d0868f_Rose%20Filler%20Temp%20Logo.png"
              width="221"
              sizes="(max-width: 479px) 100vw, 221px"
              srcset="
              https://uploads-ssl.webflow.com/650c942bb66e5d29f2148d58/650c9e0b1e59e3be79d0868f_Rose%20Filler%20Temp%20Logo-p-500.png   500w,
              https://uploads-ssl.webflow.com/650c942bb66e5d29f2148d58/650c9e0b1e59e3be79d0868f_Rose%20Filler%20Temp%20Logo-p-800.png   800w,
              https://uploads-ssl.webflow.com/650c942bb66e5d29f2148d58/650c9e0b1e59e3be79d0868f_Rose%20Filler%20Temp%20Logo-p-1080.png 1080w,
              https://uploads-ssl.webflow.com/650c942bb66e5d29f2148d58/650c9e0b1e59e3be79d0868f_Rose%20Filler%20Temp%20Logo-p-1600.png 1600w,
              https://uploads-ssl.webflow.com/650c942bb66e5d29f2148d58/650c9e0b1e59e3be79d0868f_Rose%20Filler%20Temp%20Logo-p-2000.png 2000w,
              https://uploads-ssl.webflow.com/650c942bb66e5d29f2148d58/650c9e0b1e59e3be79d0868f_Rose%20Filler%20Temp%20Logo.png        2475w
            "
              alt=""
              className="logo-image"
            />
          </a>
          <div className="menu">
            <nav role="navigation" className="navigation-items w-nav-menu">
              <a href="#" className="navigation-item w-nav-link">
                Tax Preparation
              </a>
              <a href="#" className="navigation-item w-nav-link">
                real estate
              </a>
              <a href="#" className="navigation-item w-nav-link">
                insurance
              </a>
              <a href="#" className="navigation-item w-nav-link">
                small business
              </a>
            </nav>
            <div className="menu-button w-nav-button">
              <img
                src="https://uploads-ssl.webflow.com/650c942bb66e5d29f2148d58/650c942cb66e5d29f2148e79_menu-icon.png"
                width="22"
                alt=""
                className="menu-icon"
              />
            </div>
          </div>
          <a
            href="mailto:mail@business.com?subject=You&#x27;ve%20got%20mail!"
            className="button cc-contact-us w-inline-block"
          >
            <div className="text-block">Contact Rose</div>
          </a>
        </div>
      </div>
    </>
  );
};
