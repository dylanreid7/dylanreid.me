import { styled } from '../stitches.config'
import Head from 'next/head'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
import { getAllNotes, getPostBySlug } from '../lib/blog'
import ListItem from '../components/ListItem'
import FeaturedArticle from '../components/FeaturedArticle'
import { ListGroup } from '../components/ListGroup'
import { AnimateSharedLayout } from 'framer-motion'

export async function getStaticProps() {
  const allNotes = getAllNotes(['date', 'skip', 'slug', 'title'])

  const featuredParams = [
    'date',
    'slug',
    'title',
    'image',
    'content',
    'description',
  ]

  const featuredNotes = [
    getPostBySlug('why-i-switched-to-sw-engineering', featuredParams),
    getPostBySlug('cs-curriculum', featuredParams),
  ]

  return {
    props: {
      title: 'Notes // Dylan Reid',
      tagline: 'Breakdowns. Ratings. Summaries.',
      image: '/static/images/articles-bw.jpg',
      primaryColor: 'blue',
      secondaryColor: 'orange',
      featuredNotes,
      allNotes,
    },
  }
}

function Notes(props) {
  const renderFeatured = () => {
    return props.featuredNotes.map((post, index) => {
      return (
        <FeaturedArticle
          key={index}
          index={index}
          href={`/${post.slug}/`}
          title={post.title}
          description={post.description}
          image={post.image}
          stats={post.stats}
          content={post.content}
        />
      )
    })
  }

  const renderAll = () => {
    return props.allNotes.map((post, index) => {
      if (!post.skip) {
        return (
          <ListItem
            key={index}
            index={index}
            href={`/${post.slug}/`}
            title={post.title}
            date={post.date}
          />
        )
      }
    })
  }

  const { title, image } = props
  const description = `Here you can find all the <strong>${props.allNotes.length} notes</strong> I wrote. I write up book notes as well as notes on courses. I tend to read technical books and personal development books.`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://dylanreid.me/notes" property="og:url" />
        <meta content={`https://dylanreid.me${image}`} property="og:image" />
      </Head>

      <AnimateSharedLayout>
        <p dangerouslySetInnerHTML={{ __html: description }} />

        <h2>Featured Notes</h2>
        <FeaturedNotes>{renderFeatured()}</FeaturedNotes>

        <h2>All Notes</h2>
        <ListGroup>{renderAll()}</ListGroup>
      </AnimateSharedLayout>
    </>
  )
}

const FeaturedNotes = styled('div', {
  margin: '10px 0 0 -20px',
  '@bp2': { display: 'flex', justifyContent: 'space-between' },
})

Notes.Layout = Base

export default Notes
