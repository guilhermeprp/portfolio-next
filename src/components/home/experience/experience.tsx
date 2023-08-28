'use client'
import { useContext } from 'react';
import { Locale } from '@/language/locale';
import './experience.css';

export function Experience() {
  const { translate, setLanguage } = useContext(Locale);

  return (
    <>
      <button type="button" onClick={() => { setLanguage("pt-br") }}>Portugues</button>
      <button type="button" onClick={() => { setLanguage("en-us") }}>English</button>
      <section id="section-experience" className="sections px-12">
        <div className="wrapper">
          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <div className="section-title-row">
              <h1 className="section-title">
                {'< Experience'}
                <span className="blink-caret">|</span>
              </h1>

              <div className="section-background-line" />
            </div>
            <div className="relative pl-16">
              {translate.experience?.map((element) => (
              <div
                key={element.id}
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
                className="experience-card"
              >
                <h3>{element.position}</h3>
                <h2 className='text-xl mx-0 mt-4 mb-2'>{element.title}</h2>
                <p className='mb-3'>
                  {element.description.split('\n').map((str, index) => (
                    <span className='inline-block mb-2' key={index}>{str}</span>
                  ))}
                </p>
                <i>
                  {element.startDate} - {element.endDate}
                </i>
                <div className="card-ball" />
              </div>
            )).reverse()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
