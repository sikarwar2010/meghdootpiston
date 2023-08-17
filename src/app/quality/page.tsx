import React from 'react'
import { Metadata } from 'next'
import QualityCarousel from '@/components/Quality/QualityCarousel'
import AboutQuality from '@/components/Quality/AboutQuality'
import QualityCertifcate from '@/components/Quality/QualityCertifcate'
import QualityList from '@/components/Quality/QualityList'

export const metadata: Metadata = {
    title: 'Quality',
    description: 'Generated by create next app',
}

const Quality = () => {
    return (
        <div>
            <main>
                <QualityCarousel />
                <AboutQuality />
                <QualityCertifcate />
                <QualityList />
            </main>
        </div>
    )
}

export default Quality