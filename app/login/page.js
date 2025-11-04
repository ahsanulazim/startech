import UserForm from '@/components/auth/UserForm'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Section from '@/components/ui/Section'
import React from 'react'

export default function login() {
    return (
        <main className='bg-base-300'>
            <Section>
                <Breadcrumbs title="Login" />
            </Section>
            <Section>
                <UserForm login={true} />
            </Section>
        </main>
    )
}
