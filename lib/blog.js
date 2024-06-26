import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'

const postsDirectory = join(process.cwd(), 'articles')
const notesDirectory = join(process.cwd(), 'notes')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getNoteSlugs() {
  return fs.readdirSync(notesDirectory)
}

function isNote(slug) {
  const realSlug = slug.replace(/\.md$/, '')
  const notes = getNoteSlugs()
  const notesSlugs = notes.map(note => note.split('.')[0])
  return notesSlugs.includes(realSlug)
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const posts = getPostSlugs()
  let fullPath = join(postsDirectory, `${realSlug}.md`) 
  if (isNote(slug)) {
    fullPath = join(notesDirectory, `${realSlug}.md`)
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug
    }

    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map(slug => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))

  return posts
}

export function getAllNotes(fields = []) {
  const slugs = getNoteSlugs()
  const notes = slugs
  .map(slug => getPostBySlug(slug, fields, 'note'))
  .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))

  return notes
}

export async function convertMarkdownToHtml(markdown) {
  const result = await remark()
    .use(html, { sanitize: false })
    .use(prism)
    .process(markdown)
  return result.toString()
}


