import { styled } from '../stitches.config'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { parseISO, format, intervalToDuration } from 'date-fns'
import Base from '../layouts/Base'
import Toast from '../components/Toast'
import stripHtml from '../lib/strip-html'
import items from '../data/about'

export async function getStaticProps() {
  const meta = {
    title: 'About // Dylan Reid',
    description:
      "Dylan Reid is a software engineer from Austin, TX. He works primarily as a frontend engineer, specializing in Angular development. He is a proud husband, avid pickleball player, lover of mexican food, and a dog dad.",
    tagline: 'Learn. Grow. Lead.',
    image: '/static/img/dylan.jpg',
    primaryColor: 'pink',
    secondaryColor: 'purple',
  }

  return { props: meta }
}

function About(props) {
  const { title, description, image } = props
  const [toastTitle, setToastTitle] = React.useState('')
  const [toastDescription, setToastDescription] = React.useState('')
  const [showToast, setShowToast] = React.useState(false)

  const renderIntro = () => {
    return (
      <Container>
        <Section>
          <Image
            alt="Dylan"
            src="/static/img/dylan.jpg"
            width="336"
            height="336"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
            priority
          />
        </Section>
        <Section>
          <Paragraph
            css={{
              marginTop: '16px',
              '@bp2': { marginTop: '-6px' },
            }}
          >
            <strong>Hey, I'm Dylan Reid</strong>
          </Paragraph>
          <Paragraph>
            I live in Austin, TX, where I work as a software engineer. I work primarily as a frontend engineer, specializing in Angular development. I am a proud husband, avid pickleball player, lover of mexican food, and a dog dad.
          </Paragraph>
        </Section>
      </Container>
    )
  }

  const renderAll = () => {
    return items.map((item, index) => {
      return (
        <div style={{ marginBottom: 40 }} key={index}>
          <h3>{item.jobTitle}</h3>
          <p style={{ margin: 0 }}>
            <a href={item.companyUrl} target="_blank">
              {item.company}
            </a>
            <span> • {item.location}</span>
          </p>
          <p style={{ margin: 0 }}>
            <span>{format(parseISO(item.startDate), 'LLL yyyy')}</span>
            <span> – </span>
            <span>
              {item.endDate
                ? format(parseISO(item.endDate), 'LLL yyyy')
                : 'Present'}
            </span>
            <span> • </span>
            <span>{getDuration(item.startDate, item.endDate)}</span>
          </p>
        </div>
      )
    })
  }

  const getDuration = (startDate, endDate) => {
    const durationObj = intervalToDuration({
      start: parseISO(startDate),
      end: endDate ? parseISO(endDate) : new Date(),
    })

    let durationStr = ''

    if (durationObj.years > 1) {
      durationStr = `${durationObj.years} yrs `
    } else if (durationObj.years === 1) {
      durationStr = `${durationObj.years} yr `
    }

    durationStr += `${durationObj.months} mos`

    return durationStr
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://dylanreid.io/about" property="og:url" />
        <meta content={`https://dylanreid.io${image}`} property="og:image" />
      </Head>

      {renderIntro()}

      <div>
        <Paragraph>
          I went to college at Washington University in St. Louis, where I earned a BS and MS in mechanical engineering. I spent 6 years working in the aerospace and automotive engineering fields. I had the opportunity to work on some cool things, like Boeing F-15s, semi-truck exhaust pipes (ok, that those weren’t so cool), and spent 4 years at Insitu – a Boeing subsidiary that makes military surveillance UAVs.
        </Paragraph>
        <Paragraph>
          As I was working in mechanical engineering, I started wondering if that was really the right field for me. I began looking at different career options. That’s when I decided to make the switch into software engineering. You can check out this post for my reasoning for moving into the software industry.
        </Paragraph>
        <Paragraph>
          I currently work at General Motors as a software engineer. I work on a frontend library that over 100 teams at GM use to easily create the frontend of their apps. One of my favorite aspects of the job is acting as a community liaison. In this aspect of my role, I create helpful video resources, where I demonstrate how other developers can use the frontend components that our team develops.
        </Paragraph>
        <Paragraph>
          I am obsessed with personal development. While I focus on software engineer and career on this site, I believe that anyone can benefit from attempting to optimize their health, confidence, relationships, or friendships. For me, that tends to start with the right psychology and mindset for approaching any domain. You can check out my articles or notes to see my thoughts on these topics.
        </Paragraph>
        <Paragraph>
          <strong>Say Hi!</strong>
        </Paragraph>
        <Paragraph>
          If you would like to reach out, you can visit my <a href="/contact">contact page</a>. Say hi, I’d love to hear from you 🙂
        </Paragraph>
      </div>

      <h2>Career</h2>
      {renderAll()}

      <Toast
        title={toastTitle}
        description={toastDescription}
        isSuccess={true}
        showToast={showToast}
        setShowToast={setShowToast}
      />
    </>
  )
}

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '@bp2': { flexDirection: 'row' },
})

const Paragraph = styled('p', {
  '@bp2': { margin: '15px 0' },
})

const ButtonsContainer = styled('p', {
  display: 'flex',
  alignItems: 'center',
})

const Section = styled('div', {
  marginTop: '0px',
  width: 'auto',
  '@bp2': { width: '48%' },
})

About.Layout = Base

export default About
