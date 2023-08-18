import React from 'react'
import { Metadata } from 'next'
import PistonCarousel from '@/components/Products/PistonCarousel'
import PistonInfo from '@/components/Products/PistonInfo'
import TypePistons from '@/components/Products/TypePistons'
import CustomerList from '@/components/Products/CustomerList'

export const metadata: Metadata = {
    title: 'Pistons',
    description: 'Generated by create next app',
}

const Pistons = () => {
    return (
        <div>
            <main>
                <PistonCarousel />
                <PistonInfo />
                <TypePistons />
                <CustomerList />
            </main>
        </div>
    )
}

export default Pistons