import React from 'react';

const Goals = () => (
    <section>
        <h2 className='u-center-text'>
            Achieve your goals with <span className='project-name'>Classity</span>
        </h2>
        <div className='landing-goals'>
            <div className='landing-goals__card'>
                <img
                    className='landing-goals__img'
                    src={require('../../img/skill.png')}
                    alt='Skill icon'
                />
                <h3>Learn the latest skills</h3>
                <p className='landing-goals__text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor scelerisque
                    nunc sit amet posuere.
                </p>
            </div>
            <div className='landing-goals__card'>
                <img
                    className='landing-goals__img'
                    src={require('../../img/career.png')}
                    alt='Career icon'
                />
                <h3>Get ready for a career</h3>
                <p className='landing-goals__text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor scelerisque
                    nunc sit amet posuere.
                </p>
            </div>
            <div className='landing-goals__card'>
                <img
                    className='landing-goals__img'
                    src={require('../../img/certificate.png')}
                    alt='Certificate icon'
                />
                <h3>Earn a certificate</h3>
                <p className='landing-goals__text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor scelerisque
                    nunc sit amet posuere.
                </p>
            </div>
            <div className='landing-goals__card'>
                <img
                    className='landing-goals__img'
                    src={require('../../img/organization.png')}
                    alt='Organization card'
                />
                <h3>Upskill your organization</h3>
                <p className='landing-goals__text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor scelerisque
                    nunc sit amet posuere.
                </p>
            </div>
        </div>
    </section>
);

export default Goals;
