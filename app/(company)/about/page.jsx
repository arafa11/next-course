// import { wait } from '@/lib/posts'

async function getData() {
  return new Promise((res, rej) =>
    setTimeout(() => {
      const random = Math.random()
      if (random > 0.5) {
        rej('Failed to get data')
      }
      res()
    }, 2000),
  )
}
const About = async () => {
  // await wait(2000)
  await getData()
  return <div>About Page</div>
}

export default About
