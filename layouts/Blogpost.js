import { styled } from '../stitches.config'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BlogDate from '../components/BlogDate'
import { Post, PostMain, PostContent, PostContainer } from '../components/Post'
import { Wrapper } from '../components/Wrapper'

export default function Blogpost({ children }) {
  const { title, image, date, views } = children.props

  return (
    <Wrapper>
      <Navbar image={image} />
      <Main image={image}>
        {image && (
          <PostHeader>
            <PostHeaderTitle>{title}</PostHeaderTitle>
            <PostHeaderSubtitle>
              <BlogDate dateString={date} />
            </PostHeaderSubtitle>
          </PostHeader>
        )}
        <PostImage >
          <ImageContainer>
            <img src={image} />
          </ImageContainer>
        </PostImage>
        
        <PostContent
          css={{
            '& ::selection': {
              background: '#ff80bf',
              color: '#000',
              WebkitTextFillColor: '#000',
            },
          }}
        >
          <PostContainer>
            {!image && (
              <div>
                <PostContentTitle>{title}</PostContentTitle>
                <PostContentSubtitle>
                  <BlogDate dateString={date} />
                </PostContentSubtitle>
              </div>
            )}

            {children}
          </PostContainer>
        </PostContent>
      </Main>
      <Footer />
    </Wrapper>
  )
}

function Main(props) {
  return props.image ? (
    <Post>{props.children}</Post>
  ) : (
    <PostMain>{props.children}</PostMain>
  )
}

const PostHeader = styled('div', {
  backgroundColor: '#141618',
  minHeight: '200px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  flexDirection: 'column',
})

export const PostTitle = styled('h1', {
  textAlign: 'center',
  paddingTop: '24px',
  paddingBottom: '24px',
  '@bp2': {
    fontSize: '72px',
    lineHeight: '90px',
    maxWidth: '60%',
  },
})

export const PostHeaderTitle = styled(PostTitle, {
  color: '#fff',
  margin: '59px auto 0',
  position: 'relative',
  zIndex: 3,
  fontSize: '36px',
  lineHeight: '48px',
  padding: '24px 12px',
  '@bp2': {
    fontSize: '60px',
    lineHeight: '80px',
  },
})

export const PostContentTitle = styled(PostTitle, {
  color: '$primary',
  margin: '90px auto 0',
  maxWidth: 'none',
  fontSize: '48px',
  lineHeight: '60px',
  textAlign: 'center',
  '@bp2': {
    marginTop: 0,
  },
})

const PostSubtitle = styled('h2', {
  color: '#fff',
  fontSize: '16px',
  fontWeight: 500,
  textAlign: 'center',
})

const PostHeaderSubtitle = styled(PostSubtitle, {
  bottom: '20px',
  zIndex: 2,
  margin: '0',
  width: '100%',
})

const PostContentSubtitle = styled(PostSubtitle, {
  color: '$secondary',
  fontSize: '16px',
  margin: '0 0 60px',
})


const PostImage = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  margin: '24px',
})

const ImageContainer = styled('div', {
  maxWidth: '300px',
})

