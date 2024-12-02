import { wait } from '@/lib/posts'

const About = async () => {
  await wait(2000)
  return <div>About Page</div>
}

export default About
