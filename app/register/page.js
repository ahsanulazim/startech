import UserForm from '@/components/auth/UserForm'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Section from '@/components/ui/Section'
import React from 'react'

export default function page() {
    return (
        <main className='bg-base-300'>
            <Section>
                <Breadcrumbs title="Register" />
            </Section>
            <Section>
                <UserForm login={false} />
            </Section>
        </main>
    )
}
