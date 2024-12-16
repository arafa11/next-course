import PageViews from '@/app/components/PageViews'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { Suspense } from 'react'
import beach from '@/public/images/beach-boat.jpg'
import Image from 'next/image'

export async function generateStaticParams() {
  const posts = await getAllPosts()

  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params, searchParams }, parent) {
  const { slug } = params
  const { content, frontmatter } = await getPostBySlug(slug)

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: `${frontmatter.title} by ${frontmatter.author}`,
  }
}

const Page = async ({ params }) => {
  const { slug } = params

  const { content, frontmatter } = await getPostBySlug(slug)

  return (
    <section className="py-24">
      <div className="container">
        <Image src={beach} alt="beach" className="h-96 rounded object-cover" />
        {/* Post frontmatter */}
        <header className="rounded bg-gray-100 p-8">
          <h1 className="font-serif text-3xl">{frontmatter.title}</h1>
          <p className="text-sm font-light uppercase leading-snug tracking-wide text-gray-500">
            {frontmatter.author}
          </p>
          <Suspense fallback={<div>loading view count</div>}>
            <PageViews />
          </Suspense>
        </header>

        {/* Post content */}
        <main className="prose mt-12">{content}</main>
      </div>
    </section>
  )
}

export default Page
