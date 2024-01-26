import React from 'react'
import { CardProfile } from '../../inc'

const photo =
    'https://firebasestorage.googleapis.com/v0/b/portafolio-a8d13.appspot.com/o/Potafolio%2FProfile%2FFotosHugo%2Fprofile.jpg?alt=media&token=7752a102-74bd-42d1-96d3-1445c426e499'
const bgHead = 'https://images.unsplash.com/photo-1522770179533-24471fcdba45'

const profile = {
    name: 'Hugo Andrés Díaz Bernal',
    job: 'Software Developer',
    description: 'JavaScript Enthusiastic',
    location: 'Bogotá Colombia',
}

const AboutMeView = (): JSX.Element => {
    const aboutMe = {
        images: {
            photo,
            bgHead,
        },
        profile,
        socialMedia: ['GitHub', 'LinkedIn', 'Twitter'],
    }

    return (
        <main>
            <CardProfile
                images={aboutMe.images}
                profile={aboutMe.profile}
                socialMedia={aboutMe.socialMedia}
            />
        </main>
    )
}

export default AboutMeView
