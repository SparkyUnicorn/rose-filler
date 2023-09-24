export const Landing = () => {
  return (
    <>
      <div className="section cc-store-home-wrap">
        <div className="intro-header">
          <div className="intro-content cc-homepage">
            <img
              src="https://uploads-ssl.webflow.com/650c942bb66e5d29f2148d58/650cff458193a01db65570ab_Screen%20Shot%202023-09-21%20at%209.38.43%20PM.png"
              loading="lazy"
              width="150"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 148px, (max-width: 991px) 31vw, 39vw"
              alt="Image of Rose Filler"
              srcset="
              https://uploads-ssl.webflow.com/650c942bb66e5d29f2148d58/650cff458193a01db65570ab_Screen%20Shot%202023-09-21%20at%209.38.43%20PM-p-500.png   500w,
              https://uploads-ssl.webflow.com/650c942bb66e5d29f2148d58/650cff458193a01db65570ab_Screen%20Shot%202023-09-21%20at%209.38.43%20PM-p-800.png   800w,
              https://uploads-ssl.webflow.com/650c942bb66e5d29f2148d58/650cff458193a01db65570ab_Screen%20Shot%202023-09-21%20at%209.38.43%20PM-p-1080.png 1080w,
              https://uploads-ssl.webflow.com/650c942bb66e5d29f2148d58/650cff458193a01db65570ab_Screen%20Shot%202023-09-21%20at%209.38.43%20PM.png        1236w
            "
              className="image"
            />
            <div className="intro-text w-clearfix">
              <div
                data-w-id="86e64837-0616-515b-4568-76c147234d21"
                //   style="opacity: 0"
                className="heading-jumbo"
              >
                Rose Hong Filler
              </div>
              <div className="paragraph-bigger cc-bigger-white-light">
                Houston-based entrepreneur with 35 years of experience in the
                fields of Business Development, Investments, Tax Services, Real
                Estate, and Insurance Sales and Advisement.
                <br />
              </div>
              <a
                href="mailto:mail@business.com?subject=You&#x27;ve%20got%20mail!"
                className="button cc-contact-us w-inline-block contact-button"
              >
                <div className="text-block">let&#x27;s connect</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
