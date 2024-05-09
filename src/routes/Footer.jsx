import React from "react";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-1-4 remove-gutter-xs'>
              <div className='background-secondary'>Feature Content</div>
            </div>
            <div className='col-1-4 remove-gutter-xs'>
              <div className='background-secondary'>Feature</div>
            </div>
            <div className='col-1-4 remove-gutter-xs'>
              <div className='background-secondary'>Feature Content</div>
            </div>
            <div className='col-1-4 remove-gutter-xs'>
              <div className='background-secondary'>Feature Content</div>
            </div>
          </div>
        </div>
      </section>
      <section className='background-tertiary'>
        <div className='container'>
          <div className='row'>
            <div className='col-1-4 minH remove-gutter-xs'>$</div>
            <div className='col-1-4 remove-gutter-xs'>privacy</div>
            <div className='col-1-4 remove-gutter-xs'>privacy</div>
            <div className='col-1-4 remove-gutter-xs'>user terms</div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
